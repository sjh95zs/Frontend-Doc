(function() {
  /* 解决移动端1px边框问题 */
  // 获取设备的dpr，默认设为1
  let dpr = window.devicePixelRatio || 1;
  // 创建meta标签
  let meta = document.createElement('meta');
  // 计算不同dpr下的缩放比例
  let initialScale = 1 / dpr;
  let maximumScale = 1 / dpr;
  let minimumScale = 1 / dpr;
  // 设置meta元素的属性
  meta.setAttribute('name', 'viewport');
  meta.setAttribute(
    'content',
    `width=device-width, user-scalable=no, initial-scale=${initialScale}, maximum-scale=${maximumScale}, minimum-scale=${minimumScale}`
  );
  // 插入到head元素中
  document.head.appendChild(meta);

  /* 动态设置HTML的font-size */
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
  setRemUnit();
  // resize事件：视口尺寸发生变化就会触发
  window.addEventListener('resize', setRemUnit);
})();
