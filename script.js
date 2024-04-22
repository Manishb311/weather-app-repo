const apiKey = "0a0fb8741cf680531fe69c2ce69cdb8c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input"); 
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

 async function checkWeather(city){
    const response = await fetch(apiUrl + city  + `&appid=${apiKey}`)
    var data = await response.json();
    
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°c";
    document.querySelector(".wind").innerText = data.wind.speed + "km/h";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
searchBox.addEventListener("keydown", (e) =>{
    if(e.key == "Enter"){
        console.log(e);
        checkWeather(searchBox.value);
    }
});
