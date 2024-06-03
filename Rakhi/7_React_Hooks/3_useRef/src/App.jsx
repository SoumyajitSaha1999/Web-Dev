// import React, { useEffect, useState } from 'react'

// function App() {

//   const [count, setCount] = useState(0);

//   let a = 0
//   useEffect(() => {
//     a = a + 1;
//     console.log("Value of a is ",a);
//   })
  
//   return (
//     <>
//       <h1>Counter Value: {count}</h1>
//       <button onClick={() => setCount(count+1)}>Increment</button>
//     </>
//   )
// }

// export default App

// o/p: Value of a is 1
// Every time component is re-render. That's why we can't use the variable a. As a solution we can use useRef



// import React, { useState, useEffect, useRef } from 'react'

// function App() {

//   const [count, setCount] = useState(0);

//   const a = useRef(0); // useRef returns a mutable ref object whose .current property is initialized to the passed argument
//   useEffect(() => {
//     a.current = a.current + 1;
//     console.log("Value of a is ",a.current);
//   })
  
//   return (
//     <>
//       <h1>Counter Value: {count}</h1>
//       <button onClick={() => setCount(count+1)}>Increment</button>
//     </>
//   )
// }

// export default App

//o/p: Value of a is 1
// Value of a is 2
// Value of a is 3
// Value of a is 4
// Value of a is 5
// Keep in mind that useRef doesn't notify you when it's content changes. Mutating the .current property doesn't cause a re-render



// import React, { useEffect, useState } from 'react'

// function App() {

//   const [name, setName] = useState('');
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setCount(count + 1); // It create a infinite loop
//   })
  

//   return (
//     <>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <div>My name is {name}</div>
//       <div>I render {count} times</div> {/* It create a infinite loop */}
//     </>
//   )
// }

// export default App



// import React, { useEffect, useRef, useState } from 'react'

// function App() {

//   const [name, setName] = useState('');
//   const renderCount = useRef(1)

//   useEffect(() => {
//     renderCount.current = renderCount.current + 1;
//   })

//   return (
//     <>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <div>My name is {name}</div>
//       <div>I render {renderCount.current} times</div> 
//     </>
//   )
// }

// export default App



import React, { useRef } from 'react'

function App() {

  const refElement = useRef();

  function reset() {
    refElement.current.focus();
    refElement.current.style.width = "300px";
    refElement.current.style.color = "blue";
  }
  
  return (
    <>
      <input ref={refElement} />
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App