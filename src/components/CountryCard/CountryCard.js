import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 264,
  },
  media: {
    height: 160,
  },
});

const CountryCard = ({ country }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={country.flag}
          title={country.name}
        />
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            <b>{country.name}</b>
          </Typography>
          <Typography variant="body2">
            <b>Population</b> {country.population}
          </Typography>
          <Typography variant="body2">
            <b>Region</b> {country.region}
          </Typography>
          <Typography variant="body2">
            <b>Capital</b> {country.capital}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CountryCard;
