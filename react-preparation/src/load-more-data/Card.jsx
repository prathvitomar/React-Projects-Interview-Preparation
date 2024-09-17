import React, { useEffect, useState } from 'react'
import './styles.css'
import { useParams } from 'react-router-dom';

function Card({product}) {
    
    return (
        <>
        <div className='card'>
            <label htmlFor={product.id}></label>
            <img width="100px" src={product.images} alt={product.images} />
            <h3>{product.title}</h3>
        </div>
        </>
    )
}

export default Card