import React, { useContext, useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import CountryCard from "./CountryCard/CountryCard";
import { Container, Grid } from "@material-ui/core";
import { CountriesContext } from "../contextHelpers/CountriesContex";
import { useStyles } from "./Homepage.style";

const Homepage = () => {
  const classes = useStyles();
  const { countryList } = useContext(CountriesContext);

  const [filteredCountryList, setFilteredCountryList] = useState([]);

  const updateCountryList = async (input) => {
    setFilteredCountryList(
      countryList
        .filter((country) => country.name.toLowerCase().includes(input.query))
        .filter((country) => country.region.includes(input.region))
    );
  };

  useEffect(() => {
    setFilteredCountryList(countryList);
  }, [countryList]);

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid
        container
        justifyContent="space-between"
        className={classes.searchBar}
      >
        <SearchBar updateCountryList={updateCountryList} />
      </Grid>
      <Grid container spacing={3} className={classes.content}>
        {filteredCountryList.map((country) => (
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
