/*This javascript file is used for the registration/login system.
The  express library , router module and and the users.js file are imported.*/

const express = require("express");
const router = express.Router();
const userContoller = require("../controllers/users");

/*The code defines two routes: one for "/" and another for "/login".The purpose of the code is that when someone goes to "/" or "/login"
, the login page will be shown */

router.get(["/", "/login"], (req, res) => {
  
  res.render("login");
});

/*The code defines a route for "/register" The purpose of the code is that when someone goes to "/register" 
, the register page will be shown */

router.get(["/register"], (req, res) => {
  res.render("register");
});

/* Defines a route called "profile" which is used when someone logs in.  when someone goes to /profile, they will be redirected to
profile(which is the services page) if they are  logged in already or else they will be redirected back to where they came from 
(the login page) with an error message .*/

router.get("/profile", userContoller.isLoggedIn, (req, res) => {
  if (req.user) {
    res.render("profile", { user: req.user });
  } else {
    res.redirect("/login");
  }
});

/* Defines a route called "home" which is used when someone logs in.  when someone goes to /home, they will be redirected to
home(which is the home page) if they are  logged in already or else they will be redirected back to where they came from 
(the login page) with an error message .*/

router.get("/home", userContoller.isLoggedIn, (req, res) => {
  
  if (req.user) {
    res.render("home", { user: req.user });
  } else {
    res.redirect("/login");
  }
});

/*  Finally, we export this file  so that other modules can import it into their own files for use in the application.*/
module.exports = router;


