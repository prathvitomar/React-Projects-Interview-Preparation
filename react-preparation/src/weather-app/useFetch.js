import { useEffect, useState } from "react"

export default function useWeatherInfo(city){
    const [data, setData] = useState({});
    useEffect(()=> {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`)
        .then((res)=> res.json())
        .then((data)=> setData(data))
        .catch((err)=>console.log(err))
    },[city])

    return data;
}