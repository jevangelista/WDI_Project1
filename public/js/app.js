
$(document).ready(function(){

function render(items) {
  var $target_div = $("div#target");
  items.forEach(function(item){
    $target_div.append("<p>" + item.email + "<br/>" + item._id + "</p>");
  })
}

 $.get("/api/users", function (response) {
    render(response);
 });


})
