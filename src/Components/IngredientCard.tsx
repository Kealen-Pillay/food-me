import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

interface Props {
    ingredient: string;
}

export const IngredientCard = ({ingredient} : Props) => {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: "#1E1E1E" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, color:"white" }}  gutterBottom>
          {ingredient}
        </Typography>
      </CardContent>
    </Card>
  );
};
