// Arrays High Order Function
const students = ["John", "Piyush", "Sara"];

for(let i = 0; i < students.length; i++){
    console.log(students[i]);
}


// 1. forEach Method
// forEach is a High Order Function. Because it takes a callback functionas a argument 

function print(n){
    console.log(n);
}
students.forEach(print);

// You can pass a one liner function. Like -->

students.forEach( val => console.log(val + " Hi"));

/* Note: The foreach function accesses each element of the array and
passes the elements to the print function as a argument */


// 2. map Method

students.map((val) => console.log(val));


/* Note: The output of forEach and map is same. Then what is the difference 
between forEach and map?
=> The basic difference is map return a new array but forEach doesn't
return anything. Like --> */

const number = [1, 2, 3, 4, 5, 6, 7];

function double(n){
    return n*2;
}

let newArr = number.forEach(double);
console.log(newArr); // Undefined

let newArray = number.map(double);
console.log(newArray); // (7) [2, 4, 6, 8, 10, 12, 14]

// The original array will not change
console.log(number); // (7) [1, 2, 3, 4, 5, 6, 7]


// In forEach function you perform some internal task. Like --> 

let demoArr = [];
number.forEach((num) => demoArr.push(num*3));
console.log(demoArr); // (7) [3, 6, 9, 12, 15, 18, 21]

/* Note: To print array element and perform some internal task you can use forEach
function. But if you want to manipulate the values of the array and create
a new array you can use map function */


// 3. find Method
// find also take a callback function where you have to pass a condition

const value = [1, 2, 3, 4, 5, 6, 7];

let ans = value.find((num) => num==4);
console.log(ans); // 4

let ans1 = value.find((num) => num==25);
console.log(ans1); // Undefined


// 4. findIndex Method
// Same as find but it return index

const values = [1, 2, 3, 4, 5, 6, 7];

let ans2 = value.findIndex((num) => num===4);
console.log(ans2); // 3
console.log(values[ans2]); // 4

let ans3 = value.findIndex((num) => num===25);
console.log(ans3); // -1


// 5. includes Method
// It return boolean value(true/false)

const arr = [1, 2, 3, 4, 5, 6, 7];

let ans4 = arr.includes(2*2);
console.log(ans4); // true

let ans5 = arr.includes(25);
console.log(ans5); // false


// 6. filter Method

const element = [1, 2, 3, 4, 5, 6, 7];

let evenArr = element.filter((val) => val % 2 == 0);
console.log(evenArr); // (3) [2, 4, 6]


// 7. slice Method
// If you want to create array's sub array. But slice don't change the original array

const elements = [1, 2, 3, 4, 5, 6, 7];

let subArr = elements.slice(1, 5); // 1 -> Start Index, 5 -> End Index
console.log(subArr); // (4) [2, 3, 4, 5] <-- Ignores the last index

let subArr1 = elements.slice(0, 4);  
console.log(subArr1); // (4) [1, 2, 3, 4]

let subArr2 = elements.slice(4);  
console.log(subArr2); // (3) [5, 6, 7]


// 8. splice Method
/* Removes elements from an array and splice modified the original array 
returns the deleted element in the new array */

const ele = [1, 2, 3, 4, 5, 6, 7];

let nArr = ele.splice(1, 4) // 1 -> Start Index, 4 -> From 1 to how many elements want to delete?
console.log(nArr); // (4) [2, 3, 4, 5]
console.log(ele); // (3) [1, 6, 7]


let nArr1 = ele.splice(1); // If you don't spcify deletion count
console.log(nArr1); // (2) [6, 7]
console.log(ele); // [1]


ele.splice(1, 0, 100, 200, 300, 400, 500);
console.log(ele); // (6) [1, 100, 200, 300, 400, 500]


let nArr2 = ele.splice(2, 3, 777, 999);
console.log(nArr2); // (3) [200, 300, 400]
console.log(ele); // (5) [1, 100, 777, 999, 500]

