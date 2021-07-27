import { makeStyles } from "@material-ui/core/styles";

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

export { useStyles };
