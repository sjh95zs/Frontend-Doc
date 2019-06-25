import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleTodoItem = this.handleTodoItem.bind(this)
  }

  render() {
    return <li onClick={this.handleTodoItem}>{this.props.item}</li>
  }

  handleTodoItem() {
    // 子传父：子调用父传过来的的方法
    this.props.deleteListItem(this.props.index)
  }
}

export default TodoItem
