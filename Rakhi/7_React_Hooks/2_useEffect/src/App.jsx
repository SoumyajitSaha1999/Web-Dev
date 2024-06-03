// import React, { useEffect, useState } from 'react'

// function App() {

//   const [counter, setCounter] = useState(15)

//   //Case 1: Run on every render
//   useEffect(() => {
//     alert("Hey, I will run on every render");
//   })

//   //Case 2: Run only on first render
//   useEffect(() => {
//     alert("Hey, I willl run only on first render");
//   }, [])
  
//   //Case 3: Run only when certain value changes
//   useEffect(() => {
//     alert("I'm running because counter was changed");
//   }, [counter])
  

//   return (
//     <>
//       <h1>Hooks in React</h1>
//       <h3>Counter value: {counter}</h3>
//       <button onClick={() => setCounter(counter+1)}>Increment</button>
//       <button onClick={() => setCounter(counter-1)}>Decrement</button>
//     </>
//   )
// }

// export default App



// import React, { useEffect, useState } from 'react'

// function App() {

//   const [counter, setCounter] = useState(0);
//   const [showText, setShowText] = useState(false);

//   useEffect(() => {
//     if(counter === 5) {
//       setShowText(true);
//     }
//   }, [counter])
  
//   return (
//     <>
//       <h1>Hooks in React</h1>
//       <h3>Counter value: {counter}</h3>
//       {showText? <h3>Hello World</h3> : <></>}
//       <button onClick={() => setCounter(counter+1)}>Increse Count</button>
//     </>
//   )
// }

// export default App



// import React, { useEffect, useState } from 'react'

// function App() {

//   const [count, setCount] = useState(0);

//   // useEffect without dependencies will run on every render
//   // useEffect(() => {
//   //   document.title = `${count} value`
//   // })

//   // useEffect with empty array will run only on first render
//   // useEffect(() => {
//   //   document.title = `${count} value`
//   // },[])

//   // useEffect with variables will run only when certain value changes. In our example count
//   useEffect(() => {
//     document.title = `${count} value`
//   },[count])
  
//   return (
//     <>
//       <h1>Count Value: {count}</h1>
//       <button onClick={() => setCount(count+1)}>Increase</button>
//     </>
//   )
// }

// export default App



// import React, { useEffect, useState } from 'react'

// function App() {

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Use effect with empty array", count);

//     return function() {
//       console.log("Unmounting");
//     }
    
//   }, [])

//   useEffect(() => {
//     console.log("Mounting", count);

//     return function() {
//       console.log("Unmounting.....");
//     }
    
//   }, [count])
  

//   return (
//     <>
//       <h1>Count value: {count}</h1>
//       <button onClick={() => setCount(count+1)}>Increase</button>
//     </>
//   )
// }

// export default App

// O/P: App.jsx:104 Use effect with empty array 0
// App.jsx:113 Mounting 0
// App.jsx:116 Unmounting.....
// App.jsx:113 Mounting 1
// App.jsx:116 Unmounting.....
// App.jsx:113 Mounting 2

// When we click the Increase button it update the count variable. When we do any update, the previous component is unmounted. That time it will print Unmounting..... 



// import React, { useEffect, useState } from 'react'

// function App() {

//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     // Mounted
//     const timer = setInterval(() => setTime(time+1), 1000);

//     // Cleanup
//     return function() {
//       clearInterval(timer);
//     }
//   }, [time])
  

//   return (
//     <>
//       <h1>Stopwatch</h1>
//       <h4>Current time is {time}</h4>
//     </>
//   )
// }

// export default App



import React, { useEffect, useState } from 'react'

function App() {

  const [product, setProduct] = useState([]);

  async function fetchAllProducts() {
    try{
      let response = await fetch("https://dummyjson.com/products");// https://dummyjson.com/docs/products
      let result = await response.json();

      if (result && result.products) {
        setProduct(result.products);
      }
    } catch(err){
        console.log(err);
    }
  }

  useEffect(() => {
    fetchAllProducts();
  }, [])
  

  return (
      <ul>{product.map((item) => <li>{item.title}</li>)}</ul>
  )
}

export default App