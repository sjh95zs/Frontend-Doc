## 对象初识

- JS 对象是一组由 key-value 组成的无序集合，key 又称为该对象的属性，value 称为属性值

  ```js
  var xiaoming = {
      name: '小明',
      birth: 1990,
      school: 'No.1 Middle School',
      height: 1.70,
      weight: 65,
      score: null
      'middle-school': 'No.1 Middle School'
  };

  xiaohong['name']; // '小红'
  xiaohong.name; // '小红'
  ```

- JS 对象的 key 都是字符串类型，value 可以是任意数据类型（对象、函数都行）

- 本质上，所有的对象都是通过构造函数创建的

## 对象的分类

- 自定义对象：开发人员自己创建的对象
- 原生对象：ES 标准定义的对象，如 String、Number、Boolean、Function、Object......
  - 内置对象：只有 Math 和 Global，**它们也是原生对象**，默认已经实例化
- 宿主对象：浏览器提供的对象
  - DOM
  - BOM

## 补充：遍历对象中的属性 for in

```js
var obj = {
  name: "smyhvae",
  age: 26,
  gender: "男",
  address: "shenzhen"
};

//遍历对象中的属性
for (var n in obj) {
  console.log("属性名:" + n);
  console.log("属性值:" + obj[n]);
}
```
