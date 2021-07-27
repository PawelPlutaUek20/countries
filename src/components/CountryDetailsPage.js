import { Container, Grid, Typography, Paper } from "@material-ui/core";
import { Link as RouterLink, useParams } from "react-router-dom";
import Link from "@material-ui/core/Link";
import React, { useState, useContext, useEffect } from "react";
import { CountriesContext } from "../contextHelpers/CountriesContex";
import { useStyles } from "./CountryDetailsPage.style";

const initialState = {
  name: "",
  flag: "",
  nativeName: "",
  currencies: [],
  languages: [],
  borders: [],
  population: 0,
  region: "",
  subregion: "",
  capital: "",
  topLevelDomain: [],
};

const CountryDetailsPage = () => {
  const classes = useStyles();
  const { countryList } = useContext(CountriesContext);
  const { countryName } = useParams();

  const [country, setCountry] = useState(initialState);
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    if (countryList.length) {
      const countryEl = countryList.find(
        (element) => element.name === countryName
      );
      if (countryEl) {
        setCountry(countryEl);
        setBorderCountries(
          countryEl.borders.map(
            (country) =>
              countryList.find((element) => element.alpha3Code === country).name
          )
        );
      }
    }
  }, [countryList, countryName]);

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
            {borderCountries.map((country) => (
              <Paper
                key={country}
                elevation={2}
                className={classes.borderCountryItem}
              >
                <Typography variant="body2">{country}</Typography>
              </Paper>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CountryDetailsPage;
