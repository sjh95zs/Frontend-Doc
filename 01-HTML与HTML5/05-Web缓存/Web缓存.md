# Web 缓存

## web 缓存的作用

1. 减少网络带宽消耗：当 Web 缓存副本被使用时，只会产生极小的网络流量，可以有效的降低运营成本
2. 降低服务器压力：给网络资源设定有效期之后，用户可以重复使用本地的缓存，减少对源服务器的请求，间接降低服务器的压力。同时，搜索引擎的爬虫机器人也能根据过期机制降低爬取的频率，也能有效降低服务器的压力
3. 减少网络延迟：加开页面打开速度

## 前言

**Web 缓存方式**

1. 数据库缓存
2. 服务器端缓存

   - 代理服务器缓存（共享缓存、中转站）
   - CDN 缓存（也称网关缓存、反向代理缓存）

3. **浏览器端缓存**

   - **Cookie**
   - **WebStorage**
     - localStorage
     - sessionStorage
   - IndexDB
   - WebSql
   - 应用缓存 Application Cache
   - PWA
   - 往返缓存 BFCache

4. 应用层缓存（在代码层面上）

**Web 前端缓存策略**

> 参考：https://github.com/ljianshu/Blog/issues/23

1. 强缓存：在以下 2 个时间之前/以内，都不会发送请求，直接使用缓存。以相对时间为基准

   - 过期时间（服务器的绝对时间）：`Expires: Sun, 02 Jun 2019 10:44:37 GMT`
   - 相对时间：`Cache-Control: max-age=30` 这个指 30 秒

2. 协商缓存：问一下服务器能不能直接用
   - `Last-Modified: Wed, 19 Apr 2017 16:05:19 GMT`
   - `If-Modified-Since`
   - `Etag`
   - `If-None-Match`

3. 强缓存优先于协商缓存

### 深入解析 Cookie 和 WebStorage

> 参考：https://github.com/ljianshu/Blog/issues/25

1. cookie

   - Cookie 的本职工作并非本地存储，而是“**维持状态**”，因为 HTTP 协议是无状态的，HTTP 协议自身不对请求和响应之间的通信状态进行保存。我们可以把 Cookie 理解为一个存储在浏览器里的一个小小的文本文件，它附着在 HTTP 请求上，在浏览器和服务器之间“飞来飞去”。它可以携带用户信息，当服务器检查 Cookie 的时候，便可以获取到客户端的状态

   - cookie 是服务端生成，客户端进行维护和存储

   - 使用起来也非常简单`document.cookie = '....'`

   - 但是 cookie 有它致命的缺点：

     - 存储量太小，只有 4KB
     - 所有 http 请求都带着 cookie，会影响获取资源的效率
     - 由于在 HTTP 请求中的 Cookie 是明文传递的，所以安全性成问题，除非用 HTTPS

   - 应用场景
     - 记住密码，下次自动登录
     - 购物车功能
     - 记录用户浏览数据，进行商品（广告）推荐

2. localStorage 和 sessionStorage

   - `localStorage`优点：

     - 存储量增大到 5M
     - 不会带到 http 请求中
     - API 适用于数据存储 `localStorage.setItem(key, value)` `localStorage.getItem(key)`
     - 它只能存储字符串

   - `sessionStorage`的区别就在于它是根据 session 过去时间而实现，而`localStorage`会永久有效；且相同域名下的两个页面，只要它们不在同一个浏览器窗口中打开，那么它们的 sessionStorage 内容便无法共享

   - 应用场景不同：
     - 一些重要信息需要及时失效的放在`sessionStorage`中，比如微博的 sessionStorage 就主要是存储你本次会话的浏览足迹
     - 存储一些内容稳定的资源，放在`localStorage`，比如图片内容丰富的电商网站会用它来存储 Base64 格式的图片字符串
