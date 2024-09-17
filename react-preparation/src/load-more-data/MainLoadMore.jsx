import React, {useState, useEffect} from 'react'
import Card from './Card';

function MainLoadMore() {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(20);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        try {
            fetch(`https://dummyjson.com/products?limit=${count}`)
            .then((res)=> res.json())
            .then(res => {
                setData(res.products)
                setLoading(false)
            })
        } catch (error) {
            console.log(error)
        }
    },[count])

    const loadMore = ()=> {
        if(count <=100){
            setCount(prev => prev += 20)
        }
    }
    
    return loading ? (<div>Loading....</div>) : (
        <>
        {
            data.map((product)=>(
                <div className='flex wrap' key={product.id}>
                    <Card product={product} />
                </div>
            ))
        }
        {
            count !== 100 ? (<button type='button' onClick={loadMore}>Load 20 more</button>) : <div>No More Data to see</div> 
        }      
        </>
    )
}

export default MainLoadMore