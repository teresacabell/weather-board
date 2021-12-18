var searchButtonEl = document.querySelector("#submit-button");
var searchCityEl = document.querySelector("#searched-city");
var currentCityEl = document.querySelector("#current-city");
var citySearchFormEl = document.querySelector("#city-form");
var currentWeather = document.querySelector("#current-container");
var futureForecast = document.querySelector("#future-forecast");

// api key
var apiKey = "d5d5a1652a4570f6a0810fd859cf2fbd"

// prevent it from deleting
var formSubmitHandler = function(event) {
    event.preventDefault();

    // get city from search
    var city = searchCityEl.value.trim();
    console.log(city)
        if (city) {
           showCity(city);
            currentCityEl.textContent = "";
            searchCityEl.value = "";
        } else {
            alert("Please enter a city name!")
    }
};
searchButtonEl.addEventListener("click", formSubmitHandler);

// gather data & append to page
    var pullForecast = function(lat,lon,city){
        var apiLatLonURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
        fetch(apiLatLonURL)
        .then(response => {
            if(response.ok) {
                response.json()
                .then(function(data){
                    console.log(data);

                    // current day forecast 
                    var todayDate = new Date(data.current.dt*1000).toLocaleDateString()
                    var todayIcon = data.current.weather[0].icon
                    var todayTemp = data.current.temp;
                    var todayHum = data.current.humidity;
                    var todayWind = data.current.wind_speed;
                    var todayUV = data.current.uvi;

                    var dateEl = document.createElement("h4");
                    var iconEl = document.createElement("img")
                    var degEl = document.createElement("h5");
                    var humEl = document.createElement("h5");
                    var windEl = document.createElement("h5")
                    var uvEl = document.createElement("h5")

                    dateEl.innerHTML = todayDate + " in " + city;
                    iconEl.setAttribute("src","http://openweathermap.org/img/wn/" + todayIcon + ".png");
                    degEl.innerHTML = "Temperature is " + todayTemp + " deg F";
                    humEl.innerHTML = "Humidity is " + todayHum + "%";
                    windEl.innerHTML = "Wind is " + todayWind + " mph";
                    uvEl.innerHTML = "UV Index is " + todayUV;

                    currentWeather.append(dateEl);
                    currentWeather.append(iconEl);
                    currentWeather.append(degEl);
                    currentWeather.append(humEl);
                    currentWeather.append(windEl);
                    currentWeather.append(uvEl);

                    // five day forecast
                    for (var i = 0, i < 5, i++) {
                        var fiveDate = new Date(data.daily[i].dt*1000);
                        var fiveImg = data.daily[i].weather[0].icon;
                        var fiveTemp = data.daily[i].temp.day;
                        var fiveHum = data.daily[i].humidity;
                        var fiveWind = data.daily[i].wind_speed;
                        var fiveUV = data.daily[i].uvi;
                        console.log(fiveUV)

                        var fiveDate = document.createElement("h4")
                        var 
                    }


                })
            }
        })
    };
// pullForecast();
   
// get lat and lon 
var showCity = function(city) {
        var apiCityURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
        
        fetch(apiCityURL)
        .then(function(response){
            if (response.ok){
                response.json()
                .then(function(data){
                    var lat = data.coord.lat;
                    var lon = data.coord.lon;
                    pullForecast(lat,lon,city);
                })
            } else {
                alert("Error", response.statusText)
            }
        })
    }
