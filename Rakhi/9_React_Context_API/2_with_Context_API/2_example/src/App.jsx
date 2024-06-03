import React from 'react'
import Counter from './Component/Counter'
import CounterContextProvider from './Context/CounterContextProvider'
import Display from './Component/Display';

function App() {

  return (
    <>
      <CounterContextProvider>
        <Display />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </CounterContextProvider>
    </>
  )
}

export default App