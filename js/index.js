const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setRotation(element,ratio){
    element.style.setProperty('--rotation',ratio*360);// setproperty method helps us to add value to particular css property.
}
function setClock(){
    const currentDate = new Date();
    //getting the seconds ratio by diving with 60 parts
    const secondsRatio = currentDate.getSeconds()/60;
    //getting mminutes ratio by adding seonconds ration and minutes because, according to the movment of second hand.
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60 
    const hoursRatio = (minutesRatio + currentDate.getHours())/12

    setRotation(hourHand,hoursRatio);
    setRotation(minuteHand,minutesRatio);
    setRotation(secondHand,secondsRatio);
}

setInterval(setClock,1000);