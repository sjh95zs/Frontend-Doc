# ajax 与 json

## ajax

> ajax 是一种在无需重新加载整个网页的情况下，能够进行局部更新的技术

1. 优点

   - 异步模式，提升用户体验
   - 减少不必要的数据传输，减少了宽带占用，降低服务器负载

2. 缺点

   - 不支持回退
   - 安全问题

3. 核心： XMLHttpRequest 对象

4. 步骤

   1. 创建异步对象。即 XMLHttpRequest 对象
   2. 使用 open 方法设置请求的参数
   3. 发送请求 send
   4. 注册 onreadystatechange 事件，状态改变时就会调用
   5. 获取返回的数据

   ```html
   <h1>Ajax 发送 get 请求</h1>
   <input type="button" value="发送get_ajax请求" id="btnAjax" />
   ```

   ```js
   document.querySelector("#btnAjax").onclick = function() {
     // 发送ajax 请求 需要 五步

     // （1）创建异步对象
     var ajaxObj = new XMLHttpRequest();

     // （2）设置请求的参数。包括：请求的方法、请求的url。
     ajaxObj.open("get", "02-ajax.php");

     // （3）发送请求
     ajaxObj.send();

     //（4）注册事件。 onreadystatechange事件，状态改变时就会调用。
     //如果要在数据完整请求回来的时候才调用，我们需要手动写一些判断的逻辑。
     ajaxObj.onreadystatechange = function() {
       // 为了保证 数据 完整返回，我们一般会判断 两个值
       if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {
         // 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
         // 5.在注册的事件中 获取 返回的 内容 并修改页面的显示
         console.log("数据返回成功");

         // 数据是保存在 异步对象的 属性中
         console.log(ajaxObj.responseText);

         // 修改页面的显示
         document.querySelector("h1").innerHTML = ajaxObj.responseText;
       }
     };
   };
   ```

   ```js
   /* post请求 */
   // 异步对象
   var xhr = new XMLHttpRequest();

   // 设置属性
   xhr.open("post", "02.post.php");

   // 如果想要使用post提交数据,必须添加此行
   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

   // 将数据通过send方法传递
   xhr.send("name=fox&age=18");

   // 发送并接受返回值
   xhr.onreadystatechange = function() {
     // 这步为判断服务器是否正确响应
     if (xhr.readyState == 4 && xhr.status == 200) {
       alert(xhr.responseText);
     }
   };
   ```

## json

> 是 ECMAScript 的子集。作用是进行数据的交换。语法更为简洁，网络传输、机器解析都更为迅速

- JSON.parse()：将 JSON 字符串转化为 js 对象

  ```js
  // 将 JSON 字符串格式化为 js 对象
  var jsObj = JSON.parse(ajax.responseText);
  ```

- JSON.stringify()：将 JS 对象转化为 JSON 字符串

  ```js
  var Obj = {
    name: "fox",
    age: 18,
    skill: "撩妹"
  };

  // 将 js 对象格式化为 JSON 字符串
  var jsonStr = JSON.stringify(Obj);
  ```

## jq 操作 ajax
