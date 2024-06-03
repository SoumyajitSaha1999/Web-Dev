// let
// let is  almost same as var

var a = 22;
console.log(a);

a = 77;
console.log(a);


// let --> Local Scope

if(true){
    let age = 20;
    console.log(age); // 20
}
console.log(age); // error


console.log(value); // undefined
let value = 70;
console.log(value); // 70