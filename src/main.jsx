import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//import CssBaseline from "@mui/material/CssBaseline";
import { SnackbarProvider } from "notistack";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material"; //-> Reinicia los estilos base, y aplica la fuente roboto
//tema personalizado para MUI
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#244A58",
    },
    secondary: {
      main: "#880e4f",
    },
    text: {
      main: "#FFFCED",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
