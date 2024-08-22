const apiKey = "22d6ad30db6626f76847d71c896846cf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search-button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    
    console.log(data);

    if (data.cod === 200) {
        document.querySelector("#location").innerHTML = data.name;
        document.querySelector("#temperature").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
        document.querySelector("#wind-speed").innerHTML = data.wind.speed + " km/h";
    } else {
        alert("City not found! Please enter a valid city name.");
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
