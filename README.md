# CountDown-Timer
Christmas Countdown 2021

function formatTime(time){
    return time <10 ? `0${time}` : time; //set hours, mins, seconds into 2 digits by adding 0 next to it if its < 10
}
Adding 0 on the left side of hours, mins and seconds if each of them <10
