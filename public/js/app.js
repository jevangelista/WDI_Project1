
$(document).ready(function(){


//renders profile on profile page
$.get("/api/user/:id", function (response) {
		
	//console log sanity checks	
	console.log(response);
	console.log(response._id);
	console.log(response.email);
	var $target_div = $("div#target");
	$target_div.append("<p>" + response.email + "!" + "</p>");

});

//testing -- renders happy drinks on recipe page
$.get("/api/drinks/happy", function (response) {
	
	//console log sanity checks	
	console.log(response);
	console.log(response[0].drinkName);
	console.log(response[0].feeling);
	var $target_div = $("div#target-drinks");
	response.forEach(function (drink){
		$target_div.append("<p>" + drink.drinkName + "!" + "</p>");
	})
	

});


});



// function render(users) {
//   var $target_div = $("div#target");
//   users.forEach(function(user){
//     $target_div.append("<p>" + user.email + "<br/>" + user._id + "</p>");
//   })
// }

// //create our userinfo template
// var userinfoTemplate = ($('#userinfo-template').html());

// //data is defined in seed.js
// var users = users_list;

// //get our template to give us an html string for each user
// users.forEach(function (user){
// 	var userinfoHtml = userinfoTemplate(user);
// 	$("#userinfo-placeholder").append(userinfoHtml);	
// 	});
// });

//***************************

// function render(users) {
//   var $target_div = $("div#target");
//   users.forEach(function(user){
//     $target_div.append("<p>" + user.email + "<br/>" + user._id + "</p>");
//   })
// }

//  $.get("/api/users", function (response) {
//     render(response);
//  });




 //  $.get("/api/user/beau@ga.co", function (response) {
 //    render(response);
 // });


