import { createTheme } from "@mui/material" // 17.1

const theme = createTheme(); // 17.1

export const classes = {

  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  smMargin: {
    margin: theme.spacing(1),
  },

  actionDiv: {
    textAlign: 'center',
  },

}