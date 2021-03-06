
(function () {
  // JavaScript Document
  /**
   * 设计稿：750px
   * 设备像素比：2（以这个为基准）
   * viewport：device-width
   *
   * 设计为750px
   * 用rem为布局单位，将页面分为7.5份（即是7.5rem）
   * rem = device-width / 7.5
   *
   */

   // JSONZ@ 定义了一个全局变量，用于存储重置字体大小的时间
   // 方便其他地方统一管理
  window.CHANGE_REM_TIME = 300;

  var docEl = document.documentElement;
  var designWidth = docEl.getAttribute('data-design-width') || 750;
  var rem, width, preWidth, timer;
  function setRem() {
      // 判断<html />的宽度
      width = docEl.getBoundingClientRect().width;
      if (width === preWidth) return;
      preWidth = width;

      // 1rem = 1px
      rem = width / designWidth;

      // font-size必须大于12px，所以rem值必须大于12
      rem *= 100;
    rem = Math.min(rem, 100); // 最大设置为 100 px Jsonz

      docEl.style.fontSize = rem + 'px';
  }

  function changeRem() {
      setRem();
  }

  window.addEventListener('resize', function () {
      clearTimeout(timer);
      timer = setTimeout(changeRem, window.CHANGE_REM_TIME);
  });
  window.addEventListener('orientationchange', function () {
      clearTimeout(timer);
      timer = setTimeout(changeRem, window.CHANGE_REM_TIME);
  });

  setRem();
})();
