import React from "react";

function BookRecipe({
  recipe,
  onRecipeLike,
  onRecipeDislike,
  setLikedRecipe,
  likedRecipe,
}) {
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

  function handleClick() {
    setLikedRecipe(!liked);
    if (!liked) {
      onRecipeLike(recipe);
    } else if (liked) {
      onRecipeDislike(id);
    }
  }

  let likeDeleteButton = liked ? (
    <button type="button" onClick={handleClick}>
      Delete it!
    </button>
  ) : (
    <button type="button" onClick={handleClick}>
      Like it!
    </button>
  );

  // if (isRecipeBook || likedRecipe) {
  //   likeDeleteButton = (
  //     <button type="button" onClick={handleClick}>
  //       Delete it!
  //     </button>
  //   );
  // } else {
  //   likeDeleteButton = (
  //     <button type="button" onClick={handleClick}>
  //       Like it!
  //     </button>
  //   );
  // }

  return (
    <div>
      <h1>{title}</h1>
      {likeDeleteButton}
      {/* {likedRecipe ? (
        id ? (
          <button type="button" onClick={handleClick}>
            Delete it!
          </button>
        ) : null
      ) : (
        !isRecipeBook && (
          <button type="button" onClick={handleClick}>
            Like it!
          </button>
        )
      )} */}

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

export default BookRecipe;
