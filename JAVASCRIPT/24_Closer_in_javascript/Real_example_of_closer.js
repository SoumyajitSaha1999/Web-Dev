
const myName = document.getElementById("my-name");
const button = document.getElementById("my-btn");

function makeTextSizer(size){

    function changeSize(){
        myName.style.fontSize = `${size}px`;
    }
    return changeSize;
}

const size20 = makeTextSizer(50);
const size70 = makeTextSizer(70);

const size100 = makeTextSizer(100);
const size10 = makeTextSizer(10);  

button.addEventListener("click", size100);


// For Counter Button
const counterButton = document.getElementById("cnt-btn");

function makeCounter(){

    let count = 1;
    function increment(){
        console.log(count++);
    }

    return increment;
}

const counter = makeCounter();
counterButton.addEventListener("click", counter);