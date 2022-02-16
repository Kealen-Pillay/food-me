import { Grid } from "@mui/material";
import React from "react";
import { Appbar } from "./Components/Appbar";
import { FoodCard } from "./Components/FoodCard";

export const FoodDashboard = () => {
  return (
    <div>
      <Appbar />
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        height="100vh"
      >
        <Grid item>
          <FoodCard />
        </Grid>
        <Grid item>
          <FoodCard />
        </Grid>
        <Grid item>
          <FoodCard />
        </Grid>
      </Grid>
    </div>
  );
};
