import { createTheme } from "@mui/material/styles";

export let myTheme = createTheme({
  // theme de l'AppBar
  palette: {
    type: "light",
    primary: {
      main: "#FFBF39",
    },
    textboxcolor: {
      main: "#FFFFF"
    }
  },
});

export let myTheme2 = createTheme({
  // theme des basics bouton
  palette: {
    type: "light",
    primary: {
      main: "#ff5d39",
    },
  },
});

