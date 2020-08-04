---
title: Authorization Service
---

Authorization Service 是被交易池调用，对交易进行检查的 service。Authorization Service 本身不提供任何的检查逻辑，而是去调用注册在其中的 service 及其对应的方法进行校验。

## 具体设计

Authorization Service 的结构如下所示：

```rust
pub struct AuthorizationService<SDK> {
    sdk:          SDK,
    verified_list: Box<dyn StoreArray<String, String>>,
}
```

从结构中可以看出，Authorization Service 主要是维护了一个 `verifiied_list`。
`verified_list` 是一个（service 名字 — 方法名字）的数组。

![auth-imag](../../../../static/auth.svg)

如上图所示，当交易池收到交易的时候，交易池会调用 Authorization Service，将交易序列化之后发给 Authorization Service。
这时 Authorization Service 的 check_authorization 方法会被调用。
因为 Authorization Service 并不清楚其他 service 的实现，所以注册进来的方法的 payload 都只能接收 `SignedTransaction` 序列化成的 Json 字符串作为参数，而返回值必须是 `ServiceResponse<()>`。
当返回结果的调用 `is_error()` 方法返回真的时候，则判定交易不合法。注册进 Authorization Service 的方法必须遵循上述规范。

## 初始化 Authorization Service

Authorization Service 的初始化就和普通的 Service 一样，需要在 new 一个实例的时候，将其他的 Service 依赖传递进去。

```rust
pub fn new(_sdk: SDK, multi_sig: MultiSignatureService<SDK>, admission_control: AC) -> Self {
        Self {
            _sdk,
            multi_sig,
            admission_control,
        }
    }

```
## 实现 check_authorization

根据自身的业务逻辑需求，创建 check_authorization 函数，实现代码即可。
```rust
#[read]
    fn check_authorization(
        &self,
        ctx: ServiceContext,
        payload: SignedTransaction,
    ) -> ServiceResponse<()> {
        let resp = self
            .multi_sig
            .verify_signature(ctx.clone(), payload.clone());
        if resp.is_error() {
            return ServiceResponse::<()>::from_error(
                102,
                format!(
                    "verify transaction signature error {:?}",
                    resp.error_message
                ),
            );
        }

        if !self.admission_control.is_allowed(&ctx, payload) {
            return ServiceResponse::<()>::from_error(
                102,
                "The transaction is not allowed".to_owned(),
            );
        }

        ServiceResponse::from_succeed(())
    }
```
