import React from 'react'
import Cart from './components/Cart'
import Product from './components/Product'
import products from './products.json'

function App() {
  return (
    <div>
      <Cart />
      <div className='products'>{products.map((product) => <Product {...product} />)}</div>
    </div>
  )
}

export default App