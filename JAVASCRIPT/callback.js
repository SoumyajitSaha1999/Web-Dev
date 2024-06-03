// console.log('hi');

// setTimeout(function () {
//     console.log("Timer");
// }, 1000) // first argument is callback function and second is timer.

// console.log('hi2');

// setTimeout(function () {
//     console.log("timer");
//   }, 5000);
//   function x(y) {
//     console.log("x");
//     //console.log(y);
//     y();
//   }
//   x(function y() {
//     console.log("y");
//   });
//   // x y timer

// Another Example of callback

// function printStr(str, cb) {
//     console.log(cb);
//     setTimeout(() => {
//         console.log(str);
//         cb();
//     }, Math.floor(Math.random() * 100) + 1)
// }
// function printAll() {
//     printStr("A", () => {})
//         printStr("B", () => {})
//             printStr("C", () => {})
//     }
// printAll() // A B C // in order


// function add(a, b, cb){
//     let result = a+b;
//     cb(result);
// }

// add(2, 6 , (val) => console.log(val));

function sayName(name){
    console.log(name);
    return name;
  }
  function greeting(){
    var myName = sayName('Ifeoma')
    console.log(myName)
  }
  greeting()