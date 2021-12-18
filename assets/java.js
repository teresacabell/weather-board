var searchButtonEl = document.querySelector("#submit-button");
var searchCityEl = document.querySelector("#searched-city");
var citySearchFormEl = document.querySelector("#city-form");
var displayEl = document.querySelector("#display-weather");
var cityEl = document.querySelector("#cityEl");
var temperatureEl = document.querySelector("#temperature");
var windEl = document.querySelector("#wind");
var humidityEl = document.querySelector("#humidity");
var uvEl = document.querySelector("#uv");


// api key
var apiKey = "d5d5a1652a4570f6a0810fd859cf2fbd"

// search for city 
var searchCity = function(event) {
    event.preventDefault();
    var city = searchCityEl.ariaValueMax.trim();
    searchCity(city)
}
searchButtonEl.addEventListener('click', searchCity);

// finds city
var findCity = function(cityName) {
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&sppid=" + apiKey;
        fetch(apiURL)
        .then(response => {
            if (response.ok) {
                response.json()
                .then(function(data) {
                    city.innerHTML = cityName
                    getWeather(data.coord.lat, data.coord.lon)
                }) 
            }
        })
}

// gather data
    var pullWeather = function(lat,lon){
        var apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
        fetch(apiURL)
        .then(response => {
            response.json()
            .then(function(data) {
                console.log(data)
                temperatureEl.textContent = "Temperature is " + data.current.temp + "degrees Fahrenheit"
                windEl.textContent = "Wind is " + data.current.wind_speed + "MPH"
                humidityEl.textContent = "Humidity is " data.current.uv + "%"
                uvEl.textContent = "UV Index is " + data.current.uv
            })
        })
    }