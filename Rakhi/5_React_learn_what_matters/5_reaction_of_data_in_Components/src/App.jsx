import React, { useState } from 'react';

function App() {
  var[a,b] = useState(69);
  return (
      <div className='p-10'>
        <h1>{a}</h1>
        <button onClick={() => {b(a+1)}} className='px-3 py-1 bg-green-500 rounded-lg text-xs'>Click</button>
      </div>
  )
}

export default App