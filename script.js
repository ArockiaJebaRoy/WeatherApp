// bc79b0576a6ce03170a8ad6be4ac5fcd  (api key)
// https://api.openweathermap.org/data/2.5/weather?q=trichy&appid=bc79b0576a6ce03170a8ad6be4ac5fcd&units=metric (api)

const apiKey= "bc79b0576a6ce03170a8ad6be4ac5fcd";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 

// This is to show the temperature of the city we search
const searchBox= document.querySelector(".search input");
// When we click this it show the city temperature
const searchBtn= document.querySelector(".search button");

const weatherIcon= document.querySelector(".weather-icon");

const errorMessage= document.querySelector(".error")

const weatherTemperature= document.querySelector(".weather")

async function checkWeather(city){
  const response = await fetch(apiUrl + city+ `&appid=${apiKey}`);

  if(response.status === 404){
    // If any error in city name it will show this
    errorMessage.style.display="block";
    weatherTemperature.style.display="none";
  } 
  else{
    var data= await response.json();
  
  
    // City name that need to be displayed in app. data.name= the data that been fetched
    document.querySelector(".city").innerHTML= data.name;
    // main.temp because the temp is inside main
    // Math.round = to show only in integer not in point
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)  + "°c" ;
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + " km/hr";
  
    if(data.weather[0].main === "Clouds"){
      weatherIcon.src="images/clouds.png";
    } 
    else if(data.weather[0].main === "Clear"){
      weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main === "Rain"){
      weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main === "Drizzle"){
      weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main === "Mist"){
      weatherIcon.src="images/mist.png";
    }
    document.querySelector(".weather").style.display= "block";
    document.querySelector(".error").style.display="none";
  
  
  }
 }
  

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value); //searchBox.value gives city name
  searchBox.value=""
})


