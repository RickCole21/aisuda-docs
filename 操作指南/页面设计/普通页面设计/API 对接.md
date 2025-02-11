普通页面支持 API 的方式对接外部接口，实现灵活扩展，API 详情请参考 [amis 文档](https://baidu.gitee.io/amis/zh-CN/docs/types/api)。

在爱速搭中有两个特殊功能：

## 代理

爱速搭所有请求都会经过代理，并且附上爱速搭特有的 header，如下所示

- `x-isuda-token`，在「应用设置」中的 token
- `x-isuda-appkey`，应用短路径
- `x-isuda-env`，应用环境，开发环境是 `dev`，也可能是 `qa`、`sandbox`或者`latest`
- `x-isuda-userid`，用户在爱速搭中的 id
- `x-isuda-username`，用户名
- `x-isuda-oauth-id`，oauth id，如果启用了 oauth 登录的话
- `x-isuda-oauth-access-token`，oauth 的 access token 如果启用了 oauth 登录的话
- `x-isuda-roles`，用户所属的角色名列表
- `x-isuda-profile-access-token` 获取用户信息的 access token，具体请看下方说明

如果不放心直接根据 header 下发的 `x-isuda-username` 完成用户认证。请配置环境变量。

```
ISUDA_DISABLE_PROXY_USER_ID: true
```

这样就只会下发以下 header 了。

- `x-isuda-token`
- `x-isuda-appkey`
- `x-isuda-env`
- `x-isuda-profile-access-token`
- `x-isuda-oauth-id`，oauth id，如果开启了 oauth 登录认证的话
- `x-isuda-oauth-access-token`，oauth 的 access token，如果开启了 oauth 登录认证的话

然后通过请求 `/openapi/profile?token={{这里用 x-isuda-profile-access-token 返回的 token 值}}`
就会获取以下信息。

```
{
  username: "xxxx",
  roles: ["xxxx", "xxx"],
  userid: "xxxx"
}
```

## 如果不想经过内置代理

可以在 url 前加上 `raw:`，就不会走代理。

需要解决跨域问题，比如返回跨域 header：示例如下

- `Access-Control-Allow-Origin: https://suda.bce.baidu.com`，或者爱速搭部署的域名
- `Access-Control-Allow-Credentials: true`
- `Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept`
- `Access-Control-Allow-Methods: POST, GET, OPTIONS`

示例代码（express）：

```javascript
// 放在所有路由前面
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://suda.bce.baidu.com');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');  
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  next();
});
```


如果接口需要登录，可以在未登录的时候返回 401，内容是：

```json
{
  "location": "http://跳转登录的页面地址"
}
```

需要注意在新浏览器下默认会限制 cookie 跨域，所以登录后保存状态的 cookie 必须加上 `SameSite=None; Secure`，类似如下

```
Set-Cookie: session=123; SameSite=None; Secure
```

