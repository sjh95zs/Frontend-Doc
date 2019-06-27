/*
 * 记录本reducer
 * state -> 旧的数据
 * action -> 要干嘛
 * return state -> 返回新的数据
 */

// 引入actionTypes管理
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION
} from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

// reducer可以接收state，但不能修改它
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state)) // 正因为reducer可以接收state，但不能修改它，所以需要深拷贝
    newState.inputValue = action.inputValue
    return newState
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  if (action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data
    return newState
  }
  return state
}
