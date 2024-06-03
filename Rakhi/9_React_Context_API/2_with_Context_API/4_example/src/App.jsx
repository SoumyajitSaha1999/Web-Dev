import React from 'react'
import Item from './Components/Item'
import Cart from './Components/Cart'
import CartContextProvider from './Context/CartContextProvider'

function App() {
  return (
    <>
      <CartContextProvider>
        <h1>Items Details</h1>
        <Item name="MacBook Pro" price="100000"/>
        <Item name="Pendrive" price="1200"/>
        <Item name="Mobile" price="3500"/>
        <Cart />
      </CartContextProvider>
    </>
  )
}

export default App