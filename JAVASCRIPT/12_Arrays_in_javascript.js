// Arrays
const students = ["John", "Piyush", "Sara"];
console.log(students);
console.log(students.length); // 3
console.log(students[0]); // John
console.log(students[1]); // Piyush
console.log(students[2]); // Sara
console.log(students[4]); // Undefined


// You can also change value of array

students[1] = "Piyush Garg";
console.log(students[1]); // Piyush Garg
console.log(students); // (3) ['John', 'Piyush Garg', 'Sara']


/* Now there is a question that type of student is const and we know we can't
re-assign const variable. Then how can you change Piyush to Piyush Garg.
So, the ans is ---> You can't reinitialize students to new array but you
can play existing value under student. Like add, delete, update */

// students = ['vicky']; <-- Uncaught TypeError: Assignment to constant variable.


// Push and Pop functions of Array

students.push("Giri");
students.push("Alaxa");
console.log(students); //(5) ['John', 'Piyush Garg', 'Sara', 'Giri', 'Alaxa']
students.pop();
console.log(students); // (4) ['John', 'Piyush Garg', 'Sara', 'Giri']


/* You can have a Heterogeneous Array in javascript, means multiple types 
data can store in 1 array. Like --> */

const myArray = [1, true, "Siri", "🚀"];
myArray.push({name: "Saha"});
console.log(myArray); //(5) [1, true, 'Siri', '🚀', {…}]


// Indexof and Reverse functions of Array

console.log(myArray.indexOf("Siri")); // 2
console.log(myArray.indexOf("Saha")); // -1(If the value is't present)

myArray.reverse();
console.log(myArray); // 5) [{…}, '🚀', 'Siri', true, 1]
