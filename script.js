const apiKey = "0ffc9ae70a405aabcc427a22bad2df24";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
async function checkweather(city)
{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}` );
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    if (data.weather[0].main == "Clouds") {
        weathericon.src = "images/clouds.png";
    }
     else if (data.weather[0].main == "Clear") {
        weathericon.src = "images/clear.png";
    } 
    else if (data.weather[0].main == "Rain") {
        weathericon.src = "images/rain.png";
    } 
    else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "images/drizzle.png";
    } 
    else if (data.weather[0].main == "Mist") {
        weathericon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
}
checkweather(searchbox.value);

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})