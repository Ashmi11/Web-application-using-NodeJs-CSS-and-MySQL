# Web-application-using-NodeJs-CSS-and-MySQL

About:

Created a simple application to help travelers who are interested to visit Thailand, plan a trip  and familiarize themselves with a  few thing before going. The user needs to have an account to be able to use the website, for this a registration/login system is present before the access to the website is given.


To use the code the following statements might be helpful:

1)Controllers: The folder controllers consists of the users.js file which is majorly used for the authentication and configuration of the registration/login system

2) Public: This contains two other folders: a) css   b)images
    a) css: contains 5 css files on each of those files it is stated that for what part of the website it has been implemented for
    b) images: consists of all the images used in the code

3)  Routes : This is another folder which contains javascript files for the registration/login system.
           auth.js and pages.js are both used to help make routes and connections for the application.

4)Views : It is a folder that consists of all the .hbs files. These hbs files each correspond to the different sections/web pages available on the website

5) app.js is the main javascript file which states the port used.

6)country-list.js : It consists of the list of alll the countries and their corresponding currencies which are then used in script.js for the currency converter(present in the services page of the website)

7)modal.js : It consists all the javascript necessary to make the pop ups of three cities displayed on the website.

8)response.js: It contains the javascript code necessary to make the website responsive.(content fits on smaller screen)

9)script.js: Contains the javascript code for the currency converter where the api is also connected.
The api is from  https://www.exchangerate-api.com/ . Make sure to create your own api key and add it to the code.

10)weather.js : Contains the javascript code for the weather service, the api for weather is included here.
The api is from https://openweathermap.org/api . Make sure to create your own api key and add it to the code.

11)Github.com: I am not allowed to upload my .env file in github so I tried to create one in github itself.
But there are some extra lines here which should not be included in your real.env file. Just include the part after "with:"
this part comes towards the end of the file. 
This is what you should have in your env file:

DATABASE=login_crud
DATABASE_HOST=localhost
DATABASE_USER=root
DATABASE_PASS=
JWT_SECRET=1234
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES=90



12)I have also added the MySQL html file and also a folder for the database that I had created and used.
However, when using the code a database of your own can be created using XAMPP and phpMyAdmin but it should also be taken care of that the name for the table and its fields is kept the same as used in the code, or if its different then the text in the code should be changed .



