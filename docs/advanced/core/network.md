---
id: network
title: P2P Network
---

网络模块是为共识和交易池两个模块提供消息收发的能力。

主要提供两种消息收发方式：
- 广播，包含特定范围节点的多播
- RPC，调用上述两个模块在网络注册的服务，比如 Alice 找 Bob 索要一笔交易，就是通过这种方式

注：广播信息不会被转发

网络定义了两组广播和 RPC 接口，共识和交易池可调用上述接口完成消息的发送。同时定义三个注册回调函
数的接口用于处理收到的信息，它们分别对应广播处理，RPC 请求处理以及 RPC 返回信息的数据。共识和交
易池通过注册回调函数的方式，完成自己想要的消息处理逻辑。

其他基础信息：
- 基于 [tentacle](https://github.com/nervosnetwork/tentacle) 实现，与 libp2p 其他实现不完全兼容
- 使用 TCP 连接，支持 IPv4 和 IPv6
- 使用 secio 方式进行机密通行，身份标识从 secp256k1 公钥派生
- 使用 yamux 多路复用，也即单一连接下，多种不同类型消息的混合收发
- 使用单一推送方式发现其他节点


目前节点之间只要设置任意一个节点为 bootstrap 节点，连接后即可加入整个网络，并没有权限的限制。当
然单个节点可通过配置的方式，只允许特定的节点以及共识节点的接入。

节点之间会有相互评分机制，评分依据共识和交易池对消息的处理逻辑，给发送消息的节点打分。严重的错
误行为或评分低于 40 分都会导致节点间的连接被断开，同时一段时间内无法再次连接。

节点之间也有定期的心跳检查，确认彼此安康。


## 实现细节

### 架构图

```
+--------------------+----------------------+
|      Consensus     |       Mempool        |
+--------------------+----------------------+
|              NetworkService(s)            |
+--------------------+----------------------+
|        RPC(s)      |       Gossip(s)      |
+--------------------+----------------------+
| Peer Manager(s) - Connection(s) - Router  |
+-------------------------------------------+
|                  Peer(s)                  |
+-------------------------------------------+
```

类 actor 模型，网络组件之间通过消息传递的形式互动，下面是主要的网络
组件：

- Compression 压缩组件，所有共识和交易池发出的消息都采用 Snappy 进行压缩。
- Connection 类似连接池的概念，负责维护所有发出和接入的连接，并通过消息事件的形式通知
  节点管理组件。
- Outbound 负责广播和 RPC 接口的实现，它们通过持有 Connection 服务发出消息。
- PeerManager 负责节点管理，处理 Connection 发来的各种连接相关的事件消息，共识和交易池
  对节点的评分事件，其他的协议对节点信息的更新事件等。
- Protocols 所有网络协议的实现，包括发现协议、Ping 协议、识别协议、传输协议。
  注：目前广播和 RPC 都是同过传输协议实现的。发现协议、Ping 协议、识别协议使用
  tentacle 库内的代码。
- Reactor 共识和交易池注册信息处理逻辑路由器，类似快递员角色，负责是将收到的快递送到目
  的地地。
- SelfCheck 定期发送一些自检信息

### 文件列表

```
network
   ├── common.rs                       # 常用辅助函数
   ├── compression
   │   ├── mod.rs
   │   └── snappy.rs                   # snappy 实现上述接口
   ├── config.rs                       # 网络配置定义
   ├── connection
   │   ├── control.rs                  # 封装 tentacle 提供的发送接口
   │   ├── keeper.rs                   # 处理 tentacle 抛出的各种连接事件
   │   └── mod.rs                      # 连接池配置以及处理节点管理发出的连接或者断开请求
   ├── endpoint.rs                     # 定义共识和交易池的消息路由地址格式
   ├── error.rs                        # 定义网络错误
   ├── event.rs                        # 定义网络用到的所有事件
   ├── lib.rs
   ├── message
   │   ├── mod.rs                      # 定义网络信息格式以及序列化和反序列化
   │   ├── serde_multi.rs              # 辅助实现 serde 定义的序列化/反序列化函数，供交易池和共识使用
   │   └── serde.rs                    # 辅助实现 serde 定义的序列化/反序列化函数，供交易池和共识使用
   ├── metrics.rs                      # Prometheus metrics 数据反馈
   ├── outbound
   │   ├── gossip.rs                   # 广播接口实现
   │   ├── mod.rs
   │   └── rpc.rs                      # RPC 接口实现
   ├── peer_manager
   │   ├── addr_set.rs                 # 节点地址信息维护
   │   ├── diagnostic.rs               # 用于辅助测试时使用，暴露节点管理内部状态
   │   ├── mod.rs
   │   ├── peer.rs                     # 节点定义
   │   ├── retry.rs                    # 节点重试次数管理
   │   ├── save_restore.rs             # 节点信息持久化，暂时只保存到文件
   │   ├── shared.rs                   # 当前连接的所有节点信息记录
   │   ├── tags.rs                     # 节点的 tag 管理
   │   ├── test_manager.rs             # 节点管理单元测试
   │   ├── time.rs                     # 时间处理
   │   └── trust_metric.rs             # 节点打分实现
   ├── protocols
   │   ├── core.rs
   │   ├── discovery                   # 发现协议
   │   │   ├── addr.rs                 # 地址管理
   │   │   ├── behaviour.rs            # 消息处理
   │   │   ├── message.rs              # 消息定义
   │   │   ├── protocol.rs             # 消息解析
   │   │   └── substream.rs            # 抽象的消息流
   │   ├── discovery.rs
   │   ├── identify                    # Identify 协议
   │   │   ├── behaviour.rs            # 消息处理
   │   │   ├── common.rs               # 通用辅助函数
   │   │   ├── message.rs              # 消息定义
   │   │   └── protocol.rs             # 消息解析
   │   ├── identify.rs
   │   ├── macro.rs
   │   ├── mod.rs
   │   ├── ping                        # Ping 协议
   │   │   ├── behaviour.rs            # 消息处理
   │   │   ├── message.rs              # 消息定义
   │   │   └── protocol.rs             # 消息解析
   │   ├── ping.rs
   │   ├── transmitter                 # 传输协议
   │   │   ├── behaviour.rs            # 消息处理
   │   │   ├── message.rs              # 消息定义
   │   │   └── protocol.rs             # 消息解析
   │   └── transmitter.rs
   ├── reactor
   │   ├── mod.rs                      # 共识和交易池回调逻辑处理
   │   └── router.rs                   # 传输协议收到的消息路由
   ├── rpc_map.rs                      # 维护 RPC 请求的状态表
   ├── rpc.rs                          # 定义 RPC 信息的格式
   ├── selfcheck.rs                    # 自检服务
   ├── service.rs                      # 整个网络服务的构造
   ├── test
   │   └── mock.rs                     # 单元测试需要 mock 的 tentacle 数据类型
   ├── test.rs                         # 网络模块内部组件间交互的接口定义
   └── traits.rs

15 directories, 64 files
```

### 配置

 名称 | 默认值 | 描述
 -----|--------|------
 bootstraps| 空 | bootstraps 节点的列表，为节点的 peer id, Base58 编码 以及 ```host:port``` 格式的地址
 allowlist | 空 | 白名单节点列表，为节点的 peer id
 allowlist_only| false | 是否只连接白名单内的节点，共识节点会自动加入白名单
 trust_interval_duration | 60 | 节点打分系统所使用的打分周期时长，单位为秒
 trust_max_history_duration | 24 * 60 * 60 * 10 = 10 天 | 节点打分系统保存的历史周期时长，单位为秒
 fatal_ban_duration | 60 * 60 = 1 小时 | 因严重错误行为导致节点断开后，拒绝再次连接的时长，单位为秒
 soft_ban_duration | 60 * 10 = 10 分钟 | 因一般错误行为导致节点断开后，拒绝再次连接的时长，单位为秒
 max_connected_peers | 40 | 最大连接节点数量
 listening_address | "0.0.0.0:2337" | 监听地址
 rpc_timeout | 10 | rpc 请求超时响应时间
 selfcheck_interval | 30 | 网络自检间隔周期
 send_buffer_size | 24 * 1024 * 1024 = 24 MiB | 发送缓存大小
 write_timeout | 10 | 发送超时响应时间
 recv_buffer_size | 24 * 1024 * 1024 = 24 MiB | 接受缓存大小
 max_frame_length | 4 * 1024 * 1024 = 4 MiB | 最大窗口大小
 max_wait_streams | 256 | 最大待响应的协议流数量
 ping_interval | 15 | Ping 协议发送间隔时长，单位为秒

## 协议

### 发现协议

Muta 目前使用的发现协议基于 [tentacle-discovery](https://github.com/nervosnetwork/tentacle/tree/master/protocols/discovery) ，并有略微修改。

原协议代码只能分享 [SocketAddr](https://doc.rust-lang.org/std/net/enum.SocketAddr.html) 定义的节点监听地址，而修改后的版本支持分享 "hostname:port"
可用 DNS 解析的地址。

#### 消息

```
union DiscoveryPayload {
    GetNodes,
    Nodes,
}

table GetNodes {
    version: Uint32,
    count: Uint32,
    listen_port: PortOpt,
}

table Nodes {
    announce: Bool,
    items: NodeVec,
}

table Node {
    addresses: BytesVec,
}
```

完整的消息定义请看 [protocol.mol](https://github.com/nervosnetwork/tentacle/blob/master/protocols/discovery/src/protocol.mol)

发现协议主要是两种类型的消息：
- GetNodes
- Nodes

##### GetNodes

用于索要其他节点的信息，version 目前是固定值 0 不用管。count 则是索要的最大节点信息的条数，而 listen_port 则是本节点自身的监听端口，
对于连入类型的连接，其端口号为系统随机分配的端口，此时节点有必要发送 listen_port 更新自己的真实监听端口。

当前最大发送节点数量为 1000 固定值。

会导致断开的错误行为
- GetNodes 消息只能请求一次，重复请求会导致断开。


##### Nodes

用于发送节点信息，announce 用于标识收到的节点信息为本节点主动索取的还是对方发布的。
当累计的新节点数量超过 1000 或者间隔 24 小时，会触发一次发布行为。

会导致断开的错误行为
- 单个 PeerId 最多 3 个地址
- 短时间内重复推送节点信息
- 节点信息数量超过 1000 个

### Ping 协议

Muta 目前使用的 Ping 协议基于 [tentacle-ping](https://github.com/nervosnetwork/tentacle/tree/master/protocols/ping) 。

#### 消息

```
union PingPayload {
    Ping,
    Pong,
}

table PingMessage {
    payload:        PingPayload,
}

table Ping {
    nonce: Uint32,
}

table Pong {
    nonce: Uint32,
}
```

Ping 协议本身很简单，就是重复我给你的数字，它主要的作用包括心跳检查，消息的延迟信息等。

不及时回复数字，或者回复错误的数字都会降低自身在对端节点打分系统内的分数，低于一定分数会导致连接断开。


### 识别协议

Muta 目前使用的识别协议同样基于 [tentacle-identify](https://github.com/nervosnetwork/tentacle/tree/master/protocols/identify) 。

#### 消息

```
table Address {
    bytes: Bytes,
}

table IdentifyMessage {
    // These are the addresses on which the peer is listening as multi-addresses.
    listen_addrs: AddressVec,
    // Observed each other's ip
    observed_addr: Address,
    // Custom message to indicate self ability, such as list protocols supported
    identify: Bytes,
}
```

该协议的主要作用是帮助节点判断自己是否监听在公开的外部可直接访问的地址上，目前 Muta 要求节点必须
监听在公开可访问的地址上，暂时并无多大用处。

但错误返回信息依然会导致节点直接断开，比如
- 发送重复的监听地址
- 发送重复的观测地址
- 一次发送超过 10 个地址
- 无效信息
- 超时


### 传输协议

Muta 目前的广播和 RPC 协议都基于传输协议实现，传输协议很简单，它只是负责将收到的信息发送给上面提到的
逻辑路由器。

#### 消息

```rust
pub struct NetworkMessage {
    #[prost(map = "string, bytes", tag = "1")]
    pub headers: HashMap<String, Vec<u8>>,

    #[prost(string, tag = "2")]
    pub url: String,

    #[prost(bytes, tag = "3")]
    pub content: Vec<u8>,
}
```

其中 headers 用于保存一些通用的头部信息，比如 Jaeger 的 trace id 。url 则是信息投递的目的地址，
比如 ```/gossip/mempool/new_txs```，描述的就是交易池注册用于接受新交易的地址。content 自然就是信息
本体。

传输协议会负责将信息采用 protobuf 的方式解码后，转给路由器处理。

## 路由

那么广播和 RPC 的消息以及处理逻辑是如何载入网络的呢？

网络模块定义了如下的注册接口

```rust
    pub fn register_endpoint_handler<M>(&mut self, end: &str, handler: Box<dyn MessageHandler<Message = M>>) -> ProtocolResult<()>
    where
        M: MessageCodec;
```

可以看到接口中有 ```end``` endpoint 这个参数，它就是上面传输协议中提到的 url ，而 ```handler``` 就是被注册的消息处理逻辑。
endpoint 和 handler 会保存到路由模块的哈希表中，当传输协议将收到的信息解码后，通过 url 就自然能够找到对应的消息处理逻辑了。


## FAQ

1、tentacle 和 libp2p 其他实现有哪些不兼容的地方呢？

可以看这里的文档 [tentacle-introduction_zh](https://github.com/driftluo/tentacle/blob/master/docs/introduction_zh.md#%E4%B8%8D%E5%85%BC%E5%AE%B9)

2、节点打分系统是基于什么设计的呢？

可以看这里的论文 [TrustGuard](https://dl.acm.org/citation.cfm?id=1060808)

3、为什么把广播和 RPC 都挂在同一个传输协议下面呢？

传输协议很简单，收到解码后马上就转发给路由器了。也实际测试过分多个流，并没有提高
性能。未来也许切换到 Quic 后，分流数会有更好的表现吧。

## 吐哏

网络模块还会继续优化调整，欢迎交流吐哏。