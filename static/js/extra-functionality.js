const DEFAULT_BG = "/static/media/pointing-at-map.mp4";
const SUNNY_BG = "/static/media/sunny.mp4";
const SNOWY_BG = "/static/media/snowy.mp4";
const CLOUDY_BG = "/static/media/slightly-cloudy.mp4";
const RAINY_BG = "/static/media/rainy.mp4"
let backgroundVideo;
function $(target) {
    return document.querySelector(target);
}
function $$(target) {
    return document.querySelectorAll(target);
}
function createBackgroundVideo() {
    backgroundVideo = document.createElement('video');
    backgroundVideo.src = DEFAULT_BG;
    backgroundVideo.muted = true;
    backgroundVideo.loop = true;
    backgroundVideo.style.opacity = 0.1;
    backgroundVideo.style.position = "fixed";
    backgroundVideo.style.top = "0";
    backgroundVideo.style.left = "0";
    backgroundVideo.style.zIndex = -10;
    backgroundVideo.style.width = "110%";
    backgroundVideo.style.minWidth = "100vh";
    $('body').appendChild(backgroundVideo);
    backgroundVideo.play();
}
function changeBackgroundToCurrentWeather(forecast) {
    let backgroundToUse = DEFAULT_BG;
    if (forecast.includes("clouds")) {
        backgroundToUse = CLOUDY_BG;
    }
    if (forecast.includes("rain")) {
        backgroundToUse = RAINY_BG;
    }
    if (forecast.includes('clear sky')) {
        backgroundToUse = SUNNY_BG;
    }
    if (forecast.includes("snow")) {
        backgroundToUse = SNOWY_BG;
    }
    backgroundVideo.src = backgroundToUse;
    backgroundVideo.play();
}
function listenForForecastContentChanges(changesList, observerObj) {
    console.log('❄️🐾');
    let forecastTextElement = changesList[changesList.length - 1].target;
    let forecast = forecastTextElement.textContent;
    changeBackgroundToCurrentWeather(forecast);
}
createBackgroundVideo();
let forecastDiv = $('.kJagFs');
let forecastObserver = new MutationObserver(listenForForecastContentChanges)
forecastObserver.observe($('p'), { 
    characterData: true, 
    attributes: true, 
    childList: true, 
    subtree: true 
}) 
/*
This is a bit of a shotgun approach of what to listen to via the config parameter,
but considering the small scope, the only change that occurs is the one we want.
If this were developed out more, I would recommend tying the background change in directly
with the portion of code that changes the text content in the first place. -❄️🐾
*/
