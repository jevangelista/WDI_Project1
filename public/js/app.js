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
/** Note --> so close to getting this to work. Got the click event to console log the desired items, 
and was render the drinks individually, though I had to manually manipulate the code to show the 
correct contents. 

*/

// var feelingHere;
// console.log("here is the feeling " + feelingHere);

// var feelingHere = "";
//createFeeling so that it equals query parameter

// var feelingHere =  $( ".drinkButton" ).submit(function() {
// 	// console.log($(this));
// 	console.log($(this).attr('id'));
// 	var feelingHere = $(this).attr('id');
// 	console.log("feelings inside: " + feelingHere  );


// });

// var feelingHere = "zany";

// 	//renders drink on recipe page
// 		$.get("/api/drink", {"feeling": feelingHere}, function (response) {
			
// 		// $( "#drinkButton-happy" ).click(function() {
// 		// 	console.log("happy button clicked");
// 		// 	location.href = "/recipe";
			
// 			console.log(response);	
// 			console.log(response.drinkName);		

// 			var drinkTemplate = _.template($("#drinksTemplate").html());
// 			var drinkHtml = drinkTemplate(response);
// 			var $target_div = $("div#target-drinks");
// 			$target_div.append(drinkHtml);
// 		// });



// 		});





});


