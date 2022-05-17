// filter between liked and self created recipes
import React, { useState } from "react";
import Recipe from "./Recipe";

function RecipeBook({ recipes, onRecipeDislike, isLiked, setIsLiked }) {
  const [increaseLikes, setincreaseLikes] = useState(1);

  function handleChange(e) {
    setincreaseLikes(Number(e.target.value));
  }

  const recipesDisplayed = recipes.map((recipe) => (
    <Recipe
      key={recipe.summary}
      recipe={recipe}
      onRecipeDislike={onRecipeDislike}
      isLiked={isLiked}
      increaseLikes={increaseLikes}
    />
  ));

  setIsLiked(true);

  return (
    <div>
      <input
        type="text"
        placeholder="Increase like by..."
        value={increaseLikes}
        onChange={(e) => handleChange(e)}
      />
      {recipesDisplayed.length === 0
        ? "Recipe Book is currently empty. Go to Random Recipe or Add Recipe to add recipes to the Recipe Book."
        : recipesDisplayed}
    </div>
  );
}

export default RecipeBook;
