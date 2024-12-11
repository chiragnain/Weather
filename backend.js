const apikey="8ecbec4b6bc6ee30cbd7ffb7e7c20a76"


const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")

async function checkweather(city){
    const apiurl="https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric";
    const response=await fetch(apiurl+"&appid="+apikey)
    var data=await response.json()
    console.log(data)

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp;
    document.querySelector(".humidity").innerHTML=data.main.humidity;
    document.querySelector(".wind").innerHTML=data.wind.speed;
    const weatherico=document.querySelector(".weather-icon")

    if(data.weather[0].main=="Clouds"){
        weatherico.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherico.src="images/clear.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherico.src="images/rain.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherico.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherico.src="images/mist.png"
    }

}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value)
})

checkweather("germany")