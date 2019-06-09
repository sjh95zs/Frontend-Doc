function f(val) {
  return new Promise((resolve, reject) => {
    if (val) {
      resolve('200');
    } else {
      reject('404');
    }
  });
}

//----------------------------------------
// then方法中的第二个参数：失败时候做的事
// f(false).then(
//   msg => {
//     console.log(msg);
//   },
//   err => {
//     console.log(err);
//   }
// );

//----------------------------------------
// 使用实例的catch方法，可以捕获错误
// f(false).catch(e => {
//   throw Error(e);
// });

//----------------------------------------
// 不论成功还是失败，finally中的内容一定会执行
// f(false)
//   .catch(e => {
//     throw Error(e);
//   })
//   .finally(() => {
//     console.log('我最终都会执行');
//   });
