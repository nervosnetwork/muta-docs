---
title: Cargo configuration
---

Overlord provides two kinds of block produce logic, random and polling. Random uses a deterministic random algorithm to select a leader based on the node's `propose_weight`, and votes are counted according to `vote_weight`. Polling takes turns selecting the leader, so `propose_weight` does not take effect in this case. Polling also counts according to `vote_weight`.
Muta has a switch for the Random block produce feature, which can be turned on by `features = ["random_leader"]`. In muta-based blockchain, random block produce is used by default. When developing with the Muta framework, the muta dependency in `Cargo.toml` allows you to select the following block produce methods.

```rust
# polling
muta = { git = "https://github.com/nervosnetwork/muta", branch = "master" }
# random
muta = { git = "https://github.com/nervosnetwork/muta", branch = "master", features = ["random_leader"] }
```