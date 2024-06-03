import React from 'react'
import Component1 from './Component1'

function Button({count}) {
  return (
    <div>
        <button><span><Component1 count={count} /></span>I'm a button</button>
    </div>
  )
}

export default Button