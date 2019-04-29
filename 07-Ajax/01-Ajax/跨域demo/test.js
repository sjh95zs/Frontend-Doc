$("button").click(function() {
  $.getJSON("http://localhost/wuxiaobin1995/jsonp.php?jsoncallback=?", function(
    data
  ) {
    var html = "<ul>";
    for (var i = 0; i < data.length; i++) {
      html += "<li>" + data[i] + "</li>";
    }
    html += "</ul>";

    $("#divCustomers").html(html);
    console.log(data);
  });
});
