import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.only("xs")]: {
    row: {
      flexGrow: 0,
      maxWidth: "100%",
      flexBasis: "100%",
    },
    content: {
      marginTop: 12,
    },
  },
  [theme.breakpoints.only("sm")]: {
    row: {
      flexGrow: 0,
      maxWidth: "50%",
      flexBasis: "50%",
    },
    content: {
      marginTop: 12,
    },
  },
  [theme.breakpoints.only("md")]: {
    row: {
      flexGrow: 0,
      maxWidth: "33.333333%",
      flexBasis: "33.333333%",
    },
  },
  [theme.breakpoints.up("lg")]: {
    row: {
      flexGrow: 0,
      maxWidth: "25%",
      flexBasis: "25%",
    },
  },

  searchBar: {
    minHeight: 175,
    alignContent: "center",
  },
  container: {
    minWidth: 300,
  },
}));

export { useStyles };
