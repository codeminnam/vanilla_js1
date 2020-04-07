const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    const currentClass = title.className;
}

function init(){
    title.addEventListener("mouseenter", handleClick);
}

init();
