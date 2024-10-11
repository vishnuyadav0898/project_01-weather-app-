const API_KEY ="9efc3e1b6e8542848ac52304241110";
const city = "jaipur";
async function getdata(apikey,city) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

try {
      let response = await fetch(url);
     let data = await response.json();
     if (data) {
    
        setdata(
        data.location.name,
        data.current.temp_c,
        data.current.humidity,
        data.current.wind_kph,
        );
    }
} catch (error) {
    alert("enter valid city namer");
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
            weatherimagesrc ="ice.png";
            
            break;
            case (tempereture <= 0 ):
                weatherimagesrc ="moisture.png";
                
                break;
                case (tempereture <=15 ):
                    weatherimagesrc ="no rain.png";
                    
                    break;
                    case (tempereture <=30 ):
                        weatherimagesrc ="rain.png";
                        
                        break;
    
        default:
            weatherimagesrc = "clear.gif"
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

