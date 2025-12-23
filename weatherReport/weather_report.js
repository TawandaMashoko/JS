function showWeatherDetails(event) {
  event.preventDefault();

  const city = document.getElementById("city").value.trim();
  const apiKey = "ff8def4057c8703d7bce35e95d6188d3";

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  fetch(apiURL)
    .then((r) => r.json())
    .then((data) => {
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    })
    .catch((err) => {
      console.error(err);
      document.getElementById("weatherInfo").innerHTML =
        "<p>Failed to fetch weather. Please try again.</p>";
    });
}

document.getElementById("weatherForm").addEventListener("submit", showWeatherDetails);
