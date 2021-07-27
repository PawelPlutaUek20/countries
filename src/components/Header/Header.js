import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
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
        <IconButton
          color="inherit"
          aria-label="theme"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
