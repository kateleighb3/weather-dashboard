const API_KEY = "de0d75ceee768bc79a63e37a19a280d3"

const searchBtn = document.getElementById('search_button');
const userInput = document.getElementById('user_input');
const cityMain = document.getElementById('city_main');
const cityForecast = document.getElementById('city_forecast');
const citySearchHistoryList = document.getElementById('city_search_history_list');

let citySearchHistory = JSON.parse(localStorage.getItem('city_search_history_list')) || []

searchBtn.addEventListener('click', function() {

let cityAskedFor = userInput.value
callRequestedCity(cityAskedFor)


})

function callRequestedCity(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + API_KEY + '&units=imperial')
    .then((response) => response.json())
    .then(data => {
        console.log(data)
    })

}

function displayRequestedCity(data){
    // const city = data.;
    // const cityMain = document.getElementById
}