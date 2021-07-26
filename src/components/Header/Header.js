import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: {
    minWidth: 300,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar color="inherit" position="static" className={classes.container}>
      <Toolbar>
        <Typography variant="h6" component="h1">
          <b>Where in the world?</b>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
