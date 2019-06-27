/*
 * UI组件：只负责渲染展示，所有的数据都通过props来接收
 * 一般来说，UI组件可以定义为一个无状态组件
 */
// import React, { Component } from 'react'
import React from 'react'
import { Input, Button, List } from 'antd'

// 定义一个无状态组件，性能极大提升
const TodoListUI = props => {
  return (
    <div style={{ marginTop: '10px', marginLeft: '10px' }}>
      <div>
        <Input
          value={props.inputValue}
          placeholder='请输入...'
          style={{ width: '300px' }}
          onChange={props.handleInputChange}
        />
        <Button
          type='primary'
          style={{ marginLeft: '10px' }}
          onClick={props.handleBtnClick}
        >
          提交
        </Button>
      </div>
      <div>
        <List
          style={{ marginTop: '10px', width: '300px' }}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                props.handleItemDelete(index) // 可以使用该方法去应对bind()传值问题
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

// // 普通UI组件
// class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{ marginTop: '10px', marginLeft: '10px' }}>
//         <div>
//           <Input
//             value={this.props.inputValue}
//             placeholder='请输入...'
//             style={{ width: '300px' }}
//             onChange={this.props.handleInputChange}
//           />
//           <Button
//             type='primary'
//             style={{ marginLeft: '10px' }}
//             onClick={this.props.handleBtnClick}
//           >
//             提交
//           </Button>
//         </div>
//         <div>
//           <List
//             style={{ marginTop: '10px', width: '300px' }}
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item, index) => (
//               <List.Item
//                 onClick={() => {
//                   this.props.handleItemDelete(index) // 可以使用该方法去应对bind()传值问题
//                 }}
//               >
//                 {item}
//               </List.Item>
//             )}
//           />
//         </div>
//       </div>
//     )
//   }
// }

export default TodoListUI
