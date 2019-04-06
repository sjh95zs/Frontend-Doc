// 求任意一组数的平均值
function grtAvg() {
  var sum = 0;
  var len = arguments.length;
  for (i = 0; i < len; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

grtAvg(10, 20, 30);

try {
} catch (error) {}
