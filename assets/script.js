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