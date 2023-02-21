import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import coreTheme from "~ui/theme";
import "../../ui/global.css";

const theme = coreTheme;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
