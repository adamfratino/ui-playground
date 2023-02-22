import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "~ui/theme";
import "~ui/global.css";
import { Navigation } from "~/modules";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;