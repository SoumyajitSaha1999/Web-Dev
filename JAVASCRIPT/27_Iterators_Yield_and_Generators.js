// Iterators

/* Note: In array there is a built-in Iterator function. Iterator 
function control mechanism of for...of loop */
let oddArr = [1, 3, 5, 7, 9];
for(const val of oddArr){
    console.log(val);
}

for (const val of [1, 2, 3, 4, 5]) {
  console.log(val);
}

// Now you want to create Custom Iterate Function
function makeIterator(start = 0, end = Infinity, stepSize = 1) {
  let nextStart = start;
  let iterationCount = 0;

  return {
    next() {
      let result;
      if (iterationCount < end) {
        result = { value: nextStart, done: false };
        nextStart = nextStart + stepSize;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
}

const myIterator = makeIterator(10, 20, 2);
// const myIterator = makeIterator(1, 10); <-- By default step size is 1

// console.log(myIterator); <-- {next: ƒ}
let result = myIterator.next();
// console.log(result); <-- {value: 10, done: false}

while (!result.done) {
  console.log(result.value);
  result = myIterator.next();
}

/* for(const val of makeIterator(1, 10)){
      console.log(val); // makeIterator is not a function or its return value is not iterable
  } 
  Note: makeIterator is a customize iterator function. So, we can't use built
  for...of of that function */


  
// yield Keyword and Generator Function
/* Note: If you want to use yield keyword then you need to create Generator
  Function. Generator functions are written using the function* syntax. Using 
  the yield keyword you can insert your own values into the iterator. */
function* count() {
  yield 2;
  yield 4;
  yield 6;
  yield 8;
  yield 10;
}
const evenNum = count();
// console.log(evenNum); <-- count {<suspended>}
for (const val of evenNum) {
  console.log(val);
}

//Now you want to create Custom Iterate Function using yield Keyword and Generator Function
function* makeMyIteratorNew(start, end, stepSize = 1) {
  for (let i = start; i < end; i += stepSize) {
    yield i;
  }
}
const res = makeMyIteratorNew(20, 35, 3);
for (const val of res) {
  console.log(val);
}

   
// You can also do it this way
const one = makeMyIteratorNew(15, 30, 3);
let ans = one.next();
// console.log(ans); <-- {value: 15, done: false}

while (!ans.done) {
  console.log(ans.value);
  ans = one.next();
}

