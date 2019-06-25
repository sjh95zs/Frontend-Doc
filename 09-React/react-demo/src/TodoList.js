import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem' // 子组件
import './TodoList.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.addList = this.addList.bind(this)
    this.deleteListItem = this.deleteListItem.bind(this)

    this.state = {
      inputValue: '',
      list: []
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="myInput">请输入：</label>
          <input
            id="myInput"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addList}>增加</button>
        </div>
        <ul>
          {/* 列表循环 */}
          {this.state.list.map((item, index) => {
            return (
              // 父传子：通过props
              <TodoItem
                key={item + index}
                item={item}
                index={index}
                deleteListItem={this.deleteListItem}
              />
            )
          })}
        </ul>
      </Fragment>
    )
  }

  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue], // ES6解构赋值
      inputValue: ''
    })
  }

  deleteListItem(index) {
    const list = [...this.state.list] // 复制一份副本
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default TodoList
