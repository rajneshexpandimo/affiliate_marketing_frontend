import React from "react";
import { motion } from "framer-motion"
import HeroSection from "@/components/home/hero_section";
import EarnConfidence from "@/components/home/earn_confidence";
import WhyChooses from "@/components/home/why_chooses";

const HomePage = () => {
  return(
    <>
    <HeroSection/>
    <EarnConfidence/>
    <WhyChooses/>
    </>
  );
};

export default HomePage;
