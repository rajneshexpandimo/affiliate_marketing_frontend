import React from "react";
import Header from "../header";
import Footer from "../footer";
import Head from "next/head";
import { ThemeUIProvider } from 'theme-ui'
import {theme} from '../../theme'
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Affilate Marketing</title>
        <link rel="icon" href="/icons/expandimo-96x96.png" />
      </Head>
      <ThemeUIProvider theme={theme}>
      <Header />
      <main>{children}</main>
      <Footer />
      </ThemeUIProvider>
    </>
  );
}
