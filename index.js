// <<<<<<<<<<< REQUIREMENTS >>>>>>>>>>>>>>
//========================================

var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'), 
  _ = require("underscore"),
  path = require("path"),
  // views path
  views = path.join(process.cwd(), "views/"),
  //require db models
  db = require("./models"),
  //requires express-session
  session = require("express-session");

// <<<<<<<<<<<<<< CONFIG >>>>>>>>>>>>>>>>>
//========================================
//serve js & css files
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

//body parser config to accept all datatypes
app.use(bodyParser.urlencoded({extended: true}));

// <<<<<<<<<< CREATE SESSION >>>>>>>>>>>>
//========================================

app.use(
  session({
    secret: 'super-secret-private-keyyy',
    resave: false,
    saveUninitialized: true
  })

);

// extending the `req` object to help manage sessions
app.use(function (req, res, next) {
  // login a user
  req.login = function (user) {
    req.session.userId = user._id;
  };
  // find the current user
  req.currentUser = function (cb) {
    db.User.
      findOne({ _id: req.session.userId },
      function (err, user) {
        req.user = user;
        cb(null, user);
      })
  };
  // logout the current user
  req.logout = function () {
    req.session.userId = null;
    req.user = null;
  }
  // call the next middleware in the stack
  next(); 
});


// <<<<<<<<<<<< GET ROUTES >>>>>>>>>>>>>>>
//========================================

//home route
app.get("/", function (req, res) {
  res.sendFile(path.join(views, "home.html"));
});

//home route
app.get("/home", function (req, res) {
  res.sendFile(path.join(views, "home.html"));
});

//login route
app.get("/login", function (req, res) {
  res.sendFile(path.join(views, "login.html"));
});

//signup route
app.get("/signup", function (req, res) {
  res.sendFile(path.join(views, "signup.html"));
});

//logout route
app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/home"); 
  console.log("User is logged out!");
});

// show the current user/profile route
app.get("/profile", function userShow(req, res) {
  req.currentUser(function (err, user) {
    res.sendFile(path.join(views, "profile.html"));
  })
});

//bar route
app.get("/bar", function (req, res) {
  res.sendFile(path.join(views, "bar.html"));
});

//recipe route
app.get("/recipe", function (req, res) {
  res.sendFile(path.join(views, "recipe.html"));
});

// <<<<<<<<<<<< API ENDPOINTS >>>>>>>>>>>>
//========================================

//where the user submits the sign-up form
app.post(["/users", "/signup"], function signup(req, res) {
  console.log("Looks like you're trying to signup!");
  //grab the user from the params
  var user = req.body.user;
  //pull out their email & password
  var email = user.email;
  var password = user.password;
  //create the new user
  db.User.createSecure(email,password, function (err, user) {
    if (err) {console.log(err);
    } else if (password.length < 6) {
       res.send("Your password needs to be at least 6 characters");
    } else { 
    // login the user
    req.login(user);
    console.log("User is logged in");
    // redirect to user profile
    res.redirect("/profile"); 
  };

  });
});

// where the user submits the login form
app.post(["/sessions", "/login"], function login(req, res) {
  var user = req.body.user;
  var email = user.email;
  var password = user.password;
  db.User.authenticate(email, password, function (err, user) {
    if (err) {console.log(err);
    } else {
    // login the user
    req.login(user);
    console.log("User is logged in");
    // redirect to user profile
    res.redirect("/profile"); 
    };
  });
});

//***TESTING OUT DATA****
app.get("/api/users", function indexUsers(req, res){
    db.User.find({}, function(err, users){
        if (err) {
            console.log("BAD THING!");
            return res.sendStatus(400);
        }
        res.send(users);
    });

});

// app.get("/api/users:id", function showUser(req, res){
//   var tweets = [
//       { message: "Once you understand how to write a program get someone else to write it." },
//       { message: "The string is a stark data structure and everywhere it is passed there is much duplication of process. It is a perfect vehicle for hiding information." },
//       { message: "There are two ways to write error-free programs; only the third one works." }
//     ];

//   var userNum = req.params.id; //tweets.message[1];

//   res.send({
//      data: [ users[userNum] ] // note we're sending back an array of one.
//   });
// })




// <<<<<<<<<<<< SPECIFYING PORT >>>>>>>>>>>>
//========================================
var listener = app.listen(3000, function() {
  console.log("Listening on port "+ listener.address().port);
});