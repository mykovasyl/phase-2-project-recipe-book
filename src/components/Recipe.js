import React, { useState } from "react";

function Recipe({ recipe, onRecipeLike, onRecipeDislike }) {
  const {
    title,
    readyIn,
    image,
    summary,
    ingredients,
    instructions,
    sourceUrl,
    liked,
    id = null,
  } = recipe;
  const mappedIngredients = ingredients.map((ingredient) => (
    <li key={ingredient.name}>
      {ingredient.name}: {ingredient.amount} {ingredient.unit}
    </li>
  ));
  const [likedRecipe, setLikedRecipe] = useState(liked);

  function handleClick() {
    setLikedRecipe(!liked);
    if (!liked) {
      onRecipeLike(!liked);
    } else if (liked) {
      onRecipeDislike(id);
    }
  }

  return (
    <div>
      <h1>{title}</h1>
      {likedRecipe ? (
        id ? (
          <button type="button" onClick={handleClick}>
            Delete it!
          </button>
        ) : null
      ) : (
        <button type="button" onClick={handleClick}>
          Like it!
        </button>
      )}
      <h3>Ready in {readyIn} minutes</h3>
      <img src={image} alt="image of food"></img>
      <h3>Summary:</h3>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
      <h3>Ingredients:</h3>
      <ul>{mappedIngredients}</ul>
      <h3>Instructions:</h3>
      <div dangerouslySetInnerHTML={{ __html: instructions }} />
      <p>
        For more information visit: <a href={sourceUrl}>Spoonacular</a>
      </p>
    </div>
  );
}

export default Recipe;
