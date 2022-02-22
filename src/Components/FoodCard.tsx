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
  CardActions,
} from "@mui/material";
import { createStyles, makeStyles, styled } from "@mui/styles";
import { useState } from "react";
import { IngredientCard } from "./IngredientCard";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
}));

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      width: 300,
      marginTop: 20,
      marginBottom: 20,
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
    expandIcon: {
      color: "white",
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
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        sx={{ maxWidth: 345, backgroundColor: "#1E1E1E" }}
        className={classes.card}
        variant="outlined"
      >
        <CardMedia
          component="img"
          height="150"
          image={recipeObj.recipe.image}
        />
        <CardContent>
          {expanded ? (
            <Typography variant="body1" sx={{ color: "white" }}>
              {recipeObj.recipe.label}
            </Typography>
          ) : (
            <Typography noWrap variant="body1" sx={{ color: "white" }}>
              {recipeObj.recipe.label}
            </Typography>
          )}
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon className={classes.expandIcon} />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Grid
              container
              alignItems="flex-start"
              direction="column"
              spacing={2}
              height="100%"
            >
              <Grid item>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
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
                    <Typography
                      sx={{ color: "white", marginLeft: 2 }}
                      variant="h6"
                    >
                      Ingredients
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Grid item>
                    <Fab
                      className={classes.buttons}
                      onClick={() => window.open(recipeObj.recipe.url)}
                    >
                      <LocalDiningIcon />
                    </Fab>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{ color: "white", marginLeft: 2 }}
                      variant="h6"
                    >
                      Recipe
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </Card>

      {/* <Grid item>
            <Grid
              container
              alignItems="center"
              direction="row"
              justifyContent="space-around"
              height="100%"
            >
              <Grid item>
                <Fab onClick={() => setOpen(true)} className={classes.buttons}>
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
          </Grid> */}
    </>
  );
};
