import React, { useState } from "react";

function Recipe({ recipe, onRecipeLike }) {
  const {
    title,
    readyIn,
    image,
    summary,
    ingredients,
    instructions,
    sourceUrl,
  } = recipe;
  const [liked, setLiked] = useState(false);
  const mappedIngredients = ingredients.map((ingredient) => (
    <li key={ingredient.name}>
      {ingredient.name}: {ingredient.amount} {ingredient.unit}
    </li>
  ));

  function handleClick() {
    setLiked(!liked);
    onRecipeLike(!liked);
  }

  return (
    <div>
      <h1>{title}</h1>
      <button type="button" onClick={handleClick}>
        {liked ? "Delete it!" : "Like it!"}
      </button>
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
