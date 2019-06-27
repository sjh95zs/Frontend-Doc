## 生命周期

> 每个组件都有一个生命周期
> 如果有父子关系，执行顺序的进出口都是 render【即父的生命周期执行到 render，就会进入到子的生命周期，子执行完后就会出来，然后父从 render 继续往下执行】

- 初始化阶段

  1. constructor(){}：props 和 state 的初始化

- 挂载阶段

  > 注意：componentWillMount 和 componentDidMount 这两个生命周期函数，**只在页面刷新时执行一次**，而 render 函数是只要有 state 或 props 变化就会执行

  1. componentWillMount：组件即将被挂载到页面的时刻执行
  2. render：组件初次挂载时会执行一次
  3. componentDidMount：组件挂载完成时被执行

- 更新阶段

  - props

    1. componentWillReceiveProps：子组件接收到父组件传递过来的 props，父组件 render 函数重新被执行，这个生命周期就会被执行【它只可能在子组件中执行】
    2. shouldComponentUpdate：在组件更新之前，自动被执行。它要求返回一个布尔值，true 就往下走，**false 就不执行后面的生命周期函数**
    3. componentWillUpdate：在 shouldComponenUpdate 之后被执行
    4. render：重新渲染
    5. componentDidUpdate：在组件更新之后执行

  - states

    1. shouldComponentUpdate：在组件更新之前，自动被执行。它要求返回一个布尔值，true 就往下走，**false 就不执行后面的生命周期函数**
    2. componentWillUpdate：在 shouldComponenUpdate 之后被执行
    3. render：重新渲染
    4. componentDidUpdate：在组件更新完之后执行

- 销毁阶段
  1. componentWillUnmount：组件从页面中删除的时候执行【一般跟路由有关】

## 性能优化：shouldComponentUpdate 这个钩子存在返回值，是有意义的

```js
// nextProps：变化后的属性；nextState：变化后的状态；
// 此处是只有当Props改变了，才会返回true，才会触发render，从而减少渲染次数
shouldComponentUpdate(nextProps, nextState) {
  if(nextProps.xxx !== this.props.xxx) {
      return true
  } else {
      return false
  }
}
```

## ajax 数据请求

强烈建议：`componentDidMount（组件挂载完成时执行）`

```js
componentDidMount() {
  axios.get('https://web-api.juejin.im/v3/web/wbbr/bgeda')
    .then ( res => {
      console.log('axios 获取数据成功:' + JSON.stringify(res.data))
      })
    .catch ( erro r=> {
      console.log('axios 获取数据失败' + error)
      })
}
```
