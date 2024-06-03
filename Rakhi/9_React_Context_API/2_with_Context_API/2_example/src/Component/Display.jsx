import React, { useContext } from 'react'
import counterContext from '../Context/CounterContext'

function Display() {

  const value = useContext(counterContext);
  // console.log("count", value.count);

  return (
    <h1>Counter value is {value.count}</h1>
  )
}

export default Display