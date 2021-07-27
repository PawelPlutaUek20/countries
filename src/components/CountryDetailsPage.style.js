import { makeStyles } from "@material-ui/core";

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

export { useStyles };
