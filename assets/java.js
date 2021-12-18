var searchButtonEl = document.querySelector("#submit-button");
var searchCityEl = document.querySelector("#searched-city");
var citySearchFormEl = document.querySelector("#city-form");
var displayEl = document.querySelector("#display-weather");
var temperatureEl = document.querySelector("#temperature");
var windEl = document.querySelector("#wind");
var humidityEl = document.querySelector("#humidity");
var uvEl = document.querySelector("#uv");
var todayDate = new Date;

// api key
var apiKey = "d5d5a1652a4570f6a0810fd859cf2fbd"

// search for city 
var searchCity = function(event) {
    event.preventDefault();
    var city = searchCityEl.value.trim();
    findCity(city)
}
searchButtonEl.addEventListener('click', searchCity);


// finds city
var findCity = function(namedCity) {
    var apiCityURL = "https://api.openweathermap.org/data/2.5/weather?q=" + namedCity + "&appid=" + apiKey;
        fetch(apiCityURL)
        .then(response => {
            if (response.ok) {
                response.json()
                .then(function(data) {
                    city.innerHTML = namedCity
                    pullWeather(data.coord.lat, data.coord.lon)
                }) 
            }
        })
}

// gather data
    var pullWeather = function(lat,lon){
        var apiLatLonURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
        fetch(apiLatLonURL)
        .then(response => {
            response.json()
            .then(function(data) {
                console.log(data)
                temperatureEl.textContent = "Temperature is " + data.current.temp + "degrees Fahrenheit"
                windEl.textContent = "Wind is " + data.current.wind_speed + "MPH"
                humidityEl.textContent = "Humidity is " + data.current.uv + "%"
                uvEl.textContent = "UV Index is " + data.current.uv
            })
        })
    }