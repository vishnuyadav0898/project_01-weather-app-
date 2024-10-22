import API_KEY from './apikey.js';
async function getdata(apikey,city) {
    const url  =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
try {
      let response = await fetch(url);
     let data = await response.json();
     if (data) {
    
        setdata(
        data.name,
        data.main.temp,
        data.main.humidity,
        data.wind.speed,
        );
    }
} catch (error) {
    alert("enter valid city name");
    console.error(error);
 }
}
function setdata(city,temp,humidity,windspeed,icon) {

    document.querySelector(".city").innerHTML = city ;
    document.querySelector(".temp").innerHTML=`${temp}°C`;
    document.querySelector("#humidity").innerHTML =`${humidity}%` ;
    document.querySelector("#windspeed").innerHTML = `${windspeed}Km/h`;
    const weatherimage = document.getElementById('image');
const weathrimgsrc = getweatherimage(temp);
weatherimage.src = weathrimgsrc;
 
function getweatherimage(tempereture) {
    let weatherimagesrc;
    switch (true) {
        case (tempereture <=0 ):
            weatherimagesrc ="./images/ice.png";
            
            break;
            case (tempereture <= 0 ):
                weatherimagesrc ="./images/moisture.png";
                
                break;
                case (tempereture <=15 ):
                    weatherimagesrc ="./images/no rain.png";
                    
                    break;
                    case (tempereture <=30 ):
                        weatherimagesrc ="./images/rain.png";
                        
                        break;
    
        default:
            weatherimagesrc = "./images/clear.gif"
            break;
    }
    return weatherimagesrc;
}
}
     document.querySelector(".icon").addEventListener("click",()=>{
    const city = document.getElementById("inputbox").value;
if (city) {
    getdata(API_KEY,city);
}else {
    alert ("enter city name");
}

});

window.onload = ()=>{
    getdata(API_KEY,"jaipur");
};
