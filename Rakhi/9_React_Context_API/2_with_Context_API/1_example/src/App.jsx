import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import counterContext from './context/context'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <counterContext.Provider value={{count, setCount}}>
      <Navbar />
      <h1>Counter Value: {count}</h1>
      <button onClick={() => setCount(count+1)}>Increase</button>
      </counterContext.Provider>
    </>
  )
}

export default App