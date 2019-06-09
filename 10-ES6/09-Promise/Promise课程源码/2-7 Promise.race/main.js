// 有一个实例率先改变状态，p 的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给 p 的回调函数
// Promise.race([ promise1, promise2 ]) => Promise
function getData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('第一条数据加载失败');
      reject('err');
    }, 500);
  });
}

function getData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('第二条数据加载成功');
      resolve('data2');
    }, 1200);
  });
}

function getData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('第三条数据加载成功');
      resolve('data3');
    }, 1000);
  });
}

let p = Promise.race([getData1(), getData2(), getData3()]);

p.then(
  data => {
    console.log(data);
  },
  e => {
    console.log(e);
  }
);

// -------------------------------------------
// 不使用pormise.race
// let flag = false;
// function func(data) {
//   if (flag) return;
//   flag = true;

//   console.log(data);
// }

// function getData1() {
//   setTimeout(() => {
//     console.log('第一条数据加载成功');
//     func({ name: 'xiaoming' });
//   }, 500);
// }

// function getData2() {
//   setTimeout(() => {
//     console.log('第二条数据加载成功');
//     func({ name: 'xiaohong' });
//   }, 600);
// }

// getData1();
// getData2();
