import React from 'react'

function Card({
    weather = {}
}) {

    function convertUnixToReadable(unixTimestamp) {
        const date = new Date(unixTimestamp * 1000);
        return date.toLocaleString();
      }

  return (
    <>
    {
        !weather.name ? (
            <div>
                Please Enter City First.
            </div>
        ) : (
            <div>
            <h1>Title : {weather.name}</h1>
            <h4>Wind : Speed - {weather.wind.speed}. Degree - {weather.wind.deg} </h4>
            <h4>Today's Weather Expectation : {weather.weather[0].description} or {weather.weather[0].main}</h4>
            <h4>Sunrise : {convertUnixToReadable(weather.sys.sunrise)}</h4>
            <h4>Sunset : {convertUnixToReadable(weather.sys.sunset)}</h4>
        </div>
        )
    }

    </>
  )
}

export default Card