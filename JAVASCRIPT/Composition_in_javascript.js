
function add(a, b) {
  return a + b;
}

function square(val) {
  return val * val;
}

const addResult = add(2, 3);
console.log(square(addResult)); // 25

function addTwoAndSquare(a, b) {
  return square(add(a, b));
}
console.log(addTwoAndSquare(5, 5)); // 100

/* Note: Now, assume there is a 50 function, and you want to run that function
sequencely. So it's become handy. As a solution we use composition */

function composeTwoFunction(fn1, fn2) {
  return function (a, b) {
    return fn2(fn1(a, b)); // Here we follow direction Right to Left
  };
}
// Using arrow function
// const compose = (fn1, fn2) => (a, b) => fn2(fn1(a, b));

const task = composeTwoFunction(add, square);
console.log(task(2, 3)); // 25

// Now you want to compose unlimited function

