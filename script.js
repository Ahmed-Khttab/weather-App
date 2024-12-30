// Function to fetch current weather degree
let temp=0;
/*async function getCurrentWeather(city, apiKey) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const weatherData = await response.json();
        const temperature = weatherData.main.temp;
        //temp = temperature;
        document.querySelector('.city').textContent = city;

        document.querySelector('.temp').textContent = Math.trunc(temperature);


        console.log(`The current temperature in ${city} is ${temperature}°C`);
        return temperature;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}*/


async function getCurrentWeather(city, apiKey) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const weatherData = await response.json();
        const temperature = weatherData.main.temp; // Current temperature
        const weatherStatus = weatherData.weather[0].description; // Weather status (e.g., clouds, rain)

        console.log(`The current temperature in ${city} is ${temperature}°C`);
        console.log(`Weather Status: ${weatherStatus}`);
        document.querySelector('.city').textContent = city;
        document.querySelector('.weather-status').textContent = weatherStatus;
        checkWeatherPhotos(weatherStatus);
        document.querySelector('.temp').textContent = Math.trunc(temperature);
        return { temperature, weatherStatus };
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

let checkWeatherPhotos = function(weatherStatus){
    
    
        if (weatherStatus.includes('clear')) {
            document.querySelector('.img-icon').src = 'img/clear sky.webp';
            //console.log('here');
        } else if (weatherStatus.includes('cloud')) {
            document.querySelector('.img-icon').src = 'img/clouds.webp';
        } else if (weatherStatus.includes('rain')) {
            document.querySelector('.img-icon').src = 'img/weather strong rain.webp';
        } else if (weatherStatus.includes('drizzle')) {
            document.querySelector('.img-icon').src = 'img/drizzle.png';
        } else if (weatherStatus.includes('thunderstorm')) {
            document.querySelector('.img-icon').src = 'img/thunderstorm.png';
        } else if (weatherStatus.includes('snow')) {
            document.querySelector('.img-icon').src = 'img/snow.png';
        } else if (weatherStatus.includes('mist') || weatherStatus.includes('haze') || weatherStatus.includes('fog')) {
            document.querySelector('.img-icon').src = 'img/mist.png';
        } else if (weatherStatus.includes('dust') || weatherStatus.includes('sand') || weatherStatus.includes('smoke')) {
            document.querySelector('.img-icon').src = 'img/dust.webp';
        } else if (weatherStatus.includes('tornado')) {
            document.querySelector('.img-icon').src = 'img/tornado.png';
        } else if (weatherStatus.includes('squall')) {
            document.querySelector('.img-icon').src = 'img/squall.png';
        } else {
            document.querySelector('.img-icon').src = 'img/default.png'; // Default image for unknown conditions
        }
    ;
    
    
}

// Usage Example


/*getCurrentWeather(city, apiKey).then(result => {
    if (result) {
        console.log(`Temperature: ${result.temperature}°C`);
        console.log(`Status: ${result.weatherStatus}`);
    }
});*/



// Usage Example
let city = "London"; 
const apiKey = "e8209baf00704a5a7e2d118c01888b67";
document.querySelector('.btn').addEventListener("click",function(){
    let cityValue = document.querySelector('.input-search').value;
    // console.log(cityValue);
    // console.log('cityValue');
    city = cityValue;
getCurrentWeather(city, apiKey);

document.querySelector('.city').textContent = city;
document.querySelector('.temp').textContent = Math.trunc(temp);



});
//document.querySelector('.city').textContent = city;
// Replace with your city
 // Replace with your OpenWeatherMap API key

getCurrentWeather(city, apiKey);

