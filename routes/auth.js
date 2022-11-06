/* This javascript file is used for the registration/login system.
The code starts by importing the express,mysql,dotenv,path,hbs,cookieparser modules.*/
const express = require("express");
const doenv = require("dotenv");
const path = require("path");
const hbs = require("hbs");
const cookieParser = require("cookie-parser");

/*The code then imports the users.js file to help create a connection , to be used for the routes created in the rest of the code */
const userController = require("../controllers/users");

/*imports the router module to be able to use its post moethod*/
const router = express.Router();

/* The code attempts to create a register and login route*/
router.post("/register", userController.register);
router.post("/login", userController.login);

/* The logout method of the variable userController is called on "/logout"  (with an arguement of true the user will be logged out)*/
router.get("/logout", userController.logout);

/*  Finally, we export this file  so that other modules can import it into their own files for use in the application.*/
module.exports = router;



