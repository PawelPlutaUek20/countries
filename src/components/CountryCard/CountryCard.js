import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    width: 264,
  },
  media: {
    height: 160,
  },
  subtitle: {
    minHeight: 48,
    display: "flex",
    alignItems: "center",
    fontSize: "1.09rem",
    lineHeight: 1.43,
  },
});

const CountryCard = ({ country }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link
        color="inherit"
        underline="none"
        component={RouterLink}
        to={country.name}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={country.flag}
            title={country.name}
          />
          <Divider />
          <CardContent>
            <Typography
              className={classes.subtitle}
              variant="subtitle1"
              gutterBottom
            >
              <b>{country.name}</b>
            </Typography>
            <Typography variant="body2">
              <b>Population:</b> {country.population.toLocaleString()}
            </Typography>
            <Typography variant="body2">
              <b>Region:</b> {country.region}
            </Typography>
            <Typography variant="body2">
              <b>Capital:</b> {country.capital}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default CountryCard;
