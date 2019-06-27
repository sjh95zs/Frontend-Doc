# 4-7 React 中 ref 的使用

> 给你一个操作 DOM 的机会：this.divDOM 指向这个 div 节点

```html
<div ref={(div) => {this.divDOM = div}}></div>
```

- 尽量少用，坑很多
  比如：涉及到异步的问题，这个 DOM 的不一定就是最新的

- 使用场景：

  - 很复杂的动画
  - 集成第三方 DOM 库（jQ 等）
