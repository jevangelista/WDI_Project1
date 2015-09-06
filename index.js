//REQUIREMENTS
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'), 
	_ = require("underscore"),
	path = require("path"),
	views = path.join(process.cwd(), "views/");

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

//SPECIFYING PORT
var listener = app.listen(3000, function() {
	console.log("Listening on port "+ listener.address().port);
});