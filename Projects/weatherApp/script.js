document.addEventListener("DOMContentLoaded",()=>{
    const cityInput= document.getElementById("city-input");
    const getWeatherBtn= document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay= document.getElementById("city-name");
    const temperatureDisplay=document.getElementById("temperature");
    const descriptionDisplay= document.getElementById("description");
    const errorMessage=document.getElementById("error-message");

    const API_KEY="e38d39e59b2be9e538a0b3f87a26fda8";
    getWeatherBtn.addEventListener("click",async ()=>{
        const city=cityInput.value.trim();

        if(!city) return;

        //it may throw errors 
        //server / database is always in another continent
        try {
            const weatherData=await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            showError();
        }
    });

    async function fetchWeatherData(city){
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

        const response= await fetch(url);
        // console.log(typeof(response));
        // console.log(response);
        if(!response.ok)
        {
            throw new error("City not found");
        }

        const data= await response.json();//converting into json object
        return data;
    }

    function displayWeatherData(data)
    {
        console.log(data);
        const {name , main, weather}=data; //destructing the data
        cityNameDisplay.textContent=`City:${name}`;

        temperatureDisplay.textContent=`Temperatur: ${main.temp}`;

        descriptionDisplay.textContent=`Description: ${weather[0].description}`;

        //unlock the display
        weatherInfo.classList.remove("hidden");
        errorMessage.classList.add("hidden");
    }

    function showError(){
        weatherInfo.classList.add("hidden");
        errorMessage.classList.remove("hidden");
    }

})