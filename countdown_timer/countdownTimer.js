export default function countdownTimer(countDownDate) {

  var now = new Date().getTime();

  var distance = now - countDownDate ;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24) );
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval();
    // document.getElementById("demo").innerHTML = "EXPIRED";
  }

  return {
    days, hours, minutes, seconds
  }
};  