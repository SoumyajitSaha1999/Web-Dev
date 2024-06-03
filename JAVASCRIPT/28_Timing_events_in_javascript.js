// Timing Events

function sayHello(){
    console.log("Hello everyone");
}

console.log(sayHello());
    

// Now if you want sayHello function execute after 3 seconds
setTimeout(sayHello, 3000);

// Now if you want satHello function execute repeatedly after 5 seconds
setInterval(sayHello, 5000);

// Now if you want satHi function execute only 10 times. Then the execution will stop
let count = 1;
function sayHi(){
    console.log("Hii");
    if(count == 10){
        //Stop execution
        clearInterval(interval);
    }
    count++;
}
let interval = setInterval(sayHi, 1000);