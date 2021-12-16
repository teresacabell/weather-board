var cities = [];

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




