//REQUIREMENTS
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'), 
	_ = require("underscore"),
	path = require("path"),
	views = path.join(process.cwd(), "views/"),
	//require db models
	db = require("./models");

//CONFIG
//serve js & css files
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));
//body parser config to accept all datatypes
app.use(bodyParser.urlencoded({extended: true}))

//ROUTES
app.get("/", function (req, res) {
	res.send("Hello world!");
});

//where the user submits the sign-up form
app.post(["/users", "/signup"], function signup(req, res) {
	//grab the user from the params
	var user = req.body.user;
	//pull out their email & password
	var email = user.email;
	var password = user.password;
	//create the new user
	db.User.createSecure(email,password, function() {
		res.send(email + " is registered!\n");
	});
});

app.post(["/sessions", "/login"], function login(req, res) {
  var user = req.body.user;
  var email = user.email;
  var password = user.password;
  db.User.authenticate(email, password, function (err, user) {
    res.send(email + " is logged in\n");
  });
});


//SPECIFYING PORT
var listener = app.listen(3000, function() {
	console.log("Listening on port "+ listener.address().port);
});