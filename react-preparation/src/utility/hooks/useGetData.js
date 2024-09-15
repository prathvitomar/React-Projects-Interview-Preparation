import React, { useEffect, useState } from 'react'

function useGetData(url) {
    const [data, setData] = useState([]);
    useEffect(()=> {
        fetch(url)
        .then((res) => res.json())
        .then((res) =>setData(res))
    },[url])

    return data;
}

export default useGetData