var citiesArr = [];

var cityFormEl = document.querySelector("#city-form");
var citySearchEl = document.querySelector("#searched-city");
var currentContainerEl = document.querySelector("#current-weather");
var currentCity = document.querySelector("#current-city");
var forecastEl = document.querySelector("#forecast");
var forecastContainerEl = document.querySelector("#forecast-cards");
var pastCitiesEl = document.querySelector("#past-cities");
var newTime = new Date();
var currentTime = newTime.getHours();
var apiKey = "d5d5a1652a4570f6a0810fd859cf2fbd"

var formSubmitHandler = function(event) {
    event.preventDefault();

    var citySearch = citySearchEl.value.trim();
    if(citySearch) {
        getWeather(citySearch);
        getForecast(citySearch);
    } else {
        alert("Please search for a city!");
    }
    saveCitySearch();
    addPastCity(citySearch);
}


// save weather to an array
var saveCitySearch = function(){
    localStorage.setItem("citiesArr", JSON.stringify("citiesArr"));
};

// retrieve weather
 var getWeather = function(citySearch){
   var apiURL = "api.openweathermap.org/data/2.5/weather?q=" + {city name} + "&appid=" API key

    fetch(apiURL)
    .then(function(response){
        response.JSON().then(function(data){
           console.log(data);
         showWeather(data,citySearch);
       });
   });
 };

// get UV


// display weather
// var showWeather = function(){

    // get date
    function currentDate() {
        var options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        var thisDate = newTime.toLocaleDateString("en-US", options);
        document.getElementById("currentDay").innerHTML = thisDate;
      }
      currentDate();

    // create icon

    // make something to hold temp & append

    // make something to hold humidity & append

    // make someting to hold wind & append

    // display uv



// get forecast

// display forecast

    // create date & append
    // create icon & append
    // create temp & append
    // create humdity & append
    
    // append all to forecast container

// past search
// past search handler

// call functions
