import { Grid } from "@mui/material";
import React from "react";
import { FoodCard } from "./Components/FoodCard";

export const FoodDashboard = () => {
  return (
      <Grid container direction="row" justifyContent="space-around" alignItems="center">
        <Grid item>
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </Grid>
      </Grid>
  );
};
