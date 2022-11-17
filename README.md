# Web-application-using-NodeJs-CSS-and-MySQL

About:

Created a simple application to help travelers who are interested to visit Thailand, plan a trip  and familiarize themselves with a  few thing before going. The user needs to have an account to be able to use the website, for this a registration/login system is present before the access to the website is given.



Installation and run instructions:

1) Prerequisites for installing the system :- To be able to use the code all of the following should be on installed on the computer: 
                                      
                                      a) node.js - This is used as the backend language. It also comes with npm which can futher be used to 
                                      installl other modules.(link to download :https://nodejs.org/en/).
                                     
                                      b) Visual studio code- this is the editing software used where all the code will be added.
                                      (link to download:https://code.visualstudio.com/). To be able to code the following is to 
                                      be installed ( you can do so in the terminal using the following code) : 
                                             1) To check if you have node js already installed type: "node -v". If any version number like                                                                               "v16.14.2" is returned then it means it is installed and you can move on.
                                               To get the package.json file type: "mpm init" in the terminal.
                                                 
                                             2)Few other dependencies to be installed :
                                                  * nodemon : npm install  -g nodemon 
                                                  * express: npm install express --save.
                                                  * hbs :  npm install hbs
                                                  * bcryptjs: npm install bcryptjs
                                                  * cookie-parser: npm install cookie-parser
                                                  * jsonwebtoken: npm install jsonwebtoken
                                                  * dotenv : npm install dotenv
                                                  * mysql: npm install mysql    (in order to be able to make a connection with the database)
                                       
                                     c) XAMPP - This is used to setup the database .
                                        (link to download : https://www.apachefriends.org/)
                                        On the XAMPP Control Panel :
                                        start the modules "Apache" and "MySQL". After you start MySQL click on the admin action for it ,
                                        which will direct you to phpMyamin where the database can be created.
                                        
                                     d) API and API key for weather and currency converter: 
                                          1) The api for the weather service is from the website : Open weather map ( https://openweathermap.org/api).
                                             On this website create an acoount, and then sign in. After that go the the page for API and open api 
                                             doc for "Current weather". The "api call" shown here is to be copied to the javascript code. 
                                             To get the api key click on your account name shown on the top right , which shows the 
                                             option my api keys. On this page you can also create a new api key, the key might take around 
                                             30 minutes to get activated. Copy this key and replace it with the part that says API KEY in the 
                                             api call that you previously copied.
                                          
                                          2) The api for the currency converter is from the website : EchangeRate-API ( https://www.exchangerate-api.com/ )
                                              On this website go to the page for documentation and click on standard under main API. 
                                              This directs you to the page where you can see the api call, copy this url and paste it 
                                              in the javascript code. To get the api key : On the navbar click on Product and then on
                                              Exchange rate api, the page that is displayed will ask for your email, where the key would be                                                                           sent.Copy this key from your email and paste it in the api call where it says "YOUR-API-KEY".
                                              You can also change the base currency from USD to whatever you like.  
                                              
 2)  configure the system:  I have used a .env file  to store the variables for the properties of the database (host,user,password): Not only does it make the information more private and safe but also avoids the usage of the original values again and again as there are now more understandable placeholders (variables) assigned to those values , making it easier for the user to debug and even easier for others to comprehend the code.


3) Install and deploy the system:   
      a) Server side: To start the node server enter the command "node app.js" in the terminal in visual studio code. I have defined start as "nodemon app.js"  under             scripts in package.json which allows me to simply use the command "npm start" to start the node server .
          Also for the application to work make sure to open the XAMPP Control Panel and have the apache and MySQL modules started and hence open the database on                 phpmyadmin.
      b) Client side: Start you browser and enter the url with the specified port number. (http://localhost:5005)      
         

 


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



