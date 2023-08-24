import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const cardVariantsLeft = {
  offscreen: {
    opacity: 0,
    x: -50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};
const cardVariantsRight = {
  offscreen: {
    opacity: 0,
    x: 50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};
const Banner = () => {
  return (
    <>
    <div className="relative lg:mb-[250px] lg:py-0 py-5 z-10 about_hero_section lg:before:content-[''] lg:before:bg-[url('/images/about_bg1.png')] lg:before:bg-contain lg:before:bg-no-repeat lg:before:absolute lg:before:left-0 lg:before:w-[310px] lg:before:h-[456px] lg:before:top-[33%] before:z-0 lg:after:content-[''] lg:after:bg-[url('/images/about_bg2.png')] lg:after:bg-contain lg:after:bg-no-repeat lg:after:absolute lg:after:right-0 lg:after:w-[350px] lg:after:h-[456px] lg:after:top-[8%] lg:after:z-0">
      <div className="bg-[#D3D3D3] w-full sm:pt-28 sm:pb-60 xl:px-0 px-5 ">
        <div className="md:max-w-[1300px] w-full mx-auto flex lg:flex-row flex-col-reverse justify-around">
          <div className="w-full z-50">
            <motion.div
              className="text-center md:py-0 py-5"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <p className="text-[#295DA7] uppercase font-bold lg:text-2xl">
                OUR STORY
              </p>
              <motion.h1
                //  variants={cardVariantsLeft}
                className="font-bold sm:text-[64px] text-[30px] sm:pb-5 pb-3  "
              >
                <span className="text-[#295DA7]">About our </span> company
              </motion.h1>

              <motion.p
                //  variants={cardVariantsLeft}
                className="sm:text-2xl text-[18px] text-[#333333] lg:max-w-[868px] mx-auto capitalize"
              >
                Our affiliate network is a dynamic and growing community of
                individuals and businesses who promote and support our products
                and services. By joining our network, affiliates can earn
                commissions for their efforts and have access to a suite of
                resources and support to help them succeed.
              </motion.p>
            </motion.div>
          <Image src="/images/about_banner.png" alt="banner" width={668} height={590} className="md:absolute relative left-[0%] right-0 mx-auto xl:max-w-full max-w-min"/>
          </div>
        </div>
        </div>
        <img
        src="images/grey_wave.png"
        alt="waves"
        className="w-full xl:mt-0"
      />
      </div>
   
    </>
  );
};

export default Banner;
