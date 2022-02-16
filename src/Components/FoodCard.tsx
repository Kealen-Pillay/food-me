import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      width: 250,
      marginTop: 20,
    },
    buttons: {
      backgroundColor: "#91bff2",
      "&:hover": {
        backgroundColor: "#91bff2",
      },
      color: "#1E1E1E",
      width: 200,
    },
    media: {
        borderRadius: "5px",
    }
  })
);

export const FoodCard = () => {
  const classes = useStyles();

  return (
    <Card
      sx={{ maxWidth: 345, backgroundColor: "#1E1E1E", color: "white" }}
      className={classes.card}
    >
      <CardHeader title="Recipe" />
      <CardContent className={classes.media}>
        <CardMedia
          component="img"
          height="194"
          image="http://www.properpizza.co.nz/beta/wp-content/uploads/2019/05/URBAN-LIST-Aucklands-Best-Pizza-Dantes.jpg"
          alt="Paella dish"
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
            <Button className={classes.buttons}>
              <Typography>Ingredients</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button className={classes.buttons}>
              <Typography>Recipe</Typography>
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
