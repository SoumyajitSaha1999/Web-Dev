// Arrow Functions

// 1. Syntax

function sayHelloo() {
  console.log("Heyy");
}

const sayHello = () => {
  // Arrow Functions
  console.log("Heyy");
};

const add = (a, b) => {
  return a + b;
};

const addV2 = (a, b) => a + b; // One Liner(when function body have only 1 expression)

sayHello();
console.log(add(2, 8));
console.log(addV2(10, 15));

const add3 = function (a, b) {
  return a + b;
};

// 2. 'Arguments' keyword

/*const addNumber = () =>{ // 'Argument' keyword is not available in arrow functions. That's why it create error
    console.log(arguments);    
}

addNumber(10, 20, 30, 40, 50); */

const addNumber = (...numbers) => console.log(numbers); //(5) [10, 20, 30, 40, 50]

addNumber(10, 20, 30, 40, 50);

// 3. Hoisting

sayHey(); // You can hoist a function in a normal function

function sayHey() {
  console.log("Heyy there");
}

/*sayHeyy(); // For arrow function histing not possible
const sayHeyy = () => {
    console.log("Heyy there");
}*/

// 4. This Keyword

const obj = {
  value: 20,
  myFunction: function () {
    console.log(this); // {value: 20, myFunction: ƒ}
    console.log("this is " + this.value); // this is 20
  },
};

obj.myFunction();

const obj1 = {
  value: 20,
  myFunction: () => {
    console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    console.log("This is " + this.value); // This is undefined
  },
};

obj1.myFunction();

// Note: For normal function this point caller. But scope of arrow function
// is global. So, the this keyword refer window means browser
