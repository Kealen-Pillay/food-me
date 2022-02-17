import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useState } from "react";
import { IngredientCard } from "./IngredientCard";

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      width: 450,
      height: 420,
      marginTop: 20,
    },
    buttons: {
      backgroundColor: "#91bff2",
      "&:hover": {
        backgroundColor: "#91bff2",
      },
      color: "#1E1E1E",
      width: 300,
    },
    media: {
      borderRadius: "5px",
    },
    dialogCloseButton: {
      backgroundColor: "#1E1E1E",
      "&:hover": {
        backgroundColor: "#1E1E1E",
      },
      margin:10,
    },
  })
);

interface Props {
  recipeObj: any;
}

export const FoodCard = ({ recipeObj }: Props) => {
  console.log(recipeObj.recipe);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog open={open} PaperProps={{style:{backgroundColor: "#91bff2"}}}>
        <DialogTitle>Ingredients</DialogTitle>
        <DialogContent>
          <Grid container direction="column" spacing={1}>
            {recipeObj.recipe.ingredients.map((ingredient: any) => {
              return (
                <Grid item>
                  <IngredientCard ingredient={ingredient.text} />
                </Grid>
              );
            })}
          </Grid>
        </DialogContent>
        <Button variant="contained" onClick={() => setOpen(false)} className={classes.dialogCloseButton}>Close</Button>
      </Dialog>
      <Card
        sx={{ maxWidth: 500, backgroundColor: "#1E1E1E", color: "white" }}
        className={classes.card}
      >
        <CardHeader
          title={recipeObj.recipe.label}
          titleTypographyProps={{ variant: "subtitle1" }}
        />
        <CardContent className={classes.media}>
          <CardMedia
            component="img"
            height="194"
            image={recipeObj.recipe.image}
          />
        </CardContent>

        <CardContent>
          <Grid
            container
            alignItems="center"
            direction="column"
            justifyContent="space-between"
            spacing={1}
          >
            <Grid item>
              <Button className={classes.buttons} onClick={() => setOpen(true)}>
                <Typography>Ingredients</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.buttons}
                onClick={() => window.open(recipeObj.recipe.url)}
              >
                <Typography>Recipe</Typography>
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
