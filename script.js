const apiKey = "YOUR_API_KEY";  // Your weatherAPI Api key goes here
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const latitudeInput = document.getElementById("latitude");
const longitudeInput = document.getElementById("longitude");
const searchCoordinatesBtn = document.getElementById("searchCoordinates");

async function checkWeather(query){
    let response;
    if (typeof query === "string"){
        response = await fetch(apiUrl + "q=" + query + `&appid=${apiKey}`);
    } else{
        const { lat, lon } = query;
        response = await fetch(apiUrl + `lat=${lat}&lon=${lon}&appid=${apiKey}`);
    }
    if (response.status === 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else{
        const data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

        const sunriseTime = new Date(data.sys.sunrise * 1000);
        const sunsetTime = new Date(data.sys.sunset * 1000);
        
        const formatTime = (date) => {
            let hours = date.getHours();
            let minutes = date.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            return hours + ':' + minutes + ' ' + ampm;
        };
        
        document.querySelector(".sunrise").innerHTML = formatTime(sunriseTime);
        document.querySelector(".sunset").innerHTML = formatTime(sunsetTime);

        if (data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
            document.querySelector(".container").style.background = "linear-gradient(135deg, #f1f6f5, #79787d)";
        } else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
            document.querySelector(".container").style.background = "linear-gradient(135deg, #259eb0, #d49f56)";
        } else if (data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
            document.querySelector(".container").style.background = "linear-gradient(135deg, #4092d0, #89898c)";
        } else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
            document.querySelector(".container").style.background = "linear-gradient(135deg, #f1f6f5, #79787d)";
        } else if (data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
            document.querySelector(".container").style.background = "linear-gradient(135deg, #dcdad8, #d9dddd)";
        } else if (data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
            document.querySelector(".container").style.background = "linear-gradient(135deg, #ffffff, #cdcdcd)";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchCoordinatesBtn.addEventListener("click", () => {
    const lat = latitudeInput.value;
    const lon = longitudeInput.value;
    if (lat && lon) {
        checkWeather({ lat, lon });
    }
});