import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cart/cartSlice';

function Product(props) {

  const dispatch = useDispatch();

  return (
    <div className="products-card">
        <img className='products-card-img' src={props.image} alt={props.productName} />
        <div className='child'>
            <h5 className='child-header'>{props.productName}</h5>
            <p className='child-para'>Rs. {props.price}/-</p>
            <button className='child-btn' onClick={(e) => dispatch(addItem({name: props.productName, price:props.price}))}>Add to cart</button>
        </div>
    </div>
  )
}

export default Product