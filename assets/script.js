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