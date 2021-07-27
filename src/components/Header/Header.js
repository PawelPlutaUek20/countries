import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { useStyles } from "./Header.style";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import React from "react";

const Header = ({ darkMode, setDarkMode }) => {
  const classes = useStyles();

  return (
    <AppBar color="inherit" position="static" className={classes.container}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" component="h1">
          <b>Where in the world?</b>
        </Typography>
        <Button
          color="inherit"
          className={classes.button}
          onClick={() => setDarkMode(!darkMode)}
          startIcon={darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        >
          <Typography variant="body2">
            <b>{darkMode ? "Light Mode" : "Dark Mode"}</b>
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
