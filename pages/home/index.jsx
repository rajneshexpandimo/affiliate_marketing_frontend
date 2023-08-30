import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../../components/home/hero_section";
import EarnConfidence from "../../components/home/earn_confidence";
import WhyChooses from "../../components/home/why_chooses";
import CookieLessFuture from "../../components/home/cookiesless_future";
import LogoSection from "../../components/home/logo_section";
import TrustThePros from "../../components/home/trust_pros";
import GettingStarted from "../../components/home/getting_started";
import CookiesLess from "../../components/home/cookiesless_future2";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <EarnConfidence />
      <WhyChooses />
      <CookieLessFuture />
      <CookiesLess />
      {/* <LogoSection /> */}
      <TrustThePros />
      <GettingStarted />
    </>
  );
};

export default HomePage;
