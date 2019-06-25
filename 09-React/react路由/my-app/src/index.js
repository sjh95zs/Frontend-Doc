import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import NewList from './newList'
import NewButton from './newButton'
import 'antd/dist/antd.css'

class Entry extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/list/:id" component={NewList} />
          <Route path="/button" component={NewButton} />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDom.render(<Entry />, document.getElementById('root'))
