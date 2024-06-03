import React, {useState} from 'react'

function App() {
  const [a, b] = useState(true);
  return (
    <div className='h-screen w-full bg-zinc-900 p-5'>
      <div className='w-full h-60 bg-zinc-100'>
        <h4 className={`${a === true? "text-red-600" : "text-blue-600"}`}>{a === true? "Hello" : "Bye"}</h4>
        <button onClick={()=> b(!a)} className='px-3 py-1 bg-green-500'>change</button>
      </div>
    </div>
  )
}

export default App