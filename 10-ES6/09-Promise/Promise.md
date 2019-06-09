# Promise

> 参考：http://es6.ruanyifeng.com/#docs/promise

### 一、目录

- Promise 的 then、catch、finally
- Pormise.all 和 Pormise.race
- Pormise.resolve 和 Pormise.reject

### 二、同步和异步

同步任务会阻塞程序执行（alert、for）
异步任务不会阻塞程序执行（setTimeout、事件监听）

### 三、传统的解决方案

- 回调函数（造成回调地狱）
- 事件

### 四、Promise 状态

一但被确定为成功或者失败，就不能再被更改

1. pending - 进行中
2. fulfilled - 成功
3. rejected - 失败

![Promise状态](images/Promise状态.png)

### Pormise.all

`const p = Promise.all([p1, p2, p3]);`

1. 只有 p1、p2、p3 的状态都变成 fulfilled，p 的状态才会变成 fulfilled，此时 p1、p2、p3 的返回值组成一个数组，传递给 p 的回调函数
2. 只要 p1、p2、p3 之中有一个被 rejected，p 的状态就变成 rejected，此时第一个被 reject 的实例的返回值，会传递给 p 的回调函数

### Pormise.race

`const p = Promise.race([p1, p2, p3]);`

只要 p1、p2、p3 之中有一个实例率先改变状态，p 的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给 p 的回调函数

### 用途

1. 有了 Promise 对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数
2. 采用链式的 then，可以指定一组按照次序调用的回调函数
3. 一般来说，不要在 then 方法里面定义 Reject 状态的回调函数（即 then 的第二个参数），总是使用 catch 方法

   ```js
   // bad
   promise.then(
     function(data) {
       // success
     },
     function(err) {
       // error
     }
   );

   // good
   promise
     .then(function(data) {
       //cb
       // success
     })
     .catch(function(err) {
       // error
     });
   ```

4. 我们可以将图片的加载写成一个 Promise，一旦加载完成，Promise 的状态就发生变化

   ```js
   const preloadImage = function(path) {
     return new Promise(function(resolve, reject) {
       const image = new Image();
       image.onload = resolve;
       image.onerror = reject;
       image.src = path;
     });
   };
   ```
