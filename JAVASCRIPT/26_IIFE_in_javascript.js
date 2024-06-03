// IIFE - Immediately Invoked Function Expression

(function say() {
  console.log("hey");
})();

(() => console.log("I am Es6"))();

(function add(a, b) {
  console.log(a + b);
})(2, 3); // 5

((a, b) => console.log(a + b))(5, 10); // 15

const value = ((a,b) => a+b)(100, 200);
console.log(value); // 300



/* Note: With the help of IIFE you can avoid polluting the global namespace.
If we have some that we don't need to use 
again, we could use the IIFE pattern. */

(function varlue(){
    
    let firstVariable = 800;
    console.log(firstVariable); // 800
})();

// firstVariable will be discarded after the function is executed.



let data;
async function getData(){
    data = await fetch();
}
getData();

// With the help of IIFE, you can execute an async function
const data1 = (async () => await fetch())();



// const atm = function(initialBalance){
//     let balance = initialBalance; // Here balance is a private variable

//     function withdraw(amt){
//         if(amt > balance){
//             return "Are you kidding?";
//         }else{
//             balance = balance-amt;
//             return balance;
//         }
//     }
//     return {withdraw};
// };

// const piyush = atm(1000);
// const soumya = atm(5000);
// console.log(piyush.withdraw(100));
// console.log(soumya.withdraw(500));
