import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar'

function App() {

  // Now you want to send the count variable in Component1.jsx
  const[count, setCount] = useState(0)

  return (
    <>
      <Navbar count={count}/>
      <h1>Counter value: {count}</h1>
      <button onClick={() => setCount(count+1)}>Increase</button>
    </>
  )
}

export default App
