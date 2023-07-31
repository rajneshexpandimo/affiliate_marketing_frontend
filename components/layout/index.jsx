import React from "react";
import Header from "../header";
// import Footer from "../footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Affilate Marketing</title>
        <link rel="icon" href="/icons/expandimo-96x96.png" />
      </Head>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
