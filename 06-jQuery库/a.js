$(document).ready(function() {
  $("button").click(function() {
    $("#div1").load("http://192.168.0.143/ajax/b.txt", function(
      responseTxt,
      statusTxt,
      xhr
    ) {
      if (statusTxt == "success") alert("外部内容加载成功!");
      if (statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
  });
});
