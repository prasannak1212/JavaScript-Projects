
async function weatherForecast(city) {
    const APIKEY = "37cfe16296b303f9ba84cca25fdc7246";
    const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;

    const response = await fetch(APIURL);
    const data = await response.json();

    let weather = document.querySelector(".weather")
    let extra = document.querySelector(".extra-info")
    let searchField = document.querySelector(".search-field");
    let error = document.querySelector(".err");

    if (response.status == "404") {
        weather.style.display = 'none';
        extra.style.display = 'none';
        error.style.display = 'block';
    } else {
        console.log(data);

        let weatherIcon = document.querySelector(".weather-icon");
        let temperature = document.querySelector(".temp");
        let place = document.querySelector(".city");
        let humidity = document.querySelector(".humidity");
        let wind = document.querySelector(".wind");
    
        place.innerHTML = data.name;
        temperature.innerHTML = Math.round(data.main.temp) + `&deg;C`;
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " Kmph";

        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "image/Cloud.png";
        } else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "image/Clear.png";
        } else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "image/Drizzling.png";
        } else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "image/Mist.png";
        } else if(data.weather[0].main == "Rain") {
            weatherIcon = "image/Rain.png";
        } else if(data.weather[0].main == "Snow") {
            weatherIcon.src = "image/Snow.png";
        }

        error.style.display = 'none';
        weather.style.display = '';
        extra.style.display = '';
    }

}

let searchButton =  document.querySelector(".search-icon");
let location = document.querySelector(".search");

searchButton.addEventListener('click', () => {
    weatherForecast(location.value);
});