function show(){
    console.log("Hello guys");
}

console.log(show());


// Anonymous Function
let show1 = function(){
    console.log("Hello everyone");
};
show1();
/* Note: when you assign a function to variable then there is no need to name the function */

setTimeout(function() {
    console.log("Namaste India");
}, 2000);

setTimeout(() => {
    console.log("Welcome to India");
}, 2000);