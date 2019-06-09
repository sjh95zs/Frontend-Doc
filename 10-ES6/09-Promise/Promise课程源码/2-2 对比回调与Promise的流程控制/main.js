// 动画

// 回调方式
// let el = document.querySelector('div');
// function moveTo(el, x, y, cb) {
//   el.style.transform = `translate(${x}px, ${y}px)`;
//   setTimeout(() => {
//     cb && cb();
//   }, 1000);
// }

// document.querySelector('button').addEventListener('click', e => {
//   moveTo(el, 100, 100, function() {
//     moveTo(el, 200, 200, function() {
//       moveTo(el, 100, 300, function() {
//         moveTo(el, 130, 20, function() {
//           moveTo(el, 0, 0, function() {
//             console.log('移动结束!');
//           });
//         });
//       });
//     });
//   });
// });

// promise
let el = document.querySelector('div');
function moveTo(el, x, y) {
  return new Promise(resolve => {
    el.style.transform = `translate(${x}px, ${y}px)`;
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

document.querySelector('button').addEventListener('click', e => {
  moveTo(el, 100, 100)
    .then(function() {
      console.log('第一次移动');
      return moveTo(el, 200, 200);
    })
    .then(function() {
      console.log('第二次移动');
      return moveTo(el, 100, 300);
    })
    .then(function() {
      console.log('第三次移动');
      return moveTo(el, 130, 20);
    })
    .then(function() {
      console.log('第四次移动');
      return moveTo(el, 0, 0);
    })
    .then(function() {
      console.log('第五次移动');
    });
});
