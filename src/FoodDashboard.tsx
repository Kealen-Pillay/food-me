import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Appbar } from "./Components/Appbar";
import { FoodCard } from "./Components/FoodCard";

var recipes: any[] = [];

export const setRecipes = (recipeList: any[]) => {
  recipes = recipeList;
  console.log(recipes);
};

export const FoodDashboard = () => {
  const [recipesDisplaying, setRecipesDisplaying] = useState(recipes);

  return (
    <div>
      <Appbar />
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        height="100vh"
      >
        {recipes.length &&
          recipes.map((recipe) => {
            return <FoodCard />;
          })}
      </Grid>
    </div>
  );
};
