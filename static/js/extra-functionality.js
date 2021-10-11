function $(target){ 
    return document.querySelector(target);
}
function $$(target){ 
    return document.querySelectorAll(target);
}
function identifyWeatherFromForecastString(forecast){ 
    let weather = "";
    if (forecast.includes('clouds')){ 

    }
    if (forecast.includes('clear sky')){ 
        weather = "sun";
    }

}
function changeBackgroundToCurrentWeather(weather){ 
    let backgroundToUse = "";
    if (weather == "clouds"){
        backgroundToUse = "";
    }
    if (weather == "rain"){
        backgroundToUse = "";
    }
    if (weather == "sun"){
        backgroundToUse = "";
    }
    if (weather == "snow"){
        backgroundToUse = "";
    }
}
function listenForForecastContentChanges(changesList, observerObj){ 
    let forecastTextElement = changesList[changesList.length-1].target;
    let forecast = forecastTextElement.textContent;
    let weather = identifyWeatherFromForecastString(forecast);
    changeBackgroundToCurrentWeather(weather); 
}
let forecastDiv = $('.kJagFs');
let forecastObserver = new MutationObserver(listenForForecastContentChanges)
forecastObserver.observe(forecastDiv,{attributes: true, childList: true, subtree: true})
let video = document.createElement('video');
video.src = "/static/media/Sunny.mp4";
video.muted = true;
video.loop = true;
video.style.opacity = 0.2;
video.style.position = "fixed";
video.style.top = "0";
video.style.left = "0";
video.style.zIndex = -10;
video.style.height = "100%";
video.style.minHeight = "100vh";
$('body').appendChild(video);
video.play();
//$('body').style.background = "purple url('/static/media/clouds.png')"

/*
$('.kJagFs').addEventListener('', event=>{ 
    console.log(event);
    console.log($('.kJagFs').textContent)
}) 
*/

