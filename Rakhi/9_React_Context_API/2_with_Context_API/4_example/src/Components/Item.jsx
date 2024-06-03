import React from 'react'
import { useContext } from 'react'
import cartContext from '../Context/CartContext'

function Item(props) {

  const cart = useContext(cartContext);
  console.log(cart);

  return (
    <div>
        <h2>{props.name}</h2>
        <p>${props.price}</p>
        <button onClick={() => cart.setItems([...cart.items, {name: props.name, price: props.price}])}>Add To Cart</button>
    </div>
  )
}

export default Item