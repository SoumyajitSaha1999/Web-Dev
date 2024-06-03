// import React from 'react'

// function App() {
//   let counter = 0;

//   function addValue() {
//     counter = counter+1;
//     console.log("Increment clicked",counter);
//   }

//   return (
//     <>
//       <h1>Hooks in React</h1>
//       <h3>Counter value: {counter}</h3>

//       <button onClick={addValue}>Increment</button>
//       <button>Decrement</button>
//     </>
//   )
// }

// export default App

// So, when you clicked the Increment button the value of Counter variable is changing. 
// You can see it on console, but this change is not showing in UI. The major power of React is UI updation.
// UI updation completely depends on React. For that reason React gives us some method called Hooks
// and with the help of Hooks you can update/modify the UI


import React, { useState } from 'react'

function App() {

  let [counter, setCounter] = useState(15);

  console.log(counter); // Whenever the value of the state changes, the component re-render itself with update values

  function addValue() {
    setCounter(counter+1);
  }

  function subtractValue() {
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Hooks in React</h1>
      <h3>Counter value: {counter}</h3>
      <button onClick={addValue}>Increment</button>
      <button onClick={subtractValue}>Decrement</button>     
    </>
  )
}

export default App


// import React, { useState } from 'react'

// function App() {

//   let [counter, setCounter] = useState(15);

//   return (
//     <>
//       <h1>Counter value: {counter}</h1>
//       <h3>The value is {counter%2? "Odd" : "Even"}</h3>
//       <button onClick={() => setCounter(counter+1)}>Increment</button>
//       <button onClick={() => setCounter(counter-1)}>Decrement</button>
//     </>
//   )
// }

// export default App