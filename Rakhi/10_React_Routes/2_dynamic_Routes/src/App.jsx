import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useParams } from 'react-router-dom'

function SayName() {

  // React routes provides a hook called useParams to create Dynamic Routes
  const params = useParams();
  // console.log(params); // {userId: 'soumya'}
  return <h1>Your name is {params.userId}</h1>
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='user/:userId' element= {<SayName/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App