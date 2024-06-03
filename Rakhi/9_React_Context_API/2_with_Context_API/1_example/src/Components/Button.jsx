import React from 'react'
import Component1 from './Component1'
import { useContext } from 'react'
import counterContext from '../context/context'

function Button() {
  const value = useContext(counterContext)
  return (
    <div>
        <button onClick={() => value.setCount((count) => count+1)}><span><Component1 /></span>I'm a button</button>
    </div>
  )
}

export default Button