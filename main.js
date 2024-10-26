let form = document.querySelector("form");
let input = document.querySelector("input");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let p = document.querySelector("p");
let img = document.querySelector("img");
let card = document.getElementById("w-card");

const fetchWeather = async (e) => {
  e.preventDefault();

  try {
    const response =
      await fetch(`https://api.weatherapi.com/v1/current.json?key=84a29b36eebd4c689ea104248240710&q=${input.value}&aqi=yes
`);
    const data = await response.json();
    card.className = "card my-3 p-4 shadow";
    h1.innerText = data.current.temp_c + "°C";
    h2.innerText = data.location.name;
    img.setAttribute("src", data.current.condition.icon);
    p.innerText = data.current.condition.text;
  } catch (error) {
    window.alert("Please Enter Valid City Name");
  }

  form.reset();
};

form.addEventListener("submit", fetchWeather);
