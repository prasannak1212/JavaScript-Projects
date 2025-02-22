function digitalClock(){
    let time = new Date();
    let day = time.getDay();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let sec = time.getSeconds();
    let mer = "AM";

    let clk = document.querySelector(".clock");

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    sec = sec < 10 ? "0" + sec: sec;

    if (hour < 12) {
        mer = "AM";
    } else {
        mer = "PM";
    }

    clk.innerHTML = hour + " : " + minute + " : " + sec + " " + mer;
}

setInterval(digitalClock, 1000);