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

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      width: 350,
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
      <Dialog open={open}>
        <DialogTitle>Ingredients</DialogTitle>
        <DialogContent>{
          recipeObj.recipe.ingredients.map((ingredient:any) => {
            return <Typography>
              {ingredient.text}
            </Typography>
          })}</DialogContent>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Dialog>
      <Card
        sx={{ maxWidth: 345, backgroundColor: "#1E1E1E", color: "white" }}
        className={classes.card}
      >
        <CardHeader
          title={recipeObj.recipe.label}
          titleTypographyProps={{ variant: "h6" }}
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
