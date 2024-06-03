import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function Home() {
  return <h1>Home Page</h1>
}

function About() {
  return <h1>About Page</h1>
}

function Profile() {
  return <h1>Profile Page</h1>
}

function Setting() {
  return <h1>Setting Page</h1>
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          {/* It is also known as Single-level Routes */}
          <Route path='/about' element= {<About/>}/>

          {/* Nested Route */}
          {/* <Route path='/account/profile' element= {<Profile/>}/> */}

          {/* Another way to create Nested Route is- */}
          {/* It is also known as Multi-level Routes */}
          <Route path='/account'>
            <Route path='profile' element= {<Profile/>} />
            <Route path='setting' element= {<Setting/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App