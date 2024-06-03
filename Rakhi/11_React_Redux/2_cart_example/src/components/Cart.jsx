import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
  
  const item = useSelector(state => state);
  console.log("Items", item); // Items - {cart: Array(0)}
                                           // cart: Array(0)
                                           // length: 0

  const total = item.cart.reduce((a,b) => a + b.price,0)
                                           
  return (
    <div className='cart-main'>
        <h3 className='cart'>Total Items: { item.cart.length } ( Rs. {total} )/-</h3>
    </div>
  )
}

export default Cart