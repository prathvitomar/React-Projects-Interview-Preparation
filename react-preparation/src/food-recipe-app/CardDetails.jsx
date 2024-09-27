import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CardDetails() {
  const {id} = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const result = await res.json();  // Properly parse the response to JSON
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    }
    
    fetchData(); 
  }, [id]);

  return (
    <>
      {
        data ? (
          <div className="card-details">
          <img className="post-image" src={data.data.recipe.image_url} alt={data.data.recipe.publisher} />
          <h1>{data.data.recipe.publisher}</h1>
          {
            data.data.recipe.ingredients.map((item)=>(
                <li>{item.description} : quantity - {item.quantity} & unit - {item.unit}</li>
            ))
          }
        </div>
        ) : (
          <div>Loading.... Please Wait..!!!</div>
        )
      }
    </>
  );
}

export default CardDetails;
