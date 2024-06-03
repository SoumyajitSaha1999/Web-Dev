import React, { useContext } from 'react'
import cartContext from '../Context/CartContext'

function Cart() {

  const cart = useContext(cartContext);

  const total = cart.items.reduce((a, b) => a + Number(b.price), 0)

  return (
    <div>
        <h1>Cart Items</h1>
        { cart && cart.items.map(item => <li>{item.name} - ${item.price}</li>) }
        <h5>Total Bill: ${total}</h5>
    </div>
  )
}

export default Cart