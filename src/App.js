import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@material-ui/core";

import Header from "./components/Header/Header";
import Homepage from "./components/Homepage";
import CountryDetailsPage from "./components/CountryDetailsPage";
import CountriesContextProvider from "./contextHelpers/CountriesContex";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#808080",
      },
    },
    typography: {
      fontFamily: "Nunito Sans, Roboto, sans-serif",
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 625,
        md: 920,
        lg: 1200,
        xl: 1340,
      },
    },
    overrides: {
      MuiTypography: {
        body2: {
          "& b": {
            fontWeight: 600,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router basename={process.env.PUBLIC_URL}>
        <CountriesContextProvider>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/:countryName" component={CountryDetailsPage} />
          </Switch>
        </CountriesContextProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
