import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import './style.css'

import AppHeader from './components/Header/index'
import PageList from './pages/List/index'
import Detail from './pages/Detail/index'
import Login from './components/Login/index'
import Vip from './components/Vip/index'

const { Header, Footer, Content } = Layout

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout style={{ minWidth: 1080, height: '100%' }}>
          <Header className="header">
            <AppHeader />
          </Header>
          <Content className="content">
            <Login />
            <Switch>
              <Route path="/vip" component={Vip} />
              <Route path="/detail/:id" component={Detail} />
              {/* 动态路由 :id ，把id传给PageList组件 */}
              <Route path="/:id?" component={PageList} />
            </Switch>
          </Content>
          <Footer className="footer">@copyright wuxiaobin1995 2019</Footer>
        </Layout>
      </BrowserRouter>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
