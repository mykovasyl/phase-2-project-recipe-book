import React from "react";

function Recipe(/*{ name, readyInMinutes, image, summary, ingredients, instructions, spoonacularSourceUrl }*/) {

  //const ingredients =  extendedIngredients.map(ingredient => <li>{ingredient.name}: {ingredient.amount}{ingredient.unit}</li>}
  return (
    <div>
      <h1>{"Name"}</h1><h3>in {"readyInMinutes"} minutes</h3>
      <img src='image' alt="image of food"></img>
      <h3>Summary:</h3>
      <p>{'summary'}</p>
      <h3>Ingredients:</h3>
      <ul>{'ingredients'}</ul>
      <h3>Instructions:</h3>
      <p>{'instructions'}</p>
      <p>For more information visit: <a href="spoonacularSourceUrl">Spoonacular</a></p>
    </div>
  );
}

export default Recipe;
