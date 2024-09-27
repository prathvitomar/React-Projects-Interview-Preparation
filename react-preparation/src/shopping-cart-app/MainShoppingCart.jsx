import React, { useEffect, useState } from 'react'

function MainShoppingCart() {
    const [products, setProducts] = useState(null);

    async function fetchProducts() {
        try {
            const data = await fetch(`https://fakestoreapi.com/products`)
            const res = await data.json();
            setProducts(res);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() =>{
       fetchProducts(); 
    },[])

  return (
    <>
    <div>
        {
            products && products.length ? (
                products.map((item)=>(
                    <div key={item.id}>
                        <Cart product={item} />
                    </div>
                ))
            ) : (
                <div>Please Wait.......</div>
            )
        }
    </div>
    </>
  )
}

export default MainShoppingCart