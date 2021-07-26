import { makeStyles, TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: "24px 8px 24px 8px",
    minWidth: 200,
    backgroundColor: theme.palette.background.paper,
    "& .MuiSelect-select:focus": {
      backgroundColor: theme.palette.background.paper,
    },
    "& .Mui-focused": {
      color: theme.palette.text.secondary,
    },
  },
  query: {
    width: 400,
  },
}));

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

const SearchBar = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    query: "",
    region: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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
