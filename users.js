/* This javacript file is used for the regisyter/login system(mainly for authentication) 
starts by importing a few modules. */

const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser");
const { promisify } = require("util");

/* A connection to the database is created */

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE,
});

/* The following code  is a function that takes the request and returns a response.
 The code first checks if the user has provided an email and password, .
 If they have not provided any of these values, the code will return an error with status 400.
 Then the email enetered by the user is checked for in the database.
 If there is no email found, then it logs an error message and returns a 401 status code which tells the browser that there was no
such thing found on our database (which would happen if someone tried to log in with an email address that doesn't exist).
If there is an email found, then it checks whether or not their password matches what they entered at registration time using bcrypt's 
hash() method (which takes two arguments: password and number of rounds).
If all values are correctly present, the code will create a JWT token using bcrypt and sign it using jwt-sign .
The JWT token created is saved in localStorage for use later on in the app.
It also sets up a cookie to be sent back to the browser for authentication purposes.
The last thing done by this function is redirecting to /home , which means that the user now has access to the website.*/

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).render("login", {
        msg: "Please Enter Your Email and Password",
        msg_type: "error",
      });
    }

    db.query(
      "select * from users where email=?",
      [email],
      async (error, result) => {
        console.log(result);
        if (result.length <= 0) {
          return res.status(401).render("login", {
            msg: "Please Enter Your Email and Password",
            msg_type: "error",
          });
        } else {
          if (!(await bcrypt.compare(password, result[0].PASS))) {
            return res.status(401).render("login", {
              msg: "Please Enter Your Email and Password",
              msg_type: "error",
            });
          } else {
            const id = result[0].ID;
            const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
              expiresIn: process.env.JWT_EXPIRES_IN,
            });
            console.log("The Token is " + token);
            const cookieOptions = {
              expires: new Date(
                Date.now() +
                process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
              ),
              httpOnly: true,
            };
            res.cookie("ash", token, cookieOptions);
            res.status(200).redirect("/home");
          }
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

/* The following code  starts by defining the register route.
The next line of code calls req.body's email property with an empty string as its argument so that we can check for emails from other 
users on our database without having to worry about any errors occurring because of invalid values being passed into db.query().
Next,it is checked if the email entered by user already exists in database .If there is an email found then a message is shown
saying "Email id already taken ".If there is no email found, then it checks whether or not their confirm password matches what they
entered for password. If it does not match then an error will be displayed or esle the password entered would be hashed using bcrypt 
and the user's name, email address, and hashed password value would be inserted into the database. And the suer will be able to see the
message "Registration is succesful." */


exports.register = (req, res) => {
  console.log(req.body);
 
  const { name, email, password, confirm_password } = req.body;
  db.query(
    "select email from users where email=?",
    [email],
    async (error, result) => {
      if (error) {
        confirm.log(error);
      }

      if (result.length > 0) {
        return res.render('register', {
          msg: "Email id already Taken",
          msg_type: "error",


        });
      } else if (password !== confirm_password) {
        return res.render("register", {
          msg: "Passwords do not match",
          msg_type: "error",
        });

      }
      let hashedPassword = await bcrypt.hash(password, 8);
      

      db.query(
        "insert into users set ?",
        { name: name, email: email, pass: hashedPassword },
        (error, result) => {
          if (error) {
            console.log(error);
          } else {
            
            return res.render("register", {
              msg: "Registration is sucessful",
              msg_type: "error",
            });






          }
        }
      );
    }
  );
};


/* The following code  startts by checking if there are cookies with an "ash" header(which would indicate that the user has already 
  been authenticated). If so , it calls jwt.verify() and passes in process.env.JWT_SECRET as a parameter because this function needs 
  access to this secret key for decryption purposes later on , for decrypting tokens from user swho have successfullly logged in using 
  JWT authentication(the function returns a Promise which resolves with whatever value was returned from jwt.verify()). 
  If there are no cookies with an "ash" header then it checks whetehr or not the current request has an id property set on its query 
  string paramteters and if so, sets req.user equal to whatever result of that query is found at index 0 of results.
  Then next() is called without doing anything else since we are done here now as we know what our response should look like based on 
  what type of request cam originally :eeither one where the cookies were present, the one with an id or an error. */

exports.isLoggedIn = async (req, res, next) => {
  
  if (req.cookies.ash) {
    try {
      const decode = await promisify(jwt.verify)(
        req.cookies.ash,
        process.env.JWT_SECRET
      );
      
      db.query(
        "select * from users where id=?",
        [decode.id],
        (err, results) => {
          
          if (!results) {
            return next();
          }
          req.user = results[0];
          return next();
        }
      );
    } catch (error) {
      console.log(error);
      return next();
    }
  } else {
    next();
  }
};


/*The code is meant to log out a user.The export statement exports the logout() function to be used by other modules in this file. It 
sets the cookie "ash" with the value "logout" and an expiration date of 2 hours from now. The cookie also has the attribute httpOnly 
set to true meaning that it cannot be accessed by other users on the same browser. The code then redirects back to the login page "/" */ 

exports.logout = async (req, res) => {
  res.cookie("ash", "logout", {
    expires: new Date(Date.now() + 2 * 1000),
    httpOnly: true,
  });
  res.status(200).redirect("/");
};





