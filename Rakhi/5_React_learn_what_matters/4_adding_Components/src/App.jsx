import React from 'react';
import Products from './products';

function App() {
  return (
    <div className='w-full h-screen bg-zinc-900 p-5'>
      <div className='w-44 h-32 bg-red-900 rounded-xl p-3 text-white'>
        <p>Hello Everyone!</p>
      </div>
      <Products/>
      <Products />
    </div>
  )
}

export default App