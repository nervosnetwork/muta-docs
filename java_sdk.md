# Java-SDK

Java-SDK 是官方推出的基于 JavaScript 的 SDK。用于与 Muta RPC 进行交互的一系列工具。 如果你熟悉以太坊，那么可以将这个 SDK 类比于 web3j.io

## 写在前面

为了使我们不会迷惑，在开始之前需要了解一些基本的概念。当然，如果已经很熟悉 Muta ，那么请直接跳过这个部分吧。

- [Service](https://github.com/nervosnetwork/muta/tree/master/built-in-services/): Muta 提供的各种服务由 Service 暴露
- [GraphQL](https://graphql.org): Muta 的 RPC 服务由GraphQL 提供，虽然名字带有 QL(Query Language)，但它是拥有 mutation 能力的

## Install

在 muta 正式发布后， maven package 将会发布到 jcenter。
```
repositories {
    maven {
        url  "https://dl.bintray.com/lycrushamster/Muta-Java-SDK"
    }
}

dependencies {
    api "org.nervos:muta-sdk-java:${muta_version}"
}
```

## Modules in SDK

1. Client：屏蔽了 GraphQL 的细节，更方便地和链的 GraphQL API 交互。
2. wallet.Account：进行 Muta 的账户管理，一个账户包含了这个账户的私钥，公钥以及地址。
3. wallet.Wallet：Muta 的钱包功能，可以管理多个Account。
4. Service：提供对于 Muta 内置 Service 的直接通信，类似与对以太坊智能合约进行合约级别的 API 通信。
5. utils: 包括了签名、地址转换、序列化、编解码等一系列工具方法

详情请查看[SDK 文档](https://nervosnetwork.github.io/muta-sdk-java/)

## Examples

接下来的例子中，我们将通过 5 个步骤，实现在链上创建一种属于我们的[资产(Asset)](https://github.com/nervosnetwork/muta/tree/master/built-in-services/asset) ，并转账给另一个账户。

- Step 1：创建分层确定性 HD 钱包，来管理你的账户
- Step 2：创建一个 Account 对象，来管理账户的公私钥对，并对交易进行签名
- Step 3：构建 Client 对象，正式和链上的 Service 进行数据交互
- Step 4：构建一个 Muta 对象，用以和链开始高级交互
- Step 5(Optional)：通过使用 AssetService 进行交互

#### Step 1：创建分层确定性 HD 钱包，来管理你的账户

如果想要了解 HD 钱包(分层确定性钱包) 的具体信息，可以从这些 eip 中获取：
1. [bip32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)
2. [bip39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki)
3. [bip44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki)

```java
public static void main(String[] args) {
    Wallet wallet =
            Wallet.from_mnemonic(
                    "drastic behave exhaust enough tube judge real logic escape critic horror gold");
    // `m/44'/${COIN_TYPE}'/${accountIndex}'/0/0`
    Account account = wallet.derive(777,0);
}
```


好的，现在你已经了解了 muta 类了，非常简单，接下来让我们看看分层确定性钱包吧。

#### Step 2：创建一个 Account 对象，来管理账户的公私钥对，并对交易进行签名

```java
public static void main(String[] args) {

    Account account = Account.fromHexString("0x45c56be699dca666191ad3446897e0f480da234da896270202514a0e1a587c3f");
    
    account.getPrivateKeyHex();
    account.getPublicKeyHex();
    account.getBech32Address();
    //you can sign any thing you want, but usually we will use it to sign digest of tx
    account.sign(new byte[]{0x01,0x02});
}
```


#### Step3：构建 Client 对象，正式和链上的 Service 进行数据交互

```java
public static void main(String[] args) {
    
    // muta 使用 OkHttpClient， 你可以手动配置 OkHttpClient 并传递给 muta
    Client client = new Client("http://localhost:8000/graphql", okHttpClient);
    
    // get a block
    Block block = client.getBlock(GUint64.fromLong(0));
    
    // get a latest block
    block = client.getBlock(null);
    
    // get a transaction
    SignedTransaction signedTransaction =
        client.getTransaction(
            GHash.fromHexString(
            "0x0000000000000000000000000000000000000000000000000000000000000000"));
    
    // get a receipt
    Receipt receipt =
        client.getReceipt(
            GHash.fromHexString(
            "0x0000000000000000000000000000000000000000000000000000000000000000"));

    // query
    ServiceResponse serviceResponse =  client.queryService("service","method","payload,json string", GUint64.fromLong(100),
            GAddress.fromBech32("muta13mv6v8wqj24204lanrhhzry6pnswnncga5c8cl"), GUint64.fromLong(1), GUint64.fromHexString("0xffffffff"));

}
```

#### Step 4：构建一个 Muta 对象，用以和链开始高级交互

当然,如果你通过[快速入门](./getting_started.md)起了一条默认配置的链，并且现在你只是想跑通本文档的例子，你可以直接执行下面的指令。

首先，构造一个 Muta 对象。
```java
/*
* 因为测试链的参数基本一致,所以上面的参数一般不会修改
*/

Muta muta = Muta.defaultMuta();

// 你也可以手动配置所有的参数

Muta muta = new Muta(Client.defaultClient(), Account.defaultAccount(), MutaRequestOption.defaultMutaRequestOption());

// 其中 Client 和 Account 上面已知， MutaRequestOption 是一些 client 操作的参数。这些参数你可以手动调整。

public class MutaRequestOption {

    // muta 链的 chainId， 必须和链保持一致
    @NonNull private GHash chainId;

    // 发送 tx 的默认 cyclesLimit， 必须小于链的 cyclesLimit
    @NonNull private GUint64 cyclesLimit;

    // 发送 tx 的默认 cyclesPrice
    @NonNull private GUint64 cyclesPrice;

    // 发送 tx 的默认 timeout， 必须小于链的 timeout
    @NonNull private GUint64 timeout;

    // 发送 query 的默认 caller
    @NonNull private GAddress caller;

    // 发送 sendTransaction 后， 对 receipt 进行 getReceipt poll 操作的间隔
    private int polling_interval;

    // 发送 sendTransaction 后， 对 receipt 进行 getReceipt poll 操作的次数
    private int polling_times;
}
```

关于 Muta 的 GraphQL API 接口, 请参看[接口](./graphql_api)章节。

Muta 的 GraphQL API 提供了 Query 和 Mutation。
- Query 的调用不会对数据进行任何形式的修改，一般是查询
- Mutation 的调用则能够修改链上数据的

Client 类还提供了一些工具方法，这些方法不会发送请求到网络，所以他们不属于 Muta GraphQL API 接口，但是也被包含在 Client 类里。

目前的 API 大致分为如下：

**Query**
1. getBlock, ( getLatestBlockHeight 是一个便捷的 getBlock(null) )
2. getTransaction
3. getReceipt
4. queryService and queryServiceDyn

**Mutation**
1. sendTransaction

**Locally**
1. composeTransaction

万事俱备，接下来我们开始与链进行交互。

```java
    Muta muta = Muta.defaultMuta();

    Block block1 = muta.getBlock(GUint64.fromLong(0));

    // get a latest block
    block1 = muta.getBlock(null);

    // get a transaction
    SignedTransaction signedTransaction1 =
        muta.getTransaction(
            GHash.fromHexString(
                    "0x0000000000000000000000000000000000000000000000000000000000000000"));

    // get a receipt
    Receipt receipt1 =
        muta.getReceipt(
            GHash.fromHexString(
                "0x0000000000000000000000000000000000000000000000000000000000000000"));

    // query
    Object serviceResponse1 =  muta.queryService("service", "method", new TypeReference<Object>() {});

    // you can register concerned event
    muta.register(AssetService.eventRegistry);

    // run a query with given payload and auto parse JSON string back to java object.
    // you can use generic to customize the 3nd and 4th param.
    Object result =
        muta.queryService(
            "service-name", "method", new Object(), new TypeReference<Object>() {});

    // send a tx and get txHash for further use
    GHash txHahs = muta.sendTransaction("service-name", "method", new Object());

    // compose a tx, but do not sign it
    InputRawTransaction inputRawTransaction =
        muta.compose(
            "service-name",
            "method",
            new Object(),
            GAddress.fromHexString("0x0000000000000000000000000000000000000000"));

    // sign a tx and get signature
    InputTransactionEncryption sig1 = muta.signTransaction(inputRawTransaction);

    // or if you want to use Multi-Sig, combine signature together
    // first we get another Muta of different account
    Muta muta_another = Muta.defaultMuta();

    InputTransactionEncryption sig2 = muta_another.signTransaction(inputRawTransaction);

    // now sig1 contains sig2
    sig1.appendSignatureAndPubkey(sig2);

    // or you can sign a tx and combine with another sig1 in one step
    InputTransactionEncryption combinedSignature =
        muta_another.appendSignedTransaction(inputRawTransaction, sig1);

    // due to tx is async, you may need polling the receipt to get the response in one call
    Object response =
        muta.sendTransactionAndPollResult(
            "service-name", "method", new Object(), new TypeReference<Object>() {});

    // you can create a new List or pass an exist one to get events from the receipt
    // the events must be registered before
    List<ParsedEvent<?>> events = new ArrayList<>();
    Object response2 =
        muta.sendTransactionAndPollResult(
            "service-name",
            "method",
            new Object(),
            new TypeReference<Object>() {},
            events);
    }
```

请关注 [示例](https://github.com/nervosnetwork/muta-sdk-java/tree/master/example)

#### Step5：通过使用 AssetService 直接和 AssetService 交互

各类 service 都是对 muta 的包装，提供了该 service 内所有的 method 名称，payload 类型和 evnet 类型。
并且将 poll getReceipt 集成到了方法里，方便使用。

```java

    Muta muta = Muta.defaultMuta();
    muta.register(AssetService.eventRegistry);
    assetService = new AssetService(muta);

// create asset

    List<ParsedEvent<?>> events = new ArrayList<>();
    Asset asset =
        assetService.createAsset(
            new CreateAssetPayload(ASSET_NAME, ASSET_SYMBOL, ASSET_SUPPLY), events);
    Assertions.assertEquals(ASSET_SUPPLY, asset.getSupply());
    Assertions.assertEquals(issuer, asset.getIssuer().toGAdress());
    Assertions.assertEquals(ASSET_SYMBOL, asset.getSymbol());
    Assertions.assertTrue(
        events.stream()
            .anyMatch(
            parsedEvent ->
                parsedEvent.isMatch(
                    AssetService.SERVICE_NAME,
                    AssetService.EVENT_CREATE_ASSET)));
    asset_id = asset.getId().toGHash();
    log.info("asset id: " + asset_id);

// get asset

    Asset asset = assetService.getAsset(new GetAssetPayload(asset_id.toHash()));
    Assertions.assertEquals(ASSET_NAME, asset.getName());

// get balance

    U64 balance =
        assetService
            .getBalance(new GetBalancePayload(asset_id.toHash(), issuer.toAddress()))
                .getBalance();

// transfer

    List<ParsedEvent<?>> events = new ArrayList<>();
        assetService.transfer(
            new TransferPayload(
                asset_id.toHash(), EMPTY_ADDRESS.toAddress(), U64.fromLong(100)),
            events);
```
