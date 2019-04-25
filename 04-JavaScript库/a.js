function Parent(color, arr) {
  this.color = "red";
  this.arr = [1, 2, 3];
}
Parent.prototype.walk = "I can walk";

function Child(age) {
  this.age = 20;
}

Child.prototype = new Parent(); // 将父类的实例作为子类的原型

const child1 = new Child();
const child2 = new Child();

// 测试
child1.color; // red
child1.walk; // I can walk
console.log(child1.walk)