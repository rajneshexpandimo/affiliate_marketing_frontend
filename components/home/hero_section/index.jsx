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
const HeroSection = () => {
  return (
    <>
      <div className="bg-[#D3D3D3] w-full sm:py-36 py-10 xl:px-0 px-5">
          <div className="md:max-w-[1300px] w-full mx-auto flex lg:flex-row flex-col-reverse justify-between ">
            <div className="lg:w-1/2 w-full ">
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
                <span className="text-[#295DA7]">Empowering</span> you to
                monetise your platform
              </motion.h1>

              <motion.p
                //  variants={cardVariantsLeft}
                className="sm:text-2xl text-[18px] sm:pb-12 pb-5 font-light"
              >
                Unlock your earning potential today!
              </motion.p>
              <motion.button
                //  variants={cardVariantsLeft}
                className="border-2 border-s-[21px] p-4 border-[#1F57A1] bg-[#E7E7E7] rounded-[5px] font-semibold"
              >
                GET STARTED
              </motion.button>
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
                src="images/home_banner.png"
                alt="banner"
              />
              </motion.div>
            </div>
          </div>
      </div>
      <img src="images/grey_wave.png" alt="waves" className="w-full xl:mt-0 mt-[-5px]" />
    </>
  );
};

export default HeroSection;
