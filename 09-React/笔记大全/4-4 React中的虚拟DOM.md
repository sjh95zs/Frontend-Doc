# 4-4 React 中的虚拟 DOM

### 一般人的思路

1. state 数据
2. JSX 模板
3. 数据 + 模板的结合，render 函数执行，生成真实 DOM
4. state 发生改变
5. 数据 + 模板的结合，render 函数执行，生成新的真实 DOM，**完整地替换原始的 DOM**

- 缺陷：**超级耗费性能**

  - 第一次渲染**完整**的 DOM
  - 第二次渲染**完整**的 DOM
  - ......

### 还行的思路

1. state 数据
2. JSX 模板
3. 数据 + 模板的结合，render 函数执行，生成真实 DOM
4. state 发生改变
5. 数据 + 模板的结合，render 函数执行，生成新的真实 DOM
6. 新的 DOM 和原始的 DOM 作比对，找出差异
7. 只更新有差异的 DOM

- 缺陷：
  - **真实的 DOM 做比对，同样需要花费很大性能**

### 虚拟 DOM 方案

1. state 数据
2. JSX 模板
3. 数据 + 模板的结合，生成虚拟 DOM【**一个 JS 对象，用来描述真实的 DOM**】

   ```js
   const VDOM = ['div', { id: 'abc' }, ['span', {}, 'hello']]
   ```

4. 利用虚拟 DOM 的结构，生成真实 DOM

   ```html
   <div id="abc"><span>hello</span></div>
   ```

5. state 发生改变
6. 数据 + 模板的结合，生成新的虚拟 DOM【**这一步极大提升性能**】

   ```js
   const VDOM = ['div', { id: 'abc' }, ['span', {}, 'goodbye']]
   ```

7. 比较新虚拟 DOM 和原始虚拟 DOM【**JS 对象的对比，基本不耗性能，这一步极大提升性能**】
8. 根据差异，直接操作 DOM，改变 span 中的内容

### 深入 react 的虚拟 DOM

- 虚拟 DOM 本质：JS 对象

- JSX -> createElement -> 虚拟 DOM（JS 对象） -> 真实 DOM

  ```html
  <div id="a">item</div>
  ```

  ```js
  // 底层实现
  React.createElement('div', { id: 'a' }, 'item')
  ```

- 虚拟 DOM 的好处：

  1. 性能极大提升
  2. 因为虚拟 DOM 本质是 JS 对象，使得跨端应用得以实现，比如 React Native -> 安卓、苹果

- Diff 算法：大大提升虚拟 DOM 之间的对比性能

  > setdate() 能够更新 date 数据，而我们都知道 setdate() 方法 是异步的，为什么？因为如果连续 n 次快速的操作 date，那么有必要更新 n 次么？答案是：没必要，它会把 n 次 setdate() 合并成一次，只更新最后一次，极大提升性能

  - 重要概念：同级比较。也即高层到低层，遇到差异，下面就不比对了，直接当下面都是有差异的

  - 为什么循环需要 key？而且最好不要用下标 index？
    有 key 可以让下一次的比对快速进行，而 index 可能改变，也即上一次的虚拟 DOM 的 key 的唯一值就改变了，减慢了比对速度。所以为了提升性能，最好给定唯一不变的 id
