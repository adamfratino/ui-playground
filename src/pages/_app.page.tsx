import React from "react";
import { AppProps } from "next/app";
import { BaseStyles, ThemeProvider } from "theme-ui";
import theme from "~ui/theme";
import "~ui/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme as any}>
      <BaseStyles>
        <Component {...pageProps} />
      </BaseStyles>
    </ThemeProvider>
  );
};

export default MyApp;
