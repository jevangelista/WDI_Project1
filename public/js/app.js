
$(document).ready(function(){

function render(items) {
  var $target_div = $("div#target");
  items.forEach(function(item){
    $target_div.append("<p>" + item.email + "<br/>" + item._id + "</p>");
  })
}

 $.get("/api/user/55ef2d2c483f5cf4208e86f0", function (response) {
    render(response);
 });

 //  $.get("/api/user/beau@ga.co", function (response) {
 //    render(response);
 // });

})
