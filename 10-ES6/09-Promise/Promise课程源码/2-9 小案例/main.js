// 页面中有个板块，需要多张图片加载完之后才能进行展示

const loadImg = src => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;

    // 加载成功就调用resolve
    img.onload = () => {
      setTimeout(() => {
        resolve(img);
      }, 1000);
    };
    // 加载失败就调用reject
    img.onerror = err => reject(err);
  });
};

const imgs = [
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1252816855,3131381110&fm=27&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906477750,651116720&fm=27&gp=0.jpg',
  'http://pic37.nipic.com/20140113/8800276_184927469000_2.png'
];

Promise.all(imgs.map(src => loadImg(src)))
  .then(arr => {
    console.log(arr);
    arr.forEach(img => {
      document.body.appendChild(img);
    });
  })
  .catch(err => {
    console.log(err);
  });
