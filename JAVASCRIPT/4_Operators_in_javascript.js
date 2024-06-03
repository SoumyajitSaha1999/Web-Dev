// Operators

let num1 = 3.14;
let num2 = 10;

console.log(num1 + num2 + 10); // 23.14
console.log(num1 - num2 + 10); // 3.1400000000000006
console.log(num1 * num2); // 31.400000000000002
console.log(num1 / num2); // 0.314


// Booleans --> 0 | 1
// JS --> 1 --> true | 0 --> false
// JS true | false
// true --> 1 | false --> 0

let isLoggedIn = true;
console.log(isLoggedIn + 10); // 11
//                1     + 10  =  11

let val = false;
console.log(val * 10) // 0
//           0  * 10  =  0


// String

console.log('1' + '1'); // 11 <-- it is a string
console.log('1' + 1); // 11 <-- it is a string
console.log('a' + 1); // a1 <-- it is a string

// Now if you want string convert a number. Then

console.log('123' * 1); // 123 <-- it is a number
 
// String + String = String
// String + Number = String
// String * Number = Number

//NaN 
// NaN stands for not a number

console.log("a" *1); // NaN  


//Typeof operator

console.log(typeof 123); // number
console.log(typeof '123'); // string
console.log(typeof 'abc'); // string
console.log(typeof('123' * 1)); // number

let a = null;
console.log(typeof a); // object

let isBool = false;
console.log(typeof isBool); // boolean

const person = {

    firstName: 'Soumyajit' ,
    lastName: 'Saha' ,
    age: 23 ,
    sex: 'male' ,  
    married: undefined ,

}

console.log(typeof person); //object
console.log(typeof person.firstName); // string