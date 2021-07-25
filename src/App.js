import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@material-ui/core";

import Header from "./components/Header/Header";
import Homepage from "./components/Homepage";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#808080",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
