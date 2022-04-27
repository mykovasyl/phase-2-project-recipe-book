// filter between liked and self created recipes
import React from "react";
import Recipe from "./Recipe";

function RecipeBook({ recipes, onRecipeDislike }) {
  const recipesDisplayed = recipes.map((recipe) => (
    <Recipe
      key={recipe.summary}
      recipe={recipe}
      onRecipeDislike={onRecipeDislike}
    />
  ));

  return <div>{recipesDisplayed}</div>;
}

export default RecipeBook;
