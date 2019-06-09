# Class 继承

> 参考：https://segmentfault.com/a/1190000017139065

### 传统构造函数继承 VS ES6 继承

```js
// 传统构造函数继承
function Animal() {
  this.eat = function() {
    alert('Animal eat');
  };
}
function Dog() {
  this.bark = function() {
    alert('Dog bark');
  };
}
Dog.prototype = new Animal(); // 绑定原型，实现继承
var hashiqi = new Dog();
hashiqi.bark(); //Dog bark
hashiqi.eat(); //Animal eat
```

```js
// ES6继承
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    alert(this.name + ' eat');
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name); // 有extend就必须要有super，它代表父类的构造函数，即Animal中的constructor
    this.name = name;
  }
  say() {
    alert(this.name + ' say');
  }
}
const dog = new Dog('哈士奇');
dog.say(); //哈士奇 say
dog.eat(); //哈士奇 eat
```

区别：

- Class 在语法上更加贴合面向对象的写法
- Class 实现继承更加易读、易理解，对初学者更加友好
- 本质还是语法糖，使用 prototype
