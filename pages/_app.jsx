import React from "react";
import { ThemeProvider } from "theme-ui";
import "../styles/global.css";
import theme from "../theme";
ThemeProvider;

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
