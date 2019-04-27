# jq 动画

## 自定义动画

`$("selector").animate({...},time1).animate({...},time2)......;`

## 常见动画：显隐效果、垂直方向变化及淡入淡出

> [ ]表示可选，time 单位以毫秒，缓动函数表示动画曲线函数，回调函数表示动画完毕后要干嘛

1. 显隐效果

   - 显隐效果：`show([time],[缓动函数],[回调函数])`和`hide([time],[缓动函数],[回调函数])`，原理改变 display 属性为 none 来实现
   - 显隐组合：`toggle([time],[缓动函数],[回调函数])`

2. 垂直方向变化

   - 垂直方向变化：`slideUp([time],[缓动函数],[回调函数])`和`slideDown([time],[缓动函数],[回调函数])`
   - 垂直方向变化组合：`slideToggle([time],[缓动函数],[回调函数])`

3. 淡入淡出

   - 淡入淡出：`fadeIn([time],[缓动函数],[回调函数])`和`fadeOut([time],[缓动函数],[回调函数])`，原理改变透明度
   - 淡入淡出组合：`fadeToggle([time],[缓动函数],[回调函数])`
   - 特定透明度：`fadeTo(time,opacity,[缓动函数],[回调函数])`

## 动画控制

- 延时：`delay(time)`
- 停止：`stop()`
- 判断元素是否处于动画状态：`is(':animated')`

## 计时器

- 延时执行：`setTimeout()`
- 周期性执行：`setInterval()`
