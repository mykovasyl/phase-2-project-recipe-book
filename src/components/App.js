import React, { useState } from "react";
import RandomRecipe from "./RandomRecipe";
import RecipeForm from "./RecipeForm";
import RecipeBook from "./RecipeBook";
import NavBar from "./NavBar";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";

function App() {
  const [recipe, setRecipe] = useState({
    title: '',
    readyIn: '',
    image: '',
    summary: '',
    instructions: '',
    ingredients: [],
    sourceUrl: ''
  })
  
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/randomrecipe">
          <RandomRecipe setRandomRecipe={setRecipe} recipe={recipe}/>
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
