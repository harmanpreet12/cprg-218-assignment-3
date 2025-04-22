document.addEventListener('DOMContentLoaded', function() {
    // Fetch weather for Cancun, Mexico
    fetchWeather();
    
    // Update weather every 30 minutes
    setInterval(fetchWeather, 30 * 60 * 1000);
});

async function fetchWeather() {
    try {
        // Fetch weather data for Cancun using your API key
        const response = await fetch(
            "https://api.weatherapi.com/v1/current.json?key=f0d7a4f1e6774d9c85f214220252104&q=Cancun&aqi=no"
        );
        
        if (!response.ok) {
            throw new Error('Weather data not available');
        }
        
        const data = await response.json();
        updateWeatherDisplay(data);
    } 
    catch (error) {
        console.error('Error fetching weather:', error);
        // Fallback to static weather if API call fails
        displayStaticWeather();
    }
}

function updateWeatherDisplay(data) {
    const temp = document.getElementById('temp');
    const weatherIcon = document.getElementById('weather-icon');
    
    // Update temperature
    temp.textContent = `${Math.round(data.current.temp_c)}°C`;
    
    // Update weather icon (WeatherAPI provides icon URLs)
    const iconUrl = `https:${data.current.condition.icon}`;
    weatherIcon.innerHTML = `<img src="${iconUrl}" alt="${data.current.condition.text}">`;
}

function displayStaticWeather() {
    // Fallback function in case API fails
    const temp = document.getElementById('temp');
    const weatherIcon = document.getElementById('weather-icon');
    
    temp.textContent = '28°C'; // Default temperature for Cancun
    weatherIcon.innerHTML = '<i class="fas fa-sun"></i>'; // Generic sunny icon
}