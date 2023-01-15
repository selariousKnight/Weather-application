let apikey = "4b378dda4880bc95edea79cee4f3d7b1"
let cityEle = document.getElementById("city");
let inputEle = document.getElementById("searchInput");
let warningEle = document.getElementById("warning");
let bannerEle = document.getElementById("banner")
let buttonEle = document.getElementById("button")
let tempEle = document.getElementById("temp");
let humidityEle = document.getElementById("humidity");
let speedEle  = document.getElementById("wind");
let descriptionEle  = document.getElementById("description");
let imageEle = document.getElementById("image")

function fetchingData(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`

    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
       displayWeather(data)
        
    })
}

function displayWeather(data){
    const {name} = data;
    const {icon,description} = data.weather[0];
    const {temp,humidity} = data.main;
    const {speed} = data.wind

    cityEle.textContent = `City : ${name}`
    descriptionEle.textContent =`Sky Type : ${description}`
    tempEle.textContent = ` Temperature : ${temp} degree celsius` 
    speedEle.textContent = ` wind speed : ${speed }km/hr`
    humidityEle.textContent = `Humidity : ${humidity}%` 
    imageEle.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
    

}

inputEle.addEventListener("keydown",function(event){
    if(event.key == "Enter"){
        fetchingData(inputEle.value)
    }
})

buttonEle.addEventListener("click",function(){
    if(inputEle.value === ""){
        warningEle.textContent = "Please Enter the city name before Searching"
    }
    else{
        fetchingData(inputEle.value)
    }
})
