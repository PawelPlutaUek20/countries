import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const Header = () => {
  return (
    <AppBar color="inherit" position="static">
      <Toolbar>
        <Typography variant="h6" component="h1">
          Where in the world?
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
