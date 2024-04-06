const clockTitle = document.querySelector("#greeting .time");

function todayTime(){
    const today = new Date();

    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = week[today.getDay()];

    const hour = pad(today.getHours(), 2);
    const min = pad(today.getMinutes(), 2);
    const sec = pad(today.getSeconds(), 2);
    
    clockTitle.innerHTML = `<span>${hour}:${min}:${sec}</span> ${day}`;
}

function pad(number, length){
    let str = '' + number;
    while (str.length <  length){
        str = '0' + str;
    }
    return str;
}

todayTime();
setInterval(todayTime, 1000);