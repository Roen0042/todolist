const weather = document.querySelector(".weather__info span:first-child");
const city = document.querySelector(".weather__info span:nth-child(2)");
const icon = document.querySelector(".weather__icon");

const API_KEY = "8945ab804f05edba0b987e4852c1a000";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((respose) =>
        respose.json().then((data) => {
            weather.innerHTML = `${data.weather[0].main} ${data.main.temp}° `;
            city.innerHTML = `${data.name}, ${data.sys.country}`;
            const weatherIcon = data.weather[0].icon;
            const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            icon.setAttribute('src', weatherIconAdrs);
        })
    );
}
function onGeoError() {
    alert("현재 위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
