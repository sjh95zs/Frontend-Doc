/*
 * 统一生成action的公共方法
 */

// 引入actionTypes管理
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION,
  GET_INIT_LIST
} from './actionTypes'

export const getInputChangeAction = value => {
  return {
    type: CHANGE_INPUT_VALUE,
    inputValue: value
  }
}

export const getAddItemAction = () => {
  return {
    type: ADD_TODO_ITEM
  }
}

export const getDeleteItemAction = index => {
  return {
    type: DELETE_TODO_ITEM,
    index: index
  }
}

export const initListAction = data => {
  return {
    type: INIT_LIST_ACTION,
    data: data
  }
}

// // 使用Reaux-thunk
// export const getTodoList = () => {
//   return dispatch => {
//     axios
//       .get(
//         'https://www.easy-mock.com/mock/5d109b4b8d7fd6677cba8b1d/demo/react-demo'
//       )
//       .then(res => {
//         const data = res.data
//         // 调用统一生成action公共方法，来生成action
//         const action = initListAction(data)
//         // 把action转发给store
//         dispatch(action)
//       })
//   }
// }

// 使用Reaux-saga
export const getInitList = () => {
  return {
    type: GET_INIT_LIST
  }
}
