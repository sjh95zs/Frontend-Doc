import { createStore, applyMiddleware, compose } from 'redux'

import createSagaMiddleware from 'redux-saga'
import TodoSaga from './sagas'

import reducer from './reducer' // 引入记录本reducer

// 创建Redux-saga中间件
const sagaMiddleware = createSagaMiddleware()

// 同时引入devtools和saga，复制粘贴这段代码就好
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

// 创建一个store图书仓库
const store = createStore(reducer, enhancer)

// 运行saga
sagaMiddleware.run(TodoSaga)

export default store
