import React, { useState } from "react";
import RandomRecipe from "./RandomRecipe";
import RecipeForm from "./RecipeForm";
import RecipeBook from "./RecipeBook";
import NavBar from "./NavBar";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";

function App() {
  const [recipe, setRecipe] = useState({
    title: "",
    readyIn: "",
    image: "",
    summary: "",
    instructions: "",
    ingredients: [],
    sourceUrl: "",
  });

  function addRandomRecipe(liked) {
    console.log(liked);
    if (liked === true) {
      fetch("http://localhost:3001/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      })
        .then((resp) => resp.json())
        .then((data) => console.log(data));
    }
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/randomrecipe">
          <RandomRecipe
            setRandomRecipe={setRecipe}
            recipe={recipe}
            onRecipeLike={addRandomRecipe}
          />
        </Route>
        <Route path="/recipelist">
          <RecipeBook />
        </Route>
        <Route path="/recipeform">
          <RecipeForm />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
