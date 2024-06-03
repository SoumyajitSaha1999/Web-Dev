import React, {useState} from 'react'
import Products from './Products'

function App() {
  var [a, b] = useState(69)
  return (
    <div className='h-screen w-full bg-zinc-900 p-5 text-white text-xl'>
      {/* You want to send the value of a */}
      <Products naam= {a} data={{name:"harsh", age:25}} />
    </div>
  )
}

export default App