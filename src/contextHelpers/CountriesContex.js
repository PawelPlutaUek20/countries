import React, { createContext, useEffect, useState } from "react";

export const CountriesContext = createContext();

const CountriesContextProvider = (props) => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setCountryList(jsonResponse);
      });
  }, []);

  return (
    <CountriesContext.Provider value={{ countryList }}>
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesContextProvider;
