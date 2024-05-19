let seconds = 0;
let minutes = 0;
let hours = 0;
const displayTime = document.getElementById('displayTime');
let timer = null;

function stopWatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    const h = hours < 10 ? '0' + hours : hours;
    const m = minutes < 10 ? '0' + minutes : minutes;
    const s = seconds < 10 ? '0' + seconds : seconds;

    displayTime.innerHTML = h + ':' + m + ':' + s;
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
}

function watchStop() {
    clearInterval(timer);
}

function watchReset() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime.innerHTML = '00:00:00';
}
