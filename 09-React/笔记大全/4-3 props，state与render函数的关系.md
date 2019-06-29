# props，state 与 render 函数的关系

- 当组件的 props 或 state 发生改变时，render 函数就会被执行【react 生命周期的第三阶段：更新阶段】

- 当父组件的 render 函数被执行，它的子组件的 render 函数也会被执行

- setDate()方法是异步的，它的第二个参数是一个回调函数，想要实现同步更新，可以利用这个回调函数

  ```js
  // 极力推荐这种更新方式。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数。还支持一个回调函数
  onHandle() {
    this.setState((prevState, prevPropse) => ({
      list: prevState.id + prevPropse.content
    }), () => {
      console.log(list)
    })
  }
  ```

- constructor：可以不写，直接写 state = {}
