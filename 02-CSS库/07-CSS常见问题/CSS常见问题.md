# CSS 常见问题

## 居中问题

> 这里的居中，指的是子元素相对于父元素的居中

- 使用 text-align：center —— 该方法可以让元素的文本内容水平居中

  ```
  <div class="item">我居中了</div>

  .item {
    text-align: center;
  }
  ```

- 垂直居中：这个方法只能将单行文本置中。只需要简单地把 line-height 设置为那个父容器的 height 值就可以使文本垂直居中了

  ```
  <div id="content">
    Content here
  </div>

  #content {
    height: 100px;
    line-height: 100px;
  }
  ```

- 设置 margin：auto —— 该方法能让子元素水平居中(注意：盒子居中，不是文本)，但是对浮动元素和绝对定位的元素无效<br>
  注意：使用这个方法子元素的宽度需要确定，如果不设置子元素的宽度，默认是占父元素的 100%，将不会起作用

  ```
  <div class="container">
    <div class="item">你好</div>
  </div>

  .item {
    margin: auto;
    width: 300px || 60%;
  }
  ```

- 绝对定位的居中

  ```
  <div class="container">
    <div class="item"></div>
  </div>

  .container {
    position: relative;
  }
  .item {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
  ```

- 使用 Flex 布局

  ```
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ```
