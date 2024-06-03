// Closure

// 1st Example
function main() {
  const name = "Piyush Garg";

  function sayMyName() {
    console.log(name);
  }

  sayMyName();
}
main(); // Piyush Garg


// 2nd Example
function main() {
  const name = "Piyush Garg";

  function sayMyName() {
    console.log(name);
  }

  return sayMyName;
}

let ans = main();
ans(); // Piyush Garg
console.log(ans); /* ƒ sayMyName() {
                        console.log(name);
                     } */


// 3rd Example
function main(name) {
    
  function sayMyName() {
    console.log(name);
  }

  return sayMyName;
}

let consloePiyush = main("Piyush");
consloePiyush(); // Piyush


// 4th Example
function adder(num) {

    function add(b){
        console.log(num + b);
    }
    return add;
}

let addTo5 = adder(5);
let addTo10 = adder(10);

addTo5(2); // 7
addTo5(10); // 15
addTo10(10); // 20
