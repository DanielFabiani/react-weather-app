import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//importo los estilos de MUI
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"; //-> Reinicia los estilos base, y aplica la fuente roboto
//tema personalizado para MUI
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#101650",
    },
    secondary: {
      main: "#880e4f",
    },
  },
});

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
