
$(document).ready(function(){


//renders profile on profile page
$.get("/api/user/:id", function (response) {
		
	var $target_div = $("div#target");
	$target_div.append("<p>" + response.email + "!" + "</p>");

});

//Renders happy drinks on recipe page
$.get("/api/drinks/happy", function (response) {
	
	var $target_div = $("div#target-drinks");
	response.forEach(function (drink){
		$target_div.append("<p>" + drink.drinkName + "!" + "</p>");
	})
	

});

// //Renders sleepy drinks on recipe page
// $.get("/api/drinks/sleepy", function (response) {
	
// 	var $target_div = $("div#target-drinks");
// 	response.forEach(function (drink){
// 		$target_div.append("<p>" + drink.drinkName + "!" + "</p>");
// 	})
	

// });

// //Renders fancy drinks on recipe page
// $.get("/api/drinks/fancy", function (response) {
	
// 	var $target_div = $("div#target-drinks");
// 	response.forEach(function (drink){
// 		$target_div.append("<p>" + drink.drinkName + "!" + "</p>");
// 	})
	

// });

// //Renders adventurous drinks on recipe page
// $.get("/api/drinks/adventurous", function (response) {
	
// 	var $target_div = $("div#target-drinks");
// 	response.forEach(function (drink){
// 		$target_div.append("<p>" + drink.drinkName + "!" + "</p>");
// 	})
	

// });

// //Renders romantic drinks on recipe page
// $.get("/api/drinks/romantic", function (response) {
	
// 	var $target_div = $("div#target-drinks");
// 	response.forEach(function (drink){
// 		$target_div.append("<p>" + drink.drinkName + "!" + "</p>");
// 	})
	

// });

// //Renders zany drinks on recipe page
// $.get("/api/drinks/zany", function (response) {
	
// 	var $target_div = $("div#target-drinks");
// 	response.forEach(function (drink){
// 		$target_div.append("<p>" + drink.drinkName + "!" + "</p>");
// 	})
	

// });

// //Renders relaxed drinks on recipe page
// $.get("/api/drinks/relaxed", function (response) {
	
// 	var $target_div = $("div#target-drinks");
// 	response.forEach(function (drink){
// 		$target_div.append("<p>" + drink.drinkName + "!" + "</p>");
// 	})
	

// });

// //Renders pensive drinks on recipe page
// $.get("/api/drinks/pensive", function (response) {
	
// 	var $target_div = $("div#target-drinks");
// 	response.forEach(function (drink){
// 		$target_div.append("<p>" + drink.drinkName + "!" + "</p>");
// 	})
	

// });


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


