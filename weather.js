/*   This javascript file is used for the weather service . 
It starts by declaring variables which store the specififc elememts that contain the id or class stated in querySelector 
(these are looked for in the corresponding hbs file)*/ 

const API_KEY = `add your own api key here`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

/*It then creates an event listener for when this input field is submitted, which will call getWeather() function in order to 
fetch weather data from Open Weather Map API using our API key.*/

  
const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

/*Next,  a function called showWeather() is defined.
This function takes one parameter: city (the name of the city).
If there was no error retrieving data from Open Weather Map API, then this function will return some HTML code that displays 
information about weather conditions in that particular city.Otherwise if there was an error retrieving data from Open Weather Map API,
then this function will display "City Not Found" message instead of displaying any other content because in lines 44-51
we have defined event listener for when submit button  is clicked and preventDefault() method has been used so that 
user cannot click on anything else after submitting their request for getting weather information in City X*/

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
        </div>
    `
}


/*The code will submit the form with the city as input and it will fetch the weather for that city.*/
form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)

