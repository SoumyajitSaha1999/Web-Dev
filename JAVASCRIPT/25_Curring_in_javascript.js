
function add1(a, b, c) {
  return a + b + c;
}
console.log(add1(2, 3, 10)); // 15

/* Note: Now there is requirement that add1 operation will be performed only
when all three parameters are available. As a solution you can use currying */


// Function Curring
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// const add = a => b => c => a+b+c;

console.log(add(2)(3)(10)); // 15
// console.log(add(2)(3)); // The function will not execute

/* Note: The function will not execute until then, As long as three 
parameters are being passed. If you remove 1 argument you can see the 
function will not execute */


// Real example of Curring
function sendAutoEmail(to){
    return function(subject){
        return function(body){
            console.log(`Sending email to ${to} with subject- ${subject}: ${body}`);
        };
    };
} 

// const sendAutoEmail = (to) => (subject) => (body) => {console.log(`Sending email to ${to} with subject ${subject}: ${body}`)};

let step1 = sendAutoEmail("soumyajit276@gmail.com");
let step2 = step1("New Order Confirmation");
step2("Hey, Soumyajit there is somethig for you");