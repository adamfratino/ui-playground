import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import theme from "~ui/theme";
import "~ui/global.css";
// import { Navigation, Footer } from "~/modules";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme as any}>
      {/* <Navigation /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default MyApp;
