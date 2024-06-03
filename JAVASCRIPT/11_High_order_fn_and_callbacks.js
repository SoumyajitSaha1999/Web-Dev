// High Order Function and Callbacks

function addNum(a, b) {
  return a + b;
}

console.log(addNum(4, 6));

/* Now assume addNow is a handy function means it takes time.
That time we use High Order Function and Callback */

// 1st Way
function add(a, b, cb) {
  let result = a + b;
  cb(result);
}

function showResult(result) {
  console.log(result);
}

add(4, 6, showResult); // 10

// 2nd Way
function add1(a, b, cb) {
  let result = a + b;
  cb(result);
}

add1(7, 8, function (val) {
  console.log(val); // 15
});

// 3rd Way
function add2(a, b, cb) {
  let result = a + b;
  cb(result);
}

add2(10, 15, (val) => console.log(val)); // 25
add2(400, 55, (res) => console.log(res)); // 455

/* Note: In our example add is a high order function(it takes a function as a 
argument) and the cb(argument)is known as callback */

// You can even return a function from a function

//1st Way
function add(a, b) {
  let result = a + b;

  return function () {
    console.log(result);
  };
}

let functionResult = add(10, 20);
functionResult(); // 30

// 2nd Way
function add(a, b) {
  let result = a + b;

  return () => console.log(result);
}

let functionResult1 = add(30, 20);
functionResult1(); // 50
console.log(functionResult1);
