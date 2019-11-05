# Mempool

## Design Requirements

Mempool is responsible for collecting and packaging new transactions to consensus module.
Naturally, we have some requirements for mempool.

1. Excellent performance. 
It is required to achieve the performance of inserting 10,000+ tps in an ordinary computer.

2. Fairness. Transactions should been packaged in the order in which they are received.

3. In addition, in order to match the design of PPCT (parallel process of consensus 
and transaction-synchronization), there is a third requirement.
The data structure returned by package should consists of two parts: 
order-transactions for consensus and propose-transactions for synchronization.

## Solution

### Requirement 1.

To achieve excellent performance, we should first analyze the process of insertion and 
propose solutions to the performance bottlenecks. 
The process includes:
1. Check if the mempool is full.
2. Check if the transaction has been included in the mempool.
3. Check that the signature of the transaction is correct and the format is compliant.
4. Check if the transaction is already on the chain.

Steps 1, 2 are very fast, not a performance bottleneck.

Step 3 involves the verification of signature, which is a time-consuming operation. 
Fortunately, the verification is an independent computationally intensive operation. 
It is suitable for high-concurrency to fully exploit CPU performance to improve performance.

As the blockchain continues to grow, historical transaction data is growing, 
and the query in step 4 will become a performance black hole. 
We solve this problem by setting a timeout field in the transaction 
and a global constraint parameter `g`.

Specifically, when the timeout of a transaction is `t`, if this transaction is still unpacked at the 
height of `t`, it will be considered invalid and discarded by the mempool. 
In order to avoid users setting timeout too high, if the timeout `t` > `h` + `g`, 
mempool with latest height `h` will also discard such transaction as illegal. 
Under this constraint, mempool with latest height `h` only needs 
to keep historical transactions with height between [h - g, h] for checking, 
and do the computational and storage complexity of the check are both reduced to `O(g)`, 
regardless of the total amount of historical transactions.

### Requirement 2.

In the case of the same transaction priority, if transactions received after but package first, 
this is obviously against fairness. 
Therefore, transactions in the mempool must be packaged on a FIFO basis.

However, according to Ethereum's nonce monotonous design, 
if the transaction pool contains multiple transactions issued by the same user, 
then the transaction needs to satisfy the partial order relationship, 
which brings great complexity to the packaging design. 
Therefore, we take random nonce instead. 
This design also brings additional benefits, 
such as better concurrent execution, simplified wallet design, and more.

In short, it is unnecessary and inefficient to force all transactions of a user to remain partial order. 
If there is some dependency between certain transactions, 
we can use a `ref` field to represent this relationship. 
This is a generic dependency expression compared to Ethereum. 
Our package algorithm can be easily extended to meet this dependency requirement.

### Requirement 3.

Since blockchain is a distributed system, 
the transaction set of different node's mempool will not be identical.
The core idea of PPCT is that if there are so many transactions in the mempool that 
cannot reach consensus in one time, 
the left transactions can be synchronized in parallel with the consensus process.
With this design, the synchronization process of the order-transactions 
can started one epoch earlier, such that the consensus efficiency has been improved.

Specifically, at the time of packaging, after order-transaction been full, 
mempool continues to package transactions as propose-transaction.
The proposal issued by the leader contains order-transactions and propose-transactions. 
The order-transaction participates in the consensus, and the propose-transaction begins to synchronize.

## Specific Design

According to the above analysis, what we need is a mempool that can support high concurrent insertion, 
package transactions on a FIFO basis, and package two types of transactions with different purposes.

In order to meet the above requirements, we use the Map and Queue structures to share transactions received, 
Map can quickly query and delete, and Queue meets the FIFO packaging requirements. 
In fact, we used two queues, just like pouring milk in two cups. 
The core data structure of mempool is as follows.

```rust
struct TxCache {
    /// Use two queues to store transactions in turn. 
    /// One queue for incumbent, and the other is candidate.
    /// Insertion and Packaging are working on incumbent queue.
    queue_0: Queue<SharedTx>,
    queue_1: Queue<SharedTx>,
    /// Use map to complete efficient random queries and deletion.
    map: Map<Hash, SharedTx>,
    /// Indicate which queue is incumbent.
    is_zero: AtomicBool,
    /// Used for atomic operations to properly handle concurrency issues.
    concurrent_count: AtomicUsize,
}

/// A structure for sharing transactions in map and queues.
type SharedTx = Arc<TxWrapper>;

struct TxWrapper {
    tx: SignedTransaction,
    /// Indicate whether this transaction is deleted by map.
    removed: AtomicBool,
    /// Indicate whether this transaction is from propose-transaction synchronization.
    proposed: AtomicBool,
}

/// Store transactions that from order-transaction synchronization.
type CallbackCache = Map<Hash, SignedTransaction>;

/// Data structure returned by package.
struct MixedTxHashes {
    order_tx_hashes: Vec<Hash>,
    propose_tx_hashes: Vec<Hash>,
}
```

New transactions that pass all checks are wrapped as `TxWrapper` with `removed` and `proposed` 
set to `false`, and then convert to `SharedTx` and insert into `TxCache`.

`MixedTxHashes` is the data structure returned by package, which contains `order_tx_hashes` for consensus 
and `propose_tx_hashes` for early synchronization.

The package algorithm is as follows, popping transactions from the incumbent queue, 
skipping the `TxWrapper` of `removed = true` until reach `cycle_limit`, 
and these transaction hashes are as `order_tx_hashes`. 
Continue to pop transactions, skipping the `TxWrapper` of `proposed = true` until reach `cycle_limit`, 
and these transaction hashes are as `propose_tx_hashes`. 
The above pop-up transactions are pushed into the candidate queue except for transactions of `removed = true`. 
When the incumbent queue is popped up, the role of two queues are exchanged.

When a node receives a proposal from the leader, 
it will query mempool checking `order_tx_hashes` and `propose_tx_hashes`. 
Mempool determines if a transaction exists by querying `TxCache.map` 
and initiates a synchronization request for the missing transaction. 
The order-transaction returned synchronously is inserted into `CallbackCache`, 
and the propose-transaction returned for synchronization is inserted into `TxCache` 
with `proposed` setting `true`.

When mempool receives a request to delete a set of `tx_hashes`, first clear `CallbackCache`, 
then query `TxCache.map`, set `removed` in the corresponding `TxWrapper` to `true`, 
and then delete the `SharedTx`.

The insertion and packaging process of mempool is shown in the figure below.

![image](./resources/mempool_process_en.png)
