const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    // const seconds = date.getSeconds();
    clockTitle.innerText = 
    `${hours > 9  ? `${hours}`:`0${hours}`} : ${minutes >9 ? `${minutes}`:`0${minutes}`}`;
}

function init(){
    getTime();
    setInterval(getTime, 10000);
}

init();