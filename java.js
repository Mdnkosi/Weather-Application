function trueWeather(response) {
  let temperatureElement = document.querySelector(".current-temperature-value");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector(".current-city");
  cityElement.innerHTML = response.data.city;
}

function changeHeading(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector(".search-input");
  let city = searchInputElement.value;

  let apiKey = "t0dbadd020obaf40a394084940d3fadf";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(trueWeather);
}

let form = document.querySelector(".search-form");
form.addEventListener("submit", changeHeading);

let now = new Date();
let hour = now.getHours().toString().padStart(2, 0);
let minutes = now.getMinutes().toString().padStart(2, 0);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${day}  ${hour}:${minutes}`;
