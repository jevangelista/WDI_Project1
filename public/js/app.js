$(document).ready(function(){


// <<<<<<<<<<< Profile Page  >>>>>>>>>>>>>>
//========================================

//renders user info on profile page
$.get("/api/user/:id", function (response) {
	
	console.log("Here is the response in app: " + response);
	console.log(response.email);
	console.log("Here are your drinks" + response.drinks);
	console.log("Here is 1 drink" + response.drinks[0].drinkName);


	var userTemplate = _.template($("#userTemplate").html());
	var userHtml = userTemplate(response);
	var $target_div = $("div#target-user");
	$target_div.append(userHtml);

});





//variable for recipe feeling query parameter


// <<<<<<<<<<< Bar Page  >>>>>>>>>>>>>>
//========================================

// var feelingHere;
// console.log("here is the feeling " + feelingHere);

// var feelingHere = "";
//createFeeling so that it equals query parameter

function createFeeling () {
	$( ".drinkButton" ).click(function() {
		// console.log($(this));
		console.log($(this).attr('id'));
		feelingHere = $(this).attr('id');

	});
};
createFeeling();

var feelingHere =  $( ".drinkButton" ).submit(function() {
	// console.log($(this));
	console.log($(this).attr('id'));
	var feelingHere = $(this).attr('id');
	console.log("feelings inside: " + feelingHere  );


});


	//renders drink on recipe page
		$.get("/api/drink", {"feeling": feelingHere}, function (response) {
			
		// $( "#drinkButton-happy" ).click(function() {
		// 	console.log("happy button clicked");
		// 	location.href = "/recipe";
			
			console.log(response);	
			console.log(response.drinkName);		

			var drinkTemplate = _.template($("#drinksTemplate").html());
			var drinkHtml = drinkTemplate(response);
			var $target_div = $("div#target-drinks");
			$target_div.append(drinkHtml);
		// });



		});





});


//next step --> get global variable to render on recipe page

// var feelingHere = "";
// //createFeeling so that it equals query parameter
// function createFeeling () {
	// $( ".drinkButton" ).click(function() {
	// 	// console.log($(this));
	// 	console.log($(this).attr('id'));
	// 	feelingHere = $(this).attr('id');

	// });
// };
// createFeeling();


// $( "#drinkButton-sleepy" ).click(function() {
// 	console.log("sleepy button clicked");
// 	location.href = "/recipe?feeling=sleepy";
// });

// $( "#drinkButton-fancy" ).click(function() {
// 	console.log("fancy button clicked");
// 	location.href = "/recipe?feeling-fancy";
// });

// $( "#drinkButton-adventurous" ).click(function() {
// 	console.log("adventurous button clicked");
// 	location.href = "/recipe?feeling=adventurous";
// });

// $( "#drinkButton-romantic" ).click(function() {
// 	console.log("romantic button clicked");
// 	location.href = "/recipe?feeling=romantic";
// });

// $( "#drinkButton-zany" ).click(function() {
// 	console.log("zany button clicked");
// 	location.href = "/recipe?feeling=zany";
// });

// $( "#drinkButton-relaxed" ).click(function() {
// 	console.log("relaxed button clicked");
// 	location.href = "/recipe?feeling=relaxed";
// });

// $( "#drinkButton-pensive" ).click(function() {
// 	console.log("pensive button clicked");
// 	location.href = "/recipe?feeling=pensive";
// });

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
