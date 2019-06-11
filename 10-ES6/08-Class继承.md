# Class 继承

> 参考：https://github.com/ljianshu/Blog/issues/20

### 传统构造函数继承 VS ES6 继承

```js
// 寄生组合继承
function Parent(value) {
  this.val = value;
}
Parent.prototype.getValue = function() {
  console.log(this.val);
};

function Child(value) {
  Parent.call(this, value);
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const child = new Child(1);
child.getValue(); // 1
child instanceof Parent; // true
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
    super(name); // 可以看成 Animal.call(this, name)
    this.name = name;
  }
  say() {
    alert(this.name + ' say');
  }
}

const dog = new Dog('哈士奇');
dog.say(); // 哈士奇 say
dog.eat(); // 哈士奇 eat
```

区别：

- Class 在语法上更加贴合面向对象的写法
- Class 实现继承更加易读、易理解，对初学者更加友好
- 本质还是语法糖，使用 prototype
