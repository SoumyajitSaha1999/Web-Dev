import React, { useState } from 'react'
import cartContext from './CartContext'

function CartContextProvider(props) {

  const [items, setItems] = useState([]);

  return (
    <cartContext.Provider value={{items, setItems}}>
        {props.children}
    </cartContext.Provider>
  )
}

export default CartContextProvider