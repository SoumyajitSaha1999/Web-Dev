// Functions

function sayHello() {
    console.log("Hey, soumyajit");
}

sayHello(); // Calling of function
sayHello();


// Parameters and Arguments

function add(a, b) { // a and b --> Arguments
    console.log(a + b);
}

add(10, 5); // 10 and 5 --> Parameters
add(8, 2); // 8 and 2 --> Parameters


// Returing Function

function multiply(num1, num2) {
    return num1 * num2
}

let res = multiply(10, 5);
console.log('Hey user the result is ', res);


// Unlimited arguments accept

function addNumbers() {
    console.log(arguments); /* Arguments(5) [10, 21, 33, 48, 55] 
                               0: 10
                               1: 21
                               2: 33
                               3: 48
                               4: 55
                               callee: ƒ addNumbers()
                               length: 5*/
}

addNumbers(10, 21, 33, 48, 55);

function addValue(){
    let ans = 0;

    for(let i = 0; i < arguments.length; i++){ // arguments is a built-in object
        ans = ans + arguments[i];
    }

    return ans;
}

let result = addValue(10, 21, 33, 48, 55);
console.log(result); // 167


// Spread Operator

function addValue2(...saha){
    let ans = 0;

    for(let i = 0; i < saha.length; i++){ 
        ans = ans + saha[i];
    }

    return ans;
}

let result2 = addValue2(13, 55, 101, 405);
console.log(result2); // 574
