# this 详解

> 面向对象语言中 this 表示当前对象的一个引用
>
> 但在 JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变

## this 等于谁？

```
"use strict"; // 严格模式js
var person = {
  firstName: "王",
  lastName: "花花",
  fullName: function() {
    console.log(this); // 打印this看看是啥
    return this.firstName + this.lastName;
  }
};
// 情况一：此时的this等于undefined(严格模式时)/window(一般模式时)，且严格模式下会报错
var get_fullName = person.fullName;
console.log(get_fullName());
// 情况二：此时的this等于其上一级对象person
console.log(person.fullName());

// 情况三：此时的this等于即将生成的对象，这里指whh
function User() {
  this.name = "王花花";
  this.age = 18;
}
var whh = new User();
console.log(whh);
```

## this 好处是啥？

```
function yo() {
  console.log("yo,我是：" + this.name); // 此处的this等于whh或lsd
}

var whh = {
  name: "以前我叫王花花，现在我叫黄花花"
};
var lsd = {
  name: "李栓蛋"
};
whh.yo = yo; // 把yo函数添加到whh这个对象内，成为它的元素
lsd.yo = yo;
whh.yo(); // 调用yo函数，完整写法是 whh.yo.call();
lsd.yo();
// 好处：whh或lsd的name改变了，yo函数的输出结果也会跟着改变，非常动态
```

## 指定 this 等于谁：call、apply、bind

```
function yo(name, a, b) {
  console.log("yo，" + name + "，我是" + this.name + ",a:" + a + ",b:" + b);
}

var whh = {
  name: "王花花"
};
var lsd = {
  name: "李栓蛋"
};

yo.call(whh, "赵可爽", 1, 2); // 指定this指向whh，后边可以直接传参数“赵可爽”
yo.call(lsd, "王大锤", 1, 2); // 指定this指向lsd，后边可以直接传参数"王大锤"
yo.apply(lsd, ["王大锤", 1, 2]); // 跟call区别是：传参方式不同
yo2 = yo.bind(lsd); // 与上两种区别是：先不执行，赋给别的变量
yo2("王大锤", 1, 2);
```
