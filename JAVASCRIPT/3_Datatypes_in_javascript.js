// Datatypes
// Numbers --> float, decimal and integer

let num1 = 3.14;
let num2 = 10;
console.log(num1 + num2); // 13.4


//Strings
//You can have single code, you can have double code. It doesn't matter

const firstName = 'Soumyajit';
const lastName = "Saha";
console.log(firstName); // Soumyajit
console.log(firstName+lastName); // SoumyajitSaha
console.log(firstName + ' ' + lastName); // Soumyajit Saha


// Booleans

let isLoggedIn = true;
console.log(isLoggedIn); // true


// Null
// Null means you have a variable. But that variable have no value. You can assign value later

let lastLoggedInDate = null;
console.log(lastLoggedInDate); // null


// Undefined
// Undefined means that variable have no existance. Like you want to delete a variable that time you can use undefined

let lastLoggedOutDate = undefined;


// Objects
//Properties of objects will separated by comma(,). Otherwise you get error
// Objects contain key value pairs

const person = {

    firstName: 'Soumyajit' ,
    lastName: 'Saha' ,
    age: 23 ,
    sex: 'male' ,  
    married: undefined ,

}

console.log(person.age); // 23
console.log(person);     // {firstName: 'Soumyajit', lastName: 'Saha', age: 23, sex: 'male', married: undefined}
                         // age: 23
                         // firstName: "Soumyajit"
                         // lastName: "Saha"
                         // married: undefined
                         // sex: "male"
                         // [[Prototype]]: Object
