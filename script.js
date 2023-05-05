//your code here
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds(), mins = now.getMinutes(), hour = now.getHours();
    const hourDegrees = (30*hour + mins/2)%360;
    const minsDegrees = 6*mins;
    const secondsDegrees = 6*seconds;
    secondHand.style.transform = `rotate(${secondsDegrees + 90}deg)`;
    minsHand.style.transform = `rotate(${minsDegrees + 90}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees +90 }deg)`;
}
setInterval(setDate, 1000);