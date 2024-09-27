import React, { useState, useEffect } from "react";
import useWeatherInfo from "./useFetch";
import Search from "./Search";
import Card from "./Card";

function MainWeatherApp() {
    const [city, setCity] = useState("");
    const [submittedCity, setSubmittedCity] = useState("");  
    const data = useWeatherInfo(submittedCity);
  
    function cityName(name) {
      setCity(name);
    }
  
    function submitName() {
      setSubmittedCity(city);
    }
  
    return (
      <div>
        <Search
          onChange={cityName} 
          onClick={submitName}
        />
        <Card weather={data} />
      </div>
    );
  }

export default MainWeatherApp;
