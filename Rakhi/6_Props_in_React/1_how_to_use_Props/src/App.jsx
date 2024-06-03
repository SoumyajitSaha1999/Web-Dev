import React from 'react'
import Students from './Students'

function App() {
  return (
    <>
      <Students name="Alexa" marks={80} />
      <Students name="Siri" marks={72} />
      <Students name="Google" marks={93} />
    </>
  )
}

export default App