```
alert("这是一个警告弹窗");
// 不返回值

var r = confirm("你是否满18周岁?");
console.log(r, typeof r);
// 返回布尔值

var r = prompt("你叫什么名字");
console.log(r, typeof r);
// 返回都是字符串或null

setTimeout(function() {
  alert("3秒到了");
}, 3000);
// 延时执行

setInterval(function() {
  console.log("每隔三秒执行一次");
}, 3000);
// 隔多久执行一次

var count = 0;
var timer = setInterval(function() {
  count++;
  console.log("每隔一秒执行一次:" + count);
  if (count >= 3) {
    clearInterval(timer);
  }
}, 1000);
clearInterval();
// 清除计时器

```
