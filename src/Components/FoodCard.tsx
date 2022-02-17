import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Fab,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useState } from "react";
import { IngredientCard } from "./IngredientCard";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      width: 300,
      height: 320,
      marginTop: 20,
    },
    buttons: {
      backgroundColor: "#658feb",
      "&:hover": {
        backgroundColor: "#c4c4c4",
      },
      color: "#1E1E1E",
    },
    dialogCloseButton: {
      backgroundColor: "#1E1E1E",
      "&:hover": {
        backgroundColor: "#1E1E1E",
      },
      margin: 10,
    },
    media: {
      borderRadius: "2px",
      overflow: "hidden",
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
      <Dialog
        open={open}
        PaperProps={{ style: { backgroundColor: "#658feb" } }}
      >
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
        <Button
          variant="contained"
          onClick={() => setOpen(false)}
          className={classes.dialogCloseButton}
        >
          Close
        </Button>
      </Dialog>
      <Card
        variant="outlined"
        sx={{ maxWidth: 345, backgroundColor: "#1E1E1E", color: "white" }}
        className={classes.card}
      >
        <CardMedia
          component="img"
          height="140"
          image={recipeObj.recipe.image}
        />
        <CardContent>
          <Grid container direction="column" alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography gutterBottom variant="h6" component="div">
                {recipeObj.recipe.label}
              </Typography>
            </Grid>
            <Grid item>
              <CardContent>
                <Grid
                  container
                  alignItems="center"
                  direction="row"
                  justifyContent="space-around"
                  spacing={1}
                >
                  <Grid item>
                    <Fab
                      onClick={() => setOpen(true)}
                      className={classes.buttons}
                    >
                      <FormatListBulletedIcon />
                    </Fab>
                  </Grid>
                  <Grid item>
                    <Fab
                      className={classes.buttons}
                      onClick={() => window.open(recipeObj.recipe.url)}
                    >
                      <LocalDiningIcon />
                    </Fab>
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
