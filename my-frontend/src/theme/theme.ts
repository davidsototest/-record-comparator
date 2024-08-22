import { createTheme } from "@mui/material";

const primaryFont = "Angkor, sans-serif";
const secondaryFont = "Poppins, sans-serif";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#405D72",
      light: "#405d72",
      dark: "#3b4e5c",
      contrastText: "#FFF8F3",
    },
    secondary: {
      main: "rgb(104, 126, 160)",
      light: "#758694",
      dark: "rgba(0, 0, 0, 0.8)", //color del header flotante y card superpuestas
    },
    background: {
      default: "#FFF8F3",
      paper: "rgba(0, 0, 0, 0.2)",
    },
    text: {
      primary: "#000000", 
      secondary: "#241b35",
    },
  },
  typography: {
    fontFamily: secondaryFont,
    h1: {
      fontFamily: primaryFont,
    },
    h2: {
      fontFamily: primaryFont,
    },
    h3: {
      fontFamily: primaryFont,
    },
    h4: {
      fontFamily: secondaryFont,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#C8ACD6",
      light: "#c5baca",
      dark: "#9e7fad",
      contrastText: "#070614",
    },
    secondary: {
      main: "rgb(20, 17, 61)",
      light: "rgb(20, 17, 61)",
      dark: "rgba(0, 0, 0, 0.8)", //color del header flotante y card superpuestas
    },
    background: {
      default: "#0d0b27",
      paper: "rgba(0, 0, 0, 0.2)",
    },
    text: {
      primary: "#C8ACD6",
      secondary: "#241b35",
    },
  },
  typography: {
    fontFamily: secondaryFont,
    h1: {
      fontFamily: primaryFont,
    },
    h2: {
      fontFamily: primaryFont,
    },
    h3: {
      fontFamily: primaryFont,
    },
    h4: {
      fontFamily: secondaryFont,
    },
  },
});
