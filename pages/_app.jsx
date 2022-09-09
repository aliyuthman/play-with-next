/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from "theme-ui";
import React from "react";
import { ThemeProvider } from "theme-ui";
// import "../styles/global.css";
import theme from "../theme";
import Nav from "../src/components/Nav";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
