/*
 * 传统的回调方式 VS Promise
 */

// -------------------------------------------------------
// 传统的回调方式
// function f(cb) {
//   setTimeout(function() {
//     cb && cb();
//   }, 1000);
// }

// f(function() {
//   console.log(1);

//   f(function() {
//     console.log(2);

//     f(function() {
//       console.log(3);

//       f(function() {
//         console.log(4);

//         f(function() {
//           console.log(5);

//           f(function() {
//             console.log(6);
//           });
//         });
//       });
//     });
//   });
// });

// -------------------------------------------------------
// Promise
function f() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

f()
  // 第一个参数指的是resolve
  .then(function() {
    console.log(1);
    return f();
  })
  .then(function() {
    console.log(2);
    return f();
  })
  .then(function() {
    console.log(3);
    return f();
  })
  .then(function() {
    console.log(4);
    return f();
  })
  .then(function() {
    console.log(5);
    return f();
  })
  .then(function() {
    console.log(6);
    return f();
  });
