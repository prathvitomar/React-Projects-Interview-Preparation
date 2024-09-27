import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

function MainFoodRecipeApp() {
  const [recipe, setRecipe] = useState("");
  const [recipeData, setRecipeData] = useState("");
  const [allRecipe, setAllRecipe] = useState(null)


  useEffect(() => {
    async function getRecipeData() {
      if (!recipeData) return;
      try {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${recipeData}`);
        const res = await response.json(); 
        if (res.data && res.data.recipes) {
          setAllRecipe(res.data.recipes); 
        } else {
          setAllRecipe([]); 
        }
      } catch (error) {
        console.error("Error fetching data:", error); 
      }
    }

    getRecipeData();
  }, [recipeData]);

  const searchRecipe = () => {
    setRecipeData(recipe);
    console.log(recipeData);
  }

  console.log(recipe);

  return (
    
    <>
            <div>
            <div>
              <input type="text" onChange={(e)=> setRecipe(e.target.value)} />
              <button onClick={searchRecipe}>Search</button>
            </div>
        {
          allRecipe ? (
            <div>
              {
                allRecipe && allRecipe.map((item)=>(
                  <div key={item.id}>
                    <Link to={`${item.id}`}>
                      <Card post={item} />
                    </Link>
                  </div>
                ))
              }
            </div>
          ) : (
            <div>Please Enter Recipe to see results</div>
          )
        }
        </div>
    </>
  );
}

export default MainFoodRecipeApp;
