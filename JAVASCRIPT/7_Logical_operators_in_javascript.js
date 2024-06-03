// Logical Operators
// AND --> All cond. must be true(&&) 

const age = 22;
const gender = 'male';

if(age >= 18 && gender == 'male'){ // == operator return boolean
    console.log('You are adult male');
}


// OR -->  Atleast one cond. should be true(||)

if(age >= 18 || gender == 'female'){
    console.log('You are adult male');
}

// let isMale = gender == 'male'


// NOT --> True --> False and False --> True(!)

const number = 5;

if(number % 2 == 0){
    console.log("Even");
}

if(!(number % 2 == 0)){
    console.log("Odd");
}

if(number %2 != 0){
    console.log("Odd");
}

console.log(!true);
console.log(!false);