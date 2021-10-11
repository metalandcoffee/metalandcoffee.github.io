function $(target){ 
    return document.querySelector(target);
}
function $$(target){ 
    return document.querySelectorAll(target);
}
function identifyWeatherFromForecastString(forecast){ 

}
function changeBackgroundToCurrentWeather(weather){ 
    if (weather == "clouds"){}
    if (weather == "rain"){}
    if (weather == "sun"){}
    if (weather == "snow"){}
}
function listenForForecastContentChanges(changesList, observerObj){ 
    let forecastTextElement = changesList[changesList.length-1].target;
    let forecast = forecastTextElement.textContent;

}
let forecastDiv = $('.kJagFs');
let forecastObserver = new MutationObserver(listenForForecastContentChanges)
forecastObserver.observe(forecastDiv,{attributes: true, childList: true, subtree: true})


/*
$('.kJagFs').addEventListener('', event=>{ 
    console.log(event);
    console.log($('.kJagFs').textContent)
}) 
*/

