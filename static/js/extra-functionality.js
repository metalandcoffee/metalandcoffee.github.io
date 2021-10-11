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
//$('body').style.background = "purple url('/static/media/clouds.png')"

/*
$('.kJagFs').addEventListener('', event=>{ 
    console.log(event);
    console.log($('.kJagFs').textContent)
}) 
*/

