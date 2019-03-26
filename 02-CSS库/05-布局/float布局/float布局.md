# float —— 浮动布局【基本被淘汰】

- 盒子一旦 float，这个盒子就拥有 inline-block 特性
- 清除浮动：使用 after 伪元素
  ```
  .row::after {
      content: '';
      display: block;
      clear: both;
  }
  ```
- 栅格系统
