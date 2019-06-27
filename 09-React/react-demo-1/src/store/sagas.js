import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'

// 异步逻辑就可以写在这里，yield表示等待
function* getInitList() {
  try {
    const res = yield axios.get(
      'https://www.easy-mock.com/mock/5d109b4b8d7fd6677cba8b1d/demo/react-demo'
    )
    // 调用统一生成action公共方法，来生成action
    const action = initListAction(res.data)
    // 把action转发给store
    yield put(action)
  } catch (e) {
    console.log('数据请求失败！')
  }
}

// 下面是一个 generator 函数
function* TodoSaga() {
  // 接收到action发过来的内容，就会执行getInitList函数
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default TodoSaga
