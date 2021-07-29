import { Container, Grid, Typography, Paper } from "@material-ui/core";
import { Link as RouterLink, useHistory, useParams } from "react-router-dom";
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
  const history = useHistory();
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

  const formatCountryInfos = (infos) =>
    Object.entries(infos).map(([k, v]) => (
      <Typography gutterBottom variant="body2">
        <b>{k}:</b> {v}
      </Typography>
    ));

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid container className={classes.backContainer}>
        <Link
          color="inherit"
          underline="none"
          component={RouterLink}
          onClick={() => history.goBack()}
        >
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
            {formatCountryInfos({
              "Native Name": country.nativeName,
              "Population": country.population.toLocaleString(),
              "Region": country.region,
              "Sub Region": country.subregion,
              "Capital": country.capital,
            })}
          </Grid>
          <Grid item xs={12} sm={6} className={classes.content}>
            {formatCountryInfos({
              "Top Level Domain": country.topLevelDomain.join(" "),
              "Currencies": country.currencies
                .map((currency) => currency.name)
                .join(", "),
              "Languages": country.languages
                .map((language) => language.name)
                .join(", "),
            })}
          </Grid>
          <Grid item container xs={12} alignItems="center">
            <Typography variant="body2" className={classes.borderCountries}>
              <b>Border Countries:</b>
            </Typography>
            {borderCountries.map((country) => (
              <Link
                key={country}
                color="inherit"
                underline="none"
                component={RouterLink}
                to={country}
              >
                <Paper elevation={2} className={classes.borderCountryItem}>
                  <Typography variant="body2">{country}</Typography>
                </Paper>
              </Link>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CountryDetailsPage;
