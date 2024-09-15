import React, { useEffect, useState } from 'react'
import useGetData from '../utility/hooks/useGetData';
import Accordian from './Accordian';
import Loader from '../utility/loader/Loader';
import allData from './data'

function MainAccordion() {
    const postData = allData;
    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(postData)
    },[postData])

    return (
        <>
        {
            data.map((item)=>(
                <div className='' key={item.id}>
                    <Accordian
                    title={item.title}
                    description={item.body}
                    />
                </div>
            ))
        }
        </>
    )
}

export default MainAccordion