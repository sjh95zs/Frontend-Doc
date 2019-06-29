# PropTypes 与 DefaultProps 的应用

- 使用 PropTypes 进行 props 的类型检查，出于性能方面的考虑，**仅在开发模式下进行检查**

  ```js
  import PropTypes from 'prop-types'

  class Greeting extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>
    }
  }

  Greeting.propTypes = {
    name: PropTypes.string.isRequired // isRequired必须要有
  }
  ```

- DefaultProps 设置默认值：可以为 Class 组件添加默认 props。这一般用于 props 未赋值，但又不能为 null 的情况。**（propTypes 类型检查发生在 defaultProps 赋值后，所以类型检查也适用于 defaultProps）**

  ```js
  import PropTypes from 'prop-types'

  class CustomButton extends React.Component {
    // ...
  }

  CustomButton.defaultProps = {
    color: 'blue'
  }
  ```
