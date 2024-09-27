import React from 'react'
import './styles.css'
import { useSelector } from 'react-redux'

function Cart({product}) {
    const {productData} = useSelector(state => state.cart)

    return (
        <>
        <div className='card'>
          <img className='post-iamge' src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <h3>{product.price}</h3>
            <p>{product.description}</p>
            <h5>{product.category}</h5>
            <button onClick={AddToCart}>AddToCart</button>
        </div>
        </>
    )
}

export default Cart