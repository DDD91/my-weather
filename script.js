let date = new Date();
let h2 = document.querySelector("h2");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

let hour = date.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}

let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

h2.innerHTML = `${days[0]} ${hour} : ${minutes}`;

function displayWeatherCondition(response) {
  console.log(response.data.name);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(city) {
  let apiKey = "c719a2f88c471ef6e9dcae6126323c39";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function citySearch(event) {
  debugger;
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}

let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", citySearch);

search("New York");

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperature = Number(temperature);
  temperatureElement.innerHTML = 54;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 12;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

function showTemperature(response) {
  console.log(response.data.main.temp);
  let currentTemperature = response.data.main.temp;
}

function showPosition(position) {
  console.log(position);
  let latitude = position.coords.latitude;
  let longitude = position.coords.latitude;
}

function getCurrentPosition(event) {
  event.preventDefault();
  let apiKey = "c719a2f88c471ef6e9dcae6126323c39";
  let latitude = position.coords.latitude;
  let longitude = position.coords.latitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayWeatherCondition);

  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentPosition);
