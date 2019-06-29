# react-redux 的使用

### Provider

在它内部的所有子组件，都可以共享 store

```js
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import TodoList from './TodoList'

const App = (
  <Provider store={store}>
    <TodoList />
    <A />
    <B />
    <C />
  </Provider>
)

ReactDom.render(App, document.getElementById('root'))
```

### connect

让 connect 和 TodoList 组件做连接

```js
import { connect } from 'react-redux'

// 把store的数据映射到组件中的props，负责取值
const mapStateToProps = state => {
  return {
    inputValue: state.inputValue
  }
}

// 把store.dispatch映射到props上，负责更改值
const mapDispatchToProps = dispatch => {
  return {
    changeInputValue(e) {
      // 创建action
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      // 派发给store
      dispatch(action)
    }
  }
}

// 让 connect 和 TodoList 组件做连接，其实它导出的结果就是一个容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
```
