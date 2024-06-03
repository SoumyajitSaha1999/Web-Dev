import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/counter/counterSlice'

function App() {
  
  const count = useSelector((state) => state.counter1);
  console.log("count", count);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <button onClick={() => dispatch(decrement())}>-</button>
      {' '}
      <span>currently count is { count }</span>
      {' '}
      <button onClick={() => dispatch(increment())}>+</button>

      {/* <button onClick={() => dispatch(incrementByAmount(6))}>+</button> */}
    </>
  )
}

export default App
