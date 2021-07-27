import { TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./SearchBar.style";
import React, { useState } from "react";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

const SearchBar = ({ updateCountryList }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    query: "",
    region: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    updateCountryList({ ...values, [prop]: event.target.value });
  };

  return (
    <>
      <TextField
        id="query-text"
        placeholder="Search for a country..."
        className={`${classes.formControl} ${classes.query}`}
        value={values.query}
        onChange={handleChange("query")}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <TextField
        id="region-select"
        select
        label="Find by Region"
        className={classes.formControl}
        value={values.region}
        onChange={handleChange("region")}
        SelectProps={{
          native: true,
        }}
        variant="outlined"
      >
        <option aria-label="None" value="" />
        {regions.map((option, optionIdx) => (
          <option key={optionIdx} value={option}>
            {option}
          </option>
        ))}
      </TextField>
    </>
  );
};

export default SearchBar;
