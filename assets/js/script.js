const API_KEY = "de0d75ceee768bc79a63e37a19a280d3"

const searchBtn = document.getElementById('search_button');
const userInput = document.getElementById('user_input');
const cityMain = document.getElementById('city_main');
const cityForecast = document.getElementById('city_forecast');
const citySearchHistoryList = document.getElementById('city_search_history_list');


// const cityName = JSON.parse(localStorage.getItem('requestedCity'));

// let citySearchHistory = JSON.parse(localStorage.getItem('city_search_history_list')) || []

function loadPage() {
    cityForecast.style.display="none";
}

window.onload = loadPage()

// when search button clicked:
searchBtn.addEventListener('click', function(event) {
    event.preventDefault();

const clear = function(element){
        element.innerHTML = "";
    }

clear(cityMain);
cityForecast.style.display="flex";

let cityAskedFor = userInput.value;

//localStorage.setItem("requestedCity", JSON.stringify(cityAskedFor));
callRequestedCity(cityAskedFor);
storeHistory(cityAskedFor);
renderLastCity();

})


function storeHistory(cityReq){
    localStorage.setItem("requestedCity", JSON.stringify(cityReq));


    /*for (let i = 0; i < localStorage.length; i++) {
        citySearchHistoryList.innerHTML=
    } */

   
    /* var currentCityText = userInput.value.trim();

    if (currentCityText ==="") {
        return;
    }

    currentCity.push(currentCityText);
    userInput.value = "";

    storeHistory();
    renderHistory();*/
}
function renderLastCity() {
    let lastCity = JSON.parse(localStorage.getItem("requestedCity"));
    citySearchHistoryList.textContent = lastCity;
}    


