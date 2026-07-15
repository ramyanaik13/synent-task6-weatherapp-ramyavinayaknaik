// Fetch weather data from API and display results
async function getWeather() {

    const city = document.getElementById("city").value.trim();
    const loading = document.getElementById("loading");
    const weather = document.getElementById("weather");
    weather.innerHTML = "";

    if (city === "") {
        weather.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }
    loading.innerHTML = "Loading...";
    const apiKey = "d0c42c9bcba59ef82e89b4415e834539";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Invalid city name or API error.");
        }
        const data = await response.json();
        loading.innerHTML = "";
        weather.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>🌤 Weather: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {

        loading.innerHTML = "";
        weather.innerHTML = `<p style="color:red;">${error.message}</p>`;

    }

}