const express = require("express");
const mysql = require("mysql");
const doenv = require("dotenv");
const path = require("path");
const hbs = require("hbs");
const cookieParser = require("cookie-parser");

const app = express();

doenv.config({
  path: "./.env",
});
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE,
  socketpath: "C:/xampp/mysql/mysql.sock",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MySQL Connection Success");
  }
});

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.set("view engine", "hbs");
const location = path.join(__dirname, './public');
app.use(express.static(location));




app.use('/weather.js', express.static(__dirname + '/weather.js'));
app.use('/country-list.js', express.static(__dirname + '/country-list.js'));
app.use('/script.js', express.static(__dirname + '/script.js'));
app.use('/modal.js', express.static(__dirname + '/modal.js'));
app.use('/response.js', express.static(__dirname + '/response.js'));


const partialsPath = path.join(__dirname, "./views/partials");
hbs.registerPartials(partialsPath);

app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));



app.listen(5005, () => {
  console.log("Server Started @ Port 5005");
});




/* Comments for the code above 

lines (1-6) : The code starts by requiring the express,mysql,dotenv,path,hbs,cookieparser modules.

line 8: Express is used for routing requests.

lines(10-28) :The code then creates a connection to MySQL and assigns it to db variable.

lines (34-36) : The first line is a call to set the view engine to "hbs".Next, a location variable is created that will hold our 
public directory.Then we use this location variable in order to reference the static files of our application.Then express's app object
and its use method is used in order to render our HTML file with ExpressJS.

lines(41-45) : The code is used to include all the required files that are necessary for the application. Theese javascript references
here are later used in the specific hbs files to create a connection.

lines(51-52): The path to follow when encountered with "/auth " and "/" is indicated in these lines.

lines (56-58): this code indicates the port in which the application would start.
 

This  file contains all the routes and configurations for the application.*/