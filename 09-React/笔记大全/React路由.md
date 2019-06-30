## 路由：react-router-dom

> 根据路径的不同，显示不同的组件/页面

- BrowserRouter：创建一个路由，只能有一个根节点
- Route：每一个路由项，每个路由项都和对应的组件创建链接

  ```html
  <BrowserRouter>
    <div>
      <Route path="/list/:id" component="{NewList}" />
      <Route path="/button" component="{NewButton}" />
    </div>
  </BrowserRouter>
  ```

- Link：组件/页面之间的跳转。可以携带参数，参数可通过`this.props.match.params.id`获取

  ```html
  <Link to="/list/123">
    <Button type="primary">按钮</Button>
  </Link>
  ```

- Redirect：重定向，跟下面的 withRouter 类似
- withRouter：可以包装任何自定义组件，将 react-router 的 history,location,match 三个对象传入，实现任意跳转
