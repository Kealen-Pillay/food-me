import React, { useState } from "react";
import { FoodCard } from "./Components/FoodCard";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { alpha, styled } from "@mui/material/styles";
import { Fab, Grid, InputBase } from "@mui/material";

import axios from "axios";
import { AppIcon } from "./Components/AppIcon";

export const FoodDashboard = () => {
  const [recipeList, setRecipeList] = useState([]);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const APP_ID = "de373656";
  const APP_KEY = "78dff67e91d43b69225411d9d98197ad";

  const Appbar = () => {
    const [searchField, setSearchField] = useState("");

    const fetchRecipe = async (searchString: string) => {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setRecipeList(response.data.hits);
    };
    const searchRecipe = (e: React.ChangeEvent<any>) => {
      fetchRecipe(searchField);
    };

    const onTextChange = (e: React.ChangeEvent<any>) => {
      e.preventDefault();
      setSearchField(e.target.value);
    };

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#1E1E1E" }}>
          <Toolbar>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Grid container direction="row" alignItems="center" spacing={1}>
                  <Grid item>
                    <AppIcon />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                    >
                      FOODME
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Search>
                  <Fab
                    sx={{ height: 40, width: 40, margin: 1 }}
                    onClick={searchRecipe}
                  >
                    <SearchIcon />
                  </Fab>
                  <StyledInputBase
                    placeholder="Search"
                    inputProps={{ "aria-label": "search" }}
                    onChange={onTextChange}
                  />
                </Search>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    );
  };

  return (
    <div>
      <Appbar />
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        height="100vh"
      >
        {recipeList.map((recipeObj) => {
          return (
            <Grid item>
              <FoodCard recipeObj={recipeObj} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
