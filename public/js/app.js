
$(document).ready(function(){


// <<<<<<<<<<< Profile Page  >>>>>>>>>>>>>>
//========================================

//renders profile on profile page
$.get("/api/user/:id", function (response) {
		
	var $target_div = $("div#target");
	$target_div.append("<p>" + response.email + "!" + "</p>");

});

// <<<<<<<<<<< Bar Page  >>>>>>>>>>>>>>
//========================================

$( "#drinkButton-happy" ).click(function() {
	console.log("happy button clicked");
	location.href = "/recipe";
});

$( "#drinkButton-sleepy" ).click(function() {
	console.log("sleepy button clicked");
	location.href = "/recipe";
});

$( "#drinkButton-fancy" ).click(function() {
	console.log("fancy button clicked");
	location.href = "/recipe";
});

$( "#drinkButton-adventurous" ).click(function() {
	console.log("adventurous button clicked");
	location.href = "/recipe";
});

$( "#drinkButton-romantic" ).click(function() {
	console.log("romantic button clicked");
	location.href = "/recipe";
});

$( "#drinkButton-zany" ).click(function() {
	console.log("zany button clicked");
	location.href = "/recipe";
});

$( "#drinkButton-relaxed" ).click(function() {
	console.log("relaxed button clicked");
	location.href = "/recipe";
});

$( "#drinkButton-pensive" ).click(function() {
	console.log("pensive button clicked");
	location.href = "/recipe";
});

});
// //Renders happy drinks on recipe page
// $.get("/api/drink/happy", function (response) {
	
// 	var $target_div = $("div#target-drinks");
// 	response.forEach(function (drink){
// 		$target_div.append("<p>" + drink.drinkName + "!" + "</p>");
// 	})
	

// });



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


