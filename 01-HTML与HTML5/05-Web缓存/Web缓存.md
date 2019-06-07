# Web 缓存

##web 缓存的作用

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

**Web 前端缓存分类**

1. 强缓存：在以下 2 个时间之前/以内，都不会发送请求，直接使用缓存。以相对时间为基准

   - 过期时间（服务器的绝对时间）：`Expires: Sun, 02 Jun 2019 10:44:37 GMT`
   - 相对时间：`Cache-Control: max-age=30` 这个指 30 秒

2. 协商缓存：问一下服务器能不能直接用
   - `Last-Modified: Wed, 19 Apr 2017 16:05:19 GMT`
   - `If-Modified-Since`
   - `Etag`
   - `If-None-Match`

### 深入解析 Cookie 和 WebStorage

1. cookie

   - cookie 本身不是用来做服务器端存储的，它设计是用来在服务器和客户端进行信息传递的，因此我们的每个 http 请求都带着 cookie。但是 cookie 也具备浏览器端存储的能力（例如记住用户名和密码），因此就被开发者用上了

   - 使用起来也非常简单`document.cookie = ....`

   - 但是 cookie 有它致命的缺点：

     - 存储量太小，只有 4KB
     - 所有 http 请求都带着，会影响获取资源的效率
     - API 简单，需要封装才能用

2. locationStorage 和 sessionStorage

   - `localStorage`优点：

     - 存储量增大到 5M
     - 不会带到 http 请求中
     - API 适用于数据存储 `localStorage.setItem(key, value)` `localStorage.getItem(key)`

   - `sessionStorage`的区别就在于它是根据 session 过去时间而实现，而`localStorage`会永久有效。
   - 应用场景不同：一些重要信息需要及时失效的放在`sessionStorage`中，一些不重要但是不经常设置的信息，放在`localStorage`
