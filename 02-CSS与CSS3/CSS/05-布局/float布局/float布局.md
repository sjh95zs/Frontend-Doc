# float —— 浮动布局【基本被淘汰】

- 盒子一旦 float，这个盒子就拥有 inline-block 特性
- 清除浮动：父元素使用 after 伪元素

  ```
  <div class="container">
      <div class="box_1 float">box 1</div>
      <div class="box_2 float">box 2</div>
  </div>

  .container::after {
      content: '';
      display: block;
      clear: both;
  }
  ```

- n 栏网格系统
