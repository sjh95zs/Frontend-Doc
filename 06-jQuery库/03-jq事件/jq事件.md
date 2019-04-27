# jq 事件

```js
$("selector").事件类型(function() {
  // ...
});
```

## 鼠标

> 注意区分鼠标和焦点

- 单击：click
- 双击 dblclick
- 鼠标按下：mousedown
- 鼠标松开：mouseup
- 鼠标移入：mouseenter
- 鼠标移出：mouseleave
- 鼠标移入、移出指定元素及其子元素：mouseover、mouseout（**少用**）
- 鼠标在 DOM 内部移动：mousemove
- 滚动：scroll

## 键盘

- 键盘按下：keydown
- 键盘松开：keyup

## 其他事件

- 文档加载完毕后：ready，需要用`$(document)`
- 调整浏览器窗口大小：resize，需要用`$(window)`
- 获取焦点：focus
- 失去焦点：blur
- 元素值发生改变：change，比如 input 元素
- 被选中：select，只能用于 textarea 或文本类型的 input

- 提交表单：submit

  ```js
  $("button").click(function() {
    $("form").submit();
  });
  ```

  - 阻止表单提交

    ```js
    $("form").submit(function() {
      return false;
    });
    ```

## event 对象

> 更详细的参数

## 事件绑定与取消

- 绑定一个或多个事件：`on("event",selector,fn)`

  ```js
  $("img").on({
    click: function(event) {
      console.log("a");
    },
    mouseenter: function(event) {
      console.log("b");
    }
  });
  ```

- 取消绑定一个或多个事件：`off("event",selector,fn)`
- 绑定一次性的事件：`one("event",selector,fn)`
