const API_KEY = "de0d75ceee768bc79a63e37a19a280d3"

const searchBtn = document.getElementById('search_button');
const userInput = document.getElementById('user_input');
const cityMain = document.getElementById('city_main');
const cityForecast = document.getElementById('city_forecast');
const citySearchHistoryList = document.getElementById('city_search_history_list');

// let citySearchHistory = JSON.parse(localStorage.getItem('city_search_history_list')) || []

searchBtn.addEventListener('click', function(event) {
    event.preventDefault();

let cityAskedFor = userInput.value

localStorage.setItem("requestedCity", JSON.stringify(cityAskedFor));
callRequestedCity(cityAskedFor)

})

function displayHistory(){
    let citySearchHistory = JSON.parse(localStorage.getItem("requestedCity"));
    citySearchHistoryList.innerHTML = cityAskedFor;
}

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


            
        })


    })

    


}

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
