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
      <div className="bg-[#D3D3D3] dark:bg-black w-full  xl:px-0 px-5">
        <p className="md:max-w-[1300px] w-full mx-auto  text-center text-lg pt-8" >PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY CONTAIN IMPORTANT INFORMATION REGARDING YOUR LEGAL RIGHTS</p>
          <div className="md:max-w-[1300px] w-full mx-auto flex lg:flex-row flex-col-reverse justify-between sm:py-10 py-10">
            <div className="lg:w-1/2 w-full flex flex-col justify-center">
            <motion.div
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.h1
                //  variants={cardVariantsLeft}
                className="font-bold sm:text-[64px] text-[30px] sm:pb-5 pb-3  "
              >
                <span className="text-[#295DA7]">Terms </span> & Conditions
              </motion.h1>

              <motion.p
                //  variants={cardVariantsLeft}
                className="sm:text-2xl text-[18px] text-[#333333] sm:pb-12 pb-5 capitalize dark:text-white"
              >
                SocialProfit.IO is a company that enables advertisers (“Advertisers”) to market their products online with the help of publishers (“Affiliates”). SocialProfit.IO contracts only with Advertisers and has no responsibility in the relationship between Advertisers and Affiliates. SocialProfit.IO  offers tools to improve, register and facilitate online marketing through Affiliates (the “Service”). 
              </motion.p>
              <motion.div
                className="box inline-block"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
              <motion.button
                //  variants={cardVariantsLeft}
                className="border-2 border-s-[21px] px-9 py-4 border-[#1F57A1] bg-[#E7E7E7] rounded-[5px] font-semibold uppercase"
              >
                More Details
              </motion.button>
              </motion.div>
              </motion.div>
            </div>
            {/* <Image src='/images/home_banner.png' alt='' width={690} height={561} />
        
        */}
            <div className="lg:w-1/2 w-full">
            <motion.div
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.img
                 variants={cardVariantsRight}
                src="images/term&conditions-banner.png"
                alt="banner"
                className="float-right"
              />
              </motion.div>
            </div>
          </div>
      </div>
      <img src="images/grey_wave.png" alt="waves" className="w-full xl:mt-0 mt-[-5px] dark:hidden" />
    </>
  );
};

export default Banner;
