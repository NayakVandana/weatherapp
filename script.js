// https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=ef2fe699961bf47a150e6ac8e71810d6
//website : open weather API
//my API :: 21d1773f11f7c6420ce70528c3dff888 

let inpVal = document.getElementById("input");
let city = document.getElementById("city");
let temp = document.getElementById("temp");
let img = document.getElementById("img");
let desc = document.getElementById("desc");
let wind = document.getElementById("wind");
let search = document.getElementById("search");

let weather = {
    apikey : "ae1f0e165d6e4d64ba6b0d9dcb10ee05",
    fetchWeather : function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city  
            + "&units=metric&appid=" 
            + this.apikey
        ).then((res)=> res.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather : function(data)
    {
        let weathername = data.name;
        let  weathertemp = data.main.temp;
        let  weatherwind = data.wind.speed;
        let  weatherdesc = data.weather[0].main;

        city.innerText = `Weather In ${weathername}`;
        temp.innerText = `${weathertemp}°C`;
        desc.innerHTML = `${weatherdesc}`;
        wind.innerHTML = `Wind Speed in ${weathername} : ${weatherwind}`;

    }
};

search.addEventListener("click",function(event)
{
        weather.fetchWeather(inpVal.value);
   
})
