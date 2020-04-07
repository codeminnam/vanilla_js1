const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `./img/${imgNumber}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);

}

function getRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER)+1;
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}
init();