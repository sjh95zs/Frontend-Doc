# Redux

> 数据共享，解决跨组件通信问题
> Redux = Reducer + Flux

### Redux 工作流程

![Redux工作流图解](images/Redux工作流图解.jpg)

- actionTypes：新建一个 actionTypes.js 来统一管理 action 的 type

- actionCreators：新建一个 actionCreators.js 来统一生成 action

### 三大基本原则

1. store 只能有一个
2. 只有 store 能改变自己的内容，而不是 reducer
3. reducer 必须是纯函数
   > 纯函数是指给定固定的输入，就一定会有固定的输出，且不会有任何副作用
   > 如果函数内有异步、ajax 请求、时间等，就不是纯函数了
   > 副作用：对接收的参数进行了修改，所以最好是深拷贝一份副本

### 核心 API 小结

- createStore()：创建一个 store
- store.dispatch(action)：把 action 纯递给 store
- store.getState()：获取 store 的所有内容
- store.subscribe(func)：订阅 store 的变化，一旦有变化，就会执行 func 回调函数

### Redux 中发送异步请求

同样的操作，使用 axios，将引出接下来的 Readux 中间件
