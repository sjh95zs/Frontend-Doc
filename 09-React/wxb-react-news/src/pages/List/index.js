import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { List, Typography } from 'antd'

class PageList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('http://www.dell-lee.com/react/api/list.json').then(res => {
      this.setState({
        data: res.data.data
      })
    })
  }

  // 只有当Props变化时，才触发。nextProps就是最新的props值
  componentWillReceiveProps(nextProps) {
    // 接收动态路由传过来的数据
    const id = nextProps.match.params.id
    axios
      .get('http://www.dell-lee.com/react/api/list.json?id=' + id)
      .then(res => {
        this.setState({
          data: res.data.data
        })
      })
  }

  render() {
    return (
      <List
        style={{ background: '#fff' }}
        bordered
        dataSource={this.state.data}
        renderItem={item => (
          <List.Item>
            <Link to={`/detail/${item.id}`}>
              <Typography.Text mark /> {item.title}
            </Link>
          </List.Item>
        )}
      />
    )
  }
}

export default PageList
