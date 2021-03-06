import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;