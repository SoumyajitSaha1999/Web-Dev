import React from 'react'
import counterContext from './CounterContext'
import { useState } from 'react'


function CounterContextProvider({children}) {
  
  const [count, setCount] = useState(0);

  return (
    <counterContext.Provider value={{count, setCount}}>
        {children}
    </counterContext.Provider>
  )
}

export default CounterContextProvider