import React from 'react'
import counterContext from '../Context/CounterContext'
import { useContext } from 'react'

function Counter() {

  const value = useContext(counterContext);
  // console.log(value);

  return (
    <div>
        <button onClick={() => value.setCount((count) => count+1)}>Increment</button>
        {" "}
        <button onClick={() => value.setCount((count) => count-1)}>Decrement</button>
    </div>
  )
}

export default Counter