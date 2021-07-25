import React, { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import CountryCard from "./CountryCard/CountryCard";
import { Container, Grid } from "@material-ui/core";

import data from "../static/data.json";

const Homepage = () => {
  const [countries] = useState(data);

  // useEffect(() => {
  //   fetch("https://restcountries.eu/rest/v2/all")
  //     .then((response) => response.json())
  //     .then((jsonResponse) => setCountries(jsonResponse));
  // }, []);

  return (
    <Container>
      <Grid container justifyContent="space-between">
        <SearchBar />
      </Grid>
      <Grid container spacing={3}>
        {countries.map((country) => (
          <Grid
            item
            container
            xs={12}
            sm={4}
            md={3}
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
