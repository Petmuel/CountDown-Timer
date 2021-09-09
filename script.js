const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const christmas = '25 December 2021';

function countdown(){
    const christmasDate = new Date(christmas);
    const currentDate = new Date();
 
    const timeDiff = (christmasDate - currentDate) / 1000; //the entire seconds to from current day to christmas
    const days = Math.floor(timeDiff / 3600 / 24); //seconds/3600 = hours, then /24 to get days
    const hours = Math.floor(timeDiff /3600) % 24; //only show hours per day, don't show all hours to reach christmas day (it would be thousands) 
    const mins = Math.floor(((timeDiff / 3600) % 24) * 60) %60; //hours*60 = all mins, then mod 60 to get mins per hour
    const secs = Math.floor(((((timeDiff / 3600) % 24) * 60) %60)*60)%60;
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(secs);
}

function formatTime(time){
    return time <10 ? `0${time}` : time; //set hours, mins, seconds into 2 digits by adding 0 next to it if its < 10
}


//initial call
countdown();

setInterval(countdown, 1000);


