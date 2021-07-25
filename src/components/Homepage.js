import React, { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import CountryCard from "./CountryCard/CountryCard";
import { Container, Grid, makeStyles } from "@material-ui/core";

import data from "../static/data.json";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.only("xs")]: {
    row: {
      flexGrow: 0,
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
  [theme.breakpoints.only("sm")]: {
    row: {
      flexGrow: 0,
      maxWidth: "50%",
      flexBasis: "50%",
    },
  },
  [theme.breakpoints.only("md")]: {
    row: {
      flexGrow: 0,
      maxWidth: "33.333333%",
      flexBasis: "33.333333%",
    },
  },
  [theme.breakpoints.up("lg")]: {
    row: {
      flexGrow: 0,
      maxWidth: "25%",
      flexBasis: "25%",
    },
  },
}));

const Homepage = () => {
  const classes = useStyles();
  const [countries] = useState(data);

  // useEffect(() => {
  //   fetch("https://restcountries.eu/rest/v2/all")
  //     .then((response) => response.json())
  //     .then((jsonResponse) => setCountries(jsonResponse));
  // }, []);

  return (
    <Container style={{ minWidth: 300 }}>
      <Grid container justifyContent="space-between">
        <SearchBar />
      </Grid>
      <Grid container spacing={3}>
        {countries.map((country) => (
          <Grid
            item
            container
            className={classes.row}
            justifyContent="center"
            key={country.name}
          >
            <CountryCard country={country} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Homepage;
