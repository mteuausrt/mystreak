import countdownTimer from './countdownTimer.js';

const countDownDate = new Date("Mar, 15 2022 21:20").getTime();
const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');

function displayCountDownTimer(countDownObject){

  for (const key in countDownObject) {
    if (Object.hasOwnProperty.call(countDownObject, key)) {
      countDownObject[key] = countDownObject[key];

      if(countDownObject[key] < 10 && countDownObject[key] >= 0){
        countDownObject[key] = '0'+countDownObject[key]
      }
    }
  }

  daysEl.innerHTML = countDownObject.days
  hoursEl.innerHTML = countDownObject.hours
  minutesEl.innerHTML = countDownObject.minutes
  secondsEl.innerHTML = countDownObject.seconds

}

setInterval(() => {
  const countDownObject = countdownTimer(countDownDate);

  displayCountDownTimer(countDownObject);
  
}, 1000)