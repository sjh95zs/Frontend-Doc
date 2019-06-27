/*
 * 容器组件：只负责逻辑，把数据传给UI组件即可
 */
import React, { Component } from 'react'
import store from './store/index' // 引入store图书仓库

// 引入统一生成action公共方法
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getInitList
} from './store/actionCreators'

import TodoListUI from './TodoListUI' // 导入UI组件

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)

    this.state = store.getState() // 获取store的内容
    store.subscribe(this.handleStoreChange) // store被改变，就会执行里边的方法，保证数据是最新的
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }

  // /*
  //  * 钩子函数：使用Redux-thunk中间件
  //  */
  // componentDidMount() {
  //   // 因为使用了Redux-thunk中间件，使得action可以是函数，而不限制只能是对象
  //   const action = getTodoList()
  //   // 如果dispatch()接收的是函数，就自动执行它（即action）
  //   store.dispatch(action)
  // }

  /*
   * 钩子函数：使用Redux-saga中间件
   */
  componentDidMount() {
    // 调用统一生成action公共方法，来生成action
    const action = getInitList()
    // 既可以把action转发给store，还可以转发给sagas.js
    store.dispatch(action)
  }

  /*
   * 改变输入框
   */
  handleInputChange(event) {
    // 调用统一生成action公共方法，来生成action
    const action = getInputChangeAction(event.target.value)
    // 把action转发给store
    store.dispatch(action)
  }

  /*
   * 增加list_item
   */
  handleBtnClick() {
    // 调用统一生成action公共方法，来生成action
    const action = getAddItemAction()
    // 把action转发给store
    store.dispatch(action)
  }

  /*
   * 删除list_item
   */
  handleItemDelete(index) {
    // 调用统一生成action公共方法，来生成action
    const action = getDeleteItemAction(index)
    // 把action转发给store
    store.dispatch(action)
  }

  /*
   * store被改变，就会执行这个方法，再次获取一次store，保证数据是最新的
   */
  handleStoreChange() {
    this.setState(store.getState())
  }
}

export default TodoList
