// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

//user seed data;
var users_list =[
	{
		_id: "55e76cc4ed7b8c9e09924daa",
		email: "jamie@ga.co",
		passwordDigest: "$2a$10$9Hmt9l2iOZgNLi4C/GeoOeyMDRd.OUrFBz.s0NpvXJHVv.dY2I8N6",
		__v: 0,
		createdAt: "2015-09-02T21:40:20.969Z"
	},
	{
		_id: "55e7ea2f6c03afc5262a0a6e",
		email: "beau@ga.co",
		passwordDigest: "$2a$10$Zt5pZLXNH7ajTaKOZ2GUL.6zffwXbzEXADAVh0swvRwncH1G8MZjS",
		__v: 0,
		createdAt: "2015-09-03T06:35:27.974Z"
	},
	{
		_id: "55ef2d2c483f5cf4208e86f0",
		email: "john@ga.co",
		passwordDigest: "$2a$10$72qIfb.XbmZAvEpC59RbOuaUULbbuSCyeFBuBdawdBwJbGYUREXrm",
		__v: 0,
		createdAt: "2015-09-08T18:44:51.361Z"
	},
	{
		_id: "55ed39c463846a3e120eb890",
		email: "alice@ga.co",
		passwordDigest: "$2a$10$v/DALsucCd/rjlmiB5AJwOMK898oNBdqUpS2l/i9hFkqWfssQoXCO",
		__v: 0,
		createdAt: "2015-09-07T07:16:03.911Z"
	},
];

var drinks_list = [
	{
		drinkName: "Old Fashioned",
		image: "http://liquor.s3.amazonaws.com/wp-content/uploads/2010/08/c-and-b-old-fashioned1.jpg",
		feeling: "pensive",
		ingredients: ["whisky", "bitters", "orange"],
		instructions: "stir it all up!"
	},
	{
		drinkName: "Hot Toddy",
		image: "http://cdn.shape.com/sites/shape.com/files/styles/586xany/public/hot-toddy-700.jpg?itok=EMNO0ShQ",
		feeling: "sleepy",
		ingredients: ["lemon", "hot water", "whisky"],
		instructions: "heat it all up!"
	},
		{
		drinkName: "Mimosa",
		image: "http://www.bevdig.com/uploads/2/6/7/4/26740497/5550639_orig.jpg",
		feeling: "romantic",
		ingredients: ["orange juice", "champagne", "ice"],
		instructions: "mix it all up!"
	}
]

// //Drink Schema
// var DrinkSchema = new Schema {(
//     drinkName: {type: String, required: true},
//     image: {type: String, required: true},
//     feeling: {type: String, required: true},
//     ingredients: {type: Array, default: Date.now()},
//     instructions: {type: String, required: true}
//   )};


db.User.remove({}, function(err, users){

  db.User.create(users_list, function(err, users){
    if (err) { return console.log(err) };
    console.log("created", users.length, "users")
    process.exit();
  })

});

db.Drink.remove({}, function(err, users){

  db.Drink.create(drinks_list, function(err, drinks){
    if (err) { return console.log(err) };
    console.log("created", drinks.length, "drinks")
    process.exit();
  })

});
