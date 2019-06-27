import React from 'react'
import { connect } from 'react-redux'

// 导入统一生成action方法
import {
  createChangeInputValueAction,
  createHandleClickAction,
  createHandleDeleteAction
} from './store/actionCreators'

// 无状态组件
const TodoList = props => {
  const {
    inputValue,
    changeInputValue,
    handleClick,
    list,
    handleDelete
  } = props

  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue} />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li
              key={item + index}
              onClick={() => {
                handleDelete(index) // // 可以使用该方法去应对bind()传值问题
              }}
            >
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

// 把store的数据state映射到组件中的props，负责取值
const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// 把store.dispatch映射到props上，负责更改值
const mapDispatchToProps = dispatch => {
  return {
    changeInputValue(e) {
      // 调用统一生成action方法
      const action = createChangeInputValueAction(e.target.value)
      // 派发给store
      dispatch(action)
    },

    handleClick() {
      // 创建action
      const action = createHandleClickAction()
      // 派发给store
      dispatch(action)
    },

    handleDelete(index) {
      // 创建action
      const action = createHandleDeleteAction(index)
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
