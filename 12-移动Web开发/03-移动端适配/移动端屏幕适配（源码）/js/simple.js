(function() {
  // 获取设备的dpr
  let dpr = window.devicePixelRatio;
  // 创建meta标签
  let meta = document.createElement('meta');
  // 计算不同dpr下的缩放比例
  let initialScale = 1 / dpr;
  let maximumScale = 1 / dpr;
  let minimumScale = 1 / dpr;
  // 创建'name'属性,值为'viewport'
  meta.setAttribute('name', 'viewport');
  meta.setAttribute(
    'content',
    `width=device-width, user-scalable=no, initial-scale=${initialScale}, maximum-scale=${maximumScale}, minimum-scale=${minimumScale}`
  );
  document.head.appendChild(meta);

  function setRemUnit() {
    // 获取视口宽度
    let viewWidth =
      document.documentElement.clientWidth ||
      window.innerWidth ||
      document.documentElement.getBoundingClientRect().width;
    // 设计稿的宽度
    let desW = 750;
    // 人为规定1rem=100px
    document.documentElement.style.fontSize = (viewWidth / desW) * 100 + 'px';
  }

  // 视口发生变化就触发
  window.addEventListener('resize', setRemUnit);
  setRemUnit();
})();
