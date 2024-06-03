import React from 'react'
import Students from './Students'

function App() {
  return (
    <>
      <Students name="Alexa" marks={80}/>
      <Students marks={80}/>
      <Students />
    </>
  )
}

// Default Props
Students.defaultProps = {
  name: "Student",
  marks: "N.A"
}

export default App