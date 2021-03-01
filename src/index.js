import './styles.css';
const refs = {
    valueDays: document.querySelector('span[data-value="valuedays"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    minutes: document.querySelector('span[data-value="mins"]'),
    seconds: document.querySelector('span[data-value="secs"]'),
};
updateClockFace(0);
let timerId = null;

function updateClockFace(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.valueDays.innerHTML = `${days}`;
    refs.hours.innerHTML = `${hours}`;
    refs.minutes.innerHTML = `${minutes}`;
    refs.seconds.innerHTML = `${seconds}`;
}
function pad(value) {
    return String(value).padStart(2, '0');
}

function getCountDowntimer() {
    const currentDate = Date.now();
    const deltaTime = targetDate - currentDate;
    if (deltaTime <= 0) {
        clearInterval(timerId);
        return;
    }
    updateClockFace(deltaTime);
}
const targetDate = new Date('Jul 17, 2021').getTime();
timerId = setInterval(getCountDowntimer, 1000);







// class CountdownTimer {
//     constructor({ selector, targetDate = new Data('Jul 15, 2021')} = {}) {
//         this.selector = document.querySelector(selector);
//         this.targetDate = targetDate.getTime();
//         this.idTimer = null;
//     }
//     setCounter() {
//         this.currentDate = Date.now();
//         console.log(this.targetDate);
//         const time = this.targetDate - this.currentDate;
//         if(time<=0) {
//         clearInterval(idTimer);
//         }
//         updateClockFace(time);
//     }
//     setTimer() {
//     idTimer = setInterval(this.setCounter, 1000);
//     }
    // updateClockFace(time) {
    // const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    // const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    // const minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    // const seconds = pad(Math.floor((time % (1000 * 60)) / 1000));

    // refs.valueDays.innerHTML = `${days}`;
    // refs.hours.innerHTML = `${hours}`;
    // refs.minutes.innerHTML = `${minutes}`;
    // refs.seconds.innerHTML = `${seconds}`;
    // }
    // function pad(value) {
    // return String(value).padStart(2, '0');
    // }
// }
// const newTimer = new CountdownTimer({ selector: '#timer-1', targetDate: new Date('Jul 15, 2021') });
// newTimer.setTimer();