import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";

function RandomRecipe({ setRandomRecipe, recipe }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const {
    title,
    readyInMinutes,
    image,
    summary,
    extendedIngredients,
    instructions,
    spoonacularSourceUrl,
  } = recipe;

  function handleClick() {
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setRandomRecipe({
          title: data.title,
          readyIn: data.readyInMinutes,
          image: data.image,
          summary: data.summary,
          instructions: data.instructions,
          ingredients: data.extendedIngredients,
          sourceUrl: data.spoonacularSourceUrl,
        });
        setIsLoaded(!isLoaded);
      });
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Get Random Recipe
      </button>
      {isLoaded ? (
        <Recipe
          title={title}
          readyInMinutes={readyInMinutes}
          image={image}
          summary={summary}
          extendedIngredients={extendedIngredients}
          instructions={instructions}
          spoonacularSourceUrl={spoonacularSourceUrl}
        />
      ) : null}
    </div>
  );
}

export default RandomRecipe;
