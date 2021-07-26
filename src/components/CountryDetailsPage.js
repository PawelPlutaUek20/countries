import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import React, { useState } from "react";

import data from "../static/data.json";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.down("sm")]: {
    grid: {
      flexGrow: 0,
      flexBasis: "100%",
      maxWidth: "100%",
      marginBottom: 50,
    },
    img: {
      width: "100%",
      height: "auto",
    },
    borderCountries: {
      width: "100%",
      marginBottom: 10,
    },
    content: {
      marginBottom: 30,
    },
  },
  [theme.breakpoints.up("md")]: {
    grid: {
      flexGrow: 0,
      flexBasis: "45%",
      maxWidth: "45%",
      alignContent: "space-evenly",
    },
    img: {
      width: "100%",
      height: 430,
    },
    borderCountries: {
      marginRight: 16,
    },
  },
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    minWidth: 300,
  },
  borderCountryItem: {
    padding: "6px 16px",
    margin: "4px 8px 4px 0",
    textAlign: "center",
  },
  back: {
    width: 100,
    textAlign: "center",
    padding: 8,
  },
  backContainer: {
    height: 175,
    alignItems: "center",
  },
}));

const CountryDetailsPage = ({ match }) => {
  const classes = useStyles();
  const [country] = useState(
    data.find((element) => element.name === match.params.country)
  );

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid container className={classes.backContainer}>
        <Link color="inherit" underline="none" component={RouterLink} to="/">
          <Paper elevation={3} className={classes.back}>
            ← &nbsp; Back
          </Paper>
        </Link>
      </Grid>
      <Grid container justifyContent="space-between">
        <Grid item className={classes.grid}>
          <img alt={country.name} src={country.flag} className={classes.img} />
        </Grid>
        <Grid item container className={classes.grid}>
          <Grid item xs={12} className={classes.content}>
            <Typography gutterBottom variant="h4">
              <b>{country.name}</b>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.content}>
            <Typography gutterBottom variant="body2">
              <b>Native Name:</b> {country.nativeName}
            </Typography>
            <Typography gutterBottom variant="body2">
              <b>Population:</b> {country.population.toLocaleString()}
            </Typography>
            <Typography gutterBottom variant="body2">
              <b>Region:</b> {country.region}
            </Typography>
            <Typography gutterBottom variant="body2">
              <b>Sub Rebion:</b> {country.subregion}
            </Typography>
            <Typography gutterBottom variant="body2">
              <b>Capital:</b> {country.capital}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.content}>
            <Typography gutterBottom variant="body2">
              <b>Top Level Domain:</b> {country.topLevelDomain.join(" ")}
            </Typography>
            <Typography gutterBottom variant="body2">
              <b>Currencies:</b>{" "}
              {country.currencies.map((currency) => currency.name).join(", ")}
            </Typography>
            <Typography gutterBottom variant="body2">
              <b>Languages:</b>{" "}
              {country.languages.map((language) => language.name).join(", ")}
            </Typography>
          </Grid>
          <Grid item container xs={12} alignItems="center">
            <Typography variant="body2" className={classes.borderCountries}>
              <b>Border Countries:</b>
            </Typography>
            {country.borders.map((country) => (
              <Paper
                key={country}
                elevation={2}
                className={classes.borderCountryItem}
              >
                <Typography variant="body2">
                  {data.find((element) => element.alpha3Code === country).name}
                </Typography>
              </Paper>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CountryDetailsPage;
