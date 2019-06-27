/*
 * 统一生成action的公共方法
 */

// 引入actionTypes管理
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM
} from './actionTypes'

export const createChangeInputValueAction = value => {
  return {
    type: CHANGE_INPUT_VALUE,
    value: value
  }
}

export const createHandleClickAction = () => {
  return {
    type: ADD_TODO_ITEM
  }
}

export const createHandleDeleteAction = index => {
  return {
    type: DELETE_TODO_ITEM,
    index: index
  }
}
