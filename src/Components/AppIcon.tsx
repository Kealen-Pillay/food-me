import { createStyles, makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() =>
  createStyles({
    image: {
        width: "50px",
        height: "45px",
    },
  })
);

export const AppIcon = () => {
  const classes = useStyles();
  return (
    <div>
      <img src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/04105190694298f.png" className={classes.image}/>
    </div>
  );
};
