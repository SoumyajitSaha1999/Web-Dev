// var arr = [
//         {name: "Soumya", gender: "male"},
//         {name: "maya", gender:"female"},
//         {name: "john", gender:"male"},
//         {name: "madhumita", gender:"female"},
// ]

// const name = arr.map(n => n.name.toUpperCase())
// console.log(name);
// var newArr = arr.filter(function(ele) {
//     return ele.gender === "male"
// })

// arr= newArr;
// console.log(arr);

// var count = 0;
// arr.forEach(function(ele) {
//     if(ele.gender !== "male") count++;
// })
// console.log(count);
// for(var i = 1; i <= count; i++){
//     for(var j = 0; j < arr.length; j++) {
//         if(arr[j] !== "male"){
//             arr.splice(j, 1);
//         }
//     }
// }

// console.log(arr);

// let num = 45;
// let ans = num + "soumya"
// console.log(ans);

const alphabets = document.getElementById("alphabets");
const stopBtn = document.getElementById("stop");
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let i = 0;

function updateAlphabets() {
    alphabets.textContent = letters[i];
    i++;
    if(i === 26) i = 0;
}

let enter = setInterval(updateAlphabets, 100);
stopBtn.addEventListener("click", () => {
    clearInterval(enter)
})
