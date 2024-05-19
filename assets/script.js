// My own generated api key from open weather as a var
var openWeatherApiKey = '66b9140d23d30eb9c1aeb04a2ebbb643';

// These are the cities that i will use to see the weather
var cityList = ['El Paso', 'Dallas', 'Jacksonville'];

// stores the cities in local storage if user has used the site before
var cityListStored = JSON.parse(localStorage.getItem('cityListStored'));

// If the stored city list has data then cityList is = to stored
if (cityListStored !== null){
    cityList = cityListStored;
}

// allows user's inputs to assign the city as the 1st array on the list
var cities = cityList[0];

// Fills the city llist with data
function cityListIntoCityList(){
    //deltes html elm inside of citylist and fills with data in a loop
    $("#city").empty();
    //creates a new list item in the citylist
    for (i = 0; i < cityList.length; i++) {
        var newCity = $("<li></li>");
        newCity.text(cityList[i]);
        newCity.addClass("list-group-item list-group-item-action cityItem");
        $("cityList").append(newCity);
    }
}

// Fetches the OpenWeatherapi
function fetchDisplayWeatherApi() {
    fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        openWeatherAPI +
        "&units=imperial"
      // Creates a JSON file of the data.
    ).then(function (response) {
        // if city entered doesnt exist it will alert to remove city form array and wont get stop perpetually
        if (response.status != 200){
            alert("The city inputed does not exist in our database. Enter another city!");
            cityList.shift();
            localStorage.setItem("cityListStored", JSON.stringify(cityArray));
            window.location.reload();
        }
    }
    )
}
//retuens responses
return (
    response.json()//fills in html elm with data form json file
    .then(function(data){
        $("#currentCity").text(data.name);
        var currentTempRounded = Math.round(data.main.temp);
        $("#currentTemp").text(currentTempRounded + "°F");
        var currentWindRounded = Math.round(data.wind.speed);
        $("#currentWind").text(currentWindRounded + "MPH");
        $("#currentHumidity").text(data.main.humidity + "%");
    })
);

// Fetches the Open Weather Forecast API.
function fetchDisplayForecast() {
    fetch(
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&appid=" +
        openWeatherAPI +
        "&units=imperial"
    )
      // Creates a JSON file of the data.
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (var i = 1; i < 6; i++) {
            var date = new Date(data.list[(i - 1) * 8 + 4].dt_txt),
            month = date.getMonth() + 1,
            day = date.getDate(),
            dayDate = month + "/" + day;
            $("day" + i + "Date").text(dayDate);
            //hopfully changes emojis based on weather
            if (data.list[(i - 1) * 8 + 4].weather[0].main === "Clouds") {
                $("#day" + i + "Date").append(" ☁️");
            }
              if (data.list[(i - 1) * 8 + 4].weather[0].main === "Clear") {
                $("#day" + i + "Date").append(" ☀️");
            }
              if (data.list[(i - 1) * 8 + 4].weather[0].main === "Rain") {
                $("#day" + i + "Date").append(" 🌧️");
            }
              if (data.list[(i - 1) * 8 + 4].weather[0].main === "Snow") {
                $("#day" + i + "Date").append(" ❄️");
            }
              // Rounds the temperature and wind speed to the nearest whole number and adds proper unit symobls.
              var TempRounded = Math.round(data.list[(i - 1) * 8 + 4].main.temp);
            $("#day" + i + "Temp").text(TempRounded + "°F");
              var WindRounded = Math.round(data.list[(i - 1) * 8 + 4].wind.speed);
            $("#day" + i + "Wind").text(WindRounded + " MPH");
            $("#day" + i + "Humidity").text(
                data.list[(i - 1) * 8 + 4].main.humidity + "%"
            );
        }
    });
    }

    