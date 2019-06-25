import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import { Button, Modal, Input, message } from 'antd'
import './style.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.showModel = this.showModel.bind(this)
    this.hideModel = this.hideModel.bind(this)
    this.changeUser = this.changeUser.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.checkLogin = this.checkLogin.bind(this)
    this.logout = this.logout.bind(this)
    this.state = {
      login: false,
      model: false,
      user: '',
      password: ''
    }
  }

  componentDidMount() {
    axios
      .get('http://www.dell-lee.com/react/api/isLogin.json', {
        withCredentials: true
      })
      .then(res => {
        const login = res.data.data.login
        this.setState({
          login: login
        })
      })
  }

  render() {
    return (
      <div className="login">
        {this.state.login ? (
          <Button type="danger" onClick={this.logout}>
            退出
          </Button>
        ) : (
          <Button type="primary" onClick={this.showModel}>
            登录
          </Button>
        )}
        <Link to="/vip">
          <Button type="primary" style={{ marginLeft: 10 }}>
            跳至VIP页
          </Button>
        </Link>
        <Modal
          title="登录"
          visible={this.state.model}
          onOk={this.checkLogin}
          onCancel={this.hideModel}
        >
          <Input
            value={this.state.user}
            placeholder="用户名"
            style={{ marginBottom: 10 }}
            onChange={this.changeUser}
          />
          <Input
            value={this.state.password}
            placeholder="密码"
            type="password"
            onChange={this.changePassword}
          />
        </Modal>
      </div>
    )
  }

  showModel() {
    this.setState({
      model: true
    })
  }

  hideModel() {
    this.setState({
      model: false,
      user: '',
      password: ''
    })
  }

  changeUser(event) {
    this.setState({
      user: event.target.value
    })
  }

  changePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  checkLogin() {
    const { user, password } = this.state
    axios
      .get(
        `http://www.dell-lee.com/react/api/Login.json?user=${user}&password=${password}`,
        {
          withCredentials: true
        }
      )
      .then(res => {
        const login = res.data.data.login
        if (login) {
          message.success('登陆成功', 1)
          this.setState({
            login: true,
            model: false,
            user: '',
            password: ''
          })
        } else {
          message.error('登陆失败', 1)
        }
      })
  }

  logout() {
    axios
      .get('http://www.dell-lee.com/react/api/logout.json', {
        withCredentials: true
      })
      .then(res => {
        const logout = res.data.data.logout
        if (logout) {
          this.setState({
            login: false
          })
          message.success('退出登录成功', 1)
        }
        this.props.history.push('/') // 实现任意跳转
      })
  }
}

export default withRouter(Login) // withRouter可以包装任何自定义组件，将react-router 的 history,location,match 三个对象传入，实现任意跳转
