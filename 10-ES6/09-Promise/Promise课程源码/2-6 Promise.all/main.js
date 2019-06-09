// Promise.all方法可以把多个promise实例包装成一个新的promise实例
// Promise.all([ promise1, promise2 ]) => Promise
function getData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('第一条数据加载成功');
      resolve('data1');
    }, 300);
  });
}

function getData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('第二条数据加载成功');
      resolve('data2');
    }, 1800);
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

function getData4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('第四条数据加载成功');
      resolve('data4');
    }, 500);
  });
}

let p = Promise.all([getData1(), getData2(), getData3(), getData4()]);
p.then(
  arr => {
    console.log(arr); // 结果：["data1", "data2", "data3", "data4"]
  },
  err => {
    console.log(err);
  }
);

//-------------------------------------------
// 传统做法
// let count = 0;
// let err = false;

// function func() {
//   if (count < 4) return;

//   if (err) {
//     // ....
//   }

//   console.log('全部拿到了 ！');
// }

// function getData1() {
//   setTimeout(() => {
//     console.log('第一条数据加载成功');
//     count ++;
//     func();
//   }, 1000);
// }

// function getData2() {
//   setTimeout(() => {
//     console.log('第二条数据加载成功');
//     count ++;
//     func();
//   }, 1000);
// }

// function getData3() {
//   setTimeout(() => {
//     console.log('第三条数据加载成功');
//     count ++;
//     func();
//   }, 1000);
// }

// function getData4() {
//   setTimeout(() => {
//     console.log('第四条数据加载成功');
//     count ++;
//     func();
//   }, 1000);
// }

// getData1();
// getData2();
// getData3();
// getData4();
