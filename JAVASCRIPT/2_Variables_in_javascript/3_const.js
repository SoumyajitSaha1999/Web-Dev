// const
// const --> Local Scope

if(true){
    const age = 20;
    console.log(age); // 20
}
console.log(age); // error


// For const, value of const can't be re-assign

const age = 22;
console.log(age);

age = 50; // error


// For const, at the time of declaration of a variable must be initialize. Can't be undefined 

const var; // error
var = 50; // error

const value = 20; // correct
console.log(value + 10); // 30