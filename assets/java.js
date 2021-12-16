var citiesArr = [];

var cityFormEl = document.querySelector("#city-form");
var citySearchEl = document.querySelector("#searched-city");
var currentContainerEl = document.querySelector("#current-weather");
var currentCity = document.querySelector("#current-city");
var forecastEl = document.querySelector("#forecast");
var forecastContainerEl = document.querySelector("#forecast-cards");
var pastCitiesEl = document.querySelector("#past-cities");

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
var getWeather = function(citySearch) {
    var apiKey = "d5d5a1652a4570f6a0810fd859cf2fbd"
    var apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"

    fetch(apiURL)
    .then(function(response)){
        response.JSON().then(function(data)){
        showWeather(data,citySearch);
        };
    });
};
  
// get lat and long
// get UV


// display weather
var showWeather = function(){


    // create date

    // create icon

    //make something to hold temp & append

    // make something to hold humidity & append

    // make someting to hold wind & append

    // display uv

}

// get forecast

// display forecast

    // create date & append
    // create icon & append
    //create temp & append
    // create humdity & append
    
    // append all to forecast container

// past search
// past search handler

// call functions