/*function displayHistory(cityAskedFor){
    localStorage.setItem('requestedCity', cityAskedFor);
    //let citySearchHistory = JSON.parse(localStorage.getItem("requestedCity"));
    //citySearchHistoryList.innerHTML = cityAskedFor;
}
*/
function callRequestedCity(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + API_KEY + '&units=imperial')
    .then((response) => response.json())
    .then(data => {
        console.log(data);

        const cityMainInfoList = document.createElement('div');

        cityMain.appendChild(cityMainInfoList);

        console.log ("weather info...", data.main);

        //const date = new Date ();
        const now = dayjs().format('ddd, MMMM D, YYYY');

        cityMainInfoList.innerHTML = "<p><h1>" + now + "</h1></p>" +
                                    "<p><h2>" + data.name + "</h2></p>" +
                                    "<img src= https://openweathermap.org/img/w/" + data.weather[0].icon + ".png>" +
                                    "<p>Temperature: " + data.main.temp + " F/</p>" +
                                    "<p>Humidity: " + data.main.humidity + "% </p>" +
                                    "<p>Wind Speed: " + data.wind.speed + " MPH </p>";
        
        
        const lat = data.coord.lat;
        const lon = data.coord.lon;
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + API_KEY + '&units=imperial')
        .then((response) => response.json())
        .then(fiveData => {
            console.log("five...", fiveData);

        const dayOne = dayjs(fiveData.list[0].dt_txt).format('ddd, MMMM D');
        const dayTwo = dayjs(fiveData.list[10].dt_txt).format('ddd, MMMM D');
        const dayThree = dayjs(fiveData.list[18].dt_txt).format('ddd, MMMM D');
        const dayFour = dayjs(fiveData.list[26].dt_txt).format('ddd, MMMM D');
        const dayFive = dayjs(fiveData.list[32].dt_txt).format('ddd, MMMM D');
        //const dayOneDate = document.querySelector('.day_one_date');

        const forecastDayOne = document.getElementById('forecast_day1');
        const forecastDayTwo = document.getElementById('forecast_day2');
        const forecastDayThree = document.getElementById('forecast_day3');
        const forecastDayFour = document.getElementById('forecast_day4');
        const forecastDayFive = document.getElementById('forecast_day5');

        forecastDayOne.innerHTML = "<p>" + dayOne + "</p>" +
                                    "<img src= https://openweathermap.org/img/w/" + fiveData.list[0].weather[0].icon + ".png>" +
                                    "<p>Temp: " + fiveData.list[0].main.temp + " F </p>" +
                                    "<p>Humidity: " + fiveData.list[0].main.humidity + "% </p>";
        
        forecastDayTwo.innerHTML = "<p>" + dayTwo + "</p>" +
                                    "<img src= https://openweathermap.org/img/w/" + fiveData.list[10].weather[0].icon + ".png>" +
                                    "<p>Temp: " + fiveData.list[10].main.temp + " F </p>" +
                                    "<p>Humidity: " + fiveData.list[10].main.humidity + "% </p>";

        forecastDayThree.innerHTML = "<p>" + dayThree + "</p>" +
                                    "<img src= https://openweathermap.org/img/w/" + fiveData.list[18].weather[0].icon + ".png>" +
                                    "<p>Temp: " + fiveData.list[18].main.temp + " F </p>" +
                                    "<p>Humidity: " + fiveData.list[18].main.humidity + "% </p>";

        forecastDayFour.innerHTML = "<p>" + dayFour + "</p>" +
                                    "<img src= https://openweathermap.org/img/w/" + fiveData.list[26].weather[0].icon + ".png>" +
                                    "<p>Temp: " + fiveData.list[26].main.temp + " F </p>" +
                                    "<p>Humidity: " + fiveData.list[26].main.humidity + "% </p>";
      
        forecastDayFive.innerHTML = "<p>" + dayFive + "</p>" +
                                    "<img src= https://openweathermap.org/img/w/" + fiveData.list[32].weather[0].icon + ".png>" +
                                    "<p>Temp: " + fiveData.list[32].main.temp + " F </p>" +
                                    "<p>Humidity: " + fiveData.list[32].main.humidity + "% </p>";
       // dayOneDate.textContent = dayOne;


       
        
        })


    })

    


}




 /* const dayOneI = "https://openweathermap.org/img/w/" + fiveData.list[0].weather[0].icon + ".png";
        
        const dayOneIcon = document.querySelector('.day_one_icon')
        //const dayOneTemp =
        //const dayOneHumidity=
        */

/* function fiveDayForecast(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + API_KEY + '&units=imperial')
    .then((response) => response.json())
    .then(fiveData => {
        console.log("five day...",fiveData);



    })
}
   */
    // cityMainInfo.textContent = city;


/*function storeCityData() {
    localStorage.setItem("city", cityAskedFor);
}*/

/*function displayRequestedCity(data){
    const city = data.main [0];
    const cityMainInfo = document.createElement("ul");

    cityMain.appendChild(cityMainInfo);
    cityMainInfo.textContent = city;
}

const lat = data.coord.lat;
        const lon = data.coord.lon;
        const uvIndexURL = "https://api.openweathermap.org/data/3.0/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + API_KEY;

        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + API_KEY + '&units=imperial')
        .then((response) => response.json())
        .then(uvData => {
            console.log ("response..", uvData);

        }
        
        
        )

        // const city = data.name;
        // const cityMainHeader = document.createElement("h2");
    
        // cityMain.appendChild(cityMainHeader);
        // cityMainHeader.innerHTML = city;
        
        // const cityInfo = data.main;
        

        // const weatherInfoMain = JSON.parse(JSON.stringify(cityInfo));

        

        // cityMainInfo.innerHTML = JSON.stringify(cityInfo);// in the OpenWeatherAPI - the 'main' property is an object, not an array.
        //display the object 'main' using JSON.stringify to convert it to a string and display it inside the <ul> element.
        
        
        // console.log (weatherInfoMain);
        
        // cityMainInfo.innerHTML = weatherInfoMain;
        */
