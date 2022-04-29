import React, { useState } from "react";

function RecipeForm({ onFormChange, recipe, onFormSubmit }) {
  const [count, setCount] = useState(1);
  const [ingredientInputs, setIngredientInputs] = useState([
    <>
      <input type="text" className="ingredient" onChange={handleChange}>
        Ingredient
      </input>
      <br></br>
      <input type="text" className="amount" onChange={handleChange}>
        Amount
      </input>
      <br></br>
      <input type="text" className="unit" onChange={handleChange}>
        Unit
      </input>
      <br></br>
    </>,
  ]);
  // const newIngredientsArray = ingredientInputs.map((input) => (
  //   <>
  //     <input
  //       key={count + 1}
  //       type="text"
  //       id="ingredient"
  //       onChange={handleChange}
  //     ></input>
  //     <input
  //       key={count + 100}
  //       type="text"
  //       className="amount"
  //       onChange={handleChange}
  //     ></input>
  //     <input
  //       key={count + 1000}
  //       type="text"
  //       className="unit"
  //       onChange={handleChange}
  //     ></input>
  //   </>
  // ));

  function handleChange(e) {
    onFormChange({ ...recipe, [e.target.name]: e.target.value });
  }

  function handleIngredientAdd() {
    setCount(count + 1);
    setIngredientInputs(newIngredientsArray);
  }

  return (
    <div>
      <form>
        <label>Recipe Name:</label>
        <input type="text" id="title" onChange={handleChange}></input>
        <br></br>
        <label>Summary:</label>
        <input type="text" id="summary" onChange={handleChange}></input>
        <br></br>
        <label>Image:</label>
        <input type="text" id="image" onChange={handleChange}></input>
        <br></br>
        <label>Ingredients:</label>
        {ingredientInputs}
        <button type="button" onClick={handleIngredientAdd}>
          <br></br>
          Add more ingredients
        </button>
        <br></br>
        <label>Instructions:</label>
        <input type="text" id="instructions" onChange={handleChange}></input>
        <br></br>
      </form>
    </div>
  );
}

export default RecipeForm;
