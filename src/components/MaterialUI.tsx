import React from "react";
import { Button, makeStyles, Typography, Grid, Paper } from "@material-ui/core";

export const MaterialUI = () => {
  const useStyles = makeStyles({
    btnStyle: {
      background: "#66FF33",
      padding: "3px 50px",
    },
  });

  const classes = useStyles();
  return (
    <div>
      <Button className={classes.btnStyle} variant="contained" color="primary">
        Button
      </Button>
    </div>
  );
};
