import React, { useEffect, useState } from 'react'
import Cart from './Cart';
import { useNavigate } from 'react-router-dom';

function MainShoppingCart() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function fetchProducts() {
        setLoading(true);
        try {
            const data = await fetch(`https://fakestoreapi.com/products`)
            const res = await data.json();
            setProducts(res);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(() =>{
       fetchProducts();
    },[])

  return (
    <>
    <div className='display-items'>
        <button onClick={()=> navigate('favorites')}>See your Added Favorites</button>
        {
            !loading ? (
                products.map((item)=>(
                    <div key={item.id}>
                        <Cart product={item} />
                    </div>
                ))
            )
             : (
                <div>Please Wait.......</div>
            )
        }
    </div>
    </>
  )
}

export default MainShoppingCart