import Image from "next/image";
import React from "react";
import CountUp from "../../common/CountUp";
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

const cardData = [
  {
    desc: "POPULAR BRANDS",
    count: 150,
    suffix: "+",
  },
  {
    desc: "New joiners",
    count: 120,
    suffix: "+",
  },
  {
    desc: "ACTIVE PARTNERS",
    count: 1000,
    suffix: "+",
  },
];
const Banner = () => {
  return (
    <>
      <div className="bg-[#D3D3D3] dark:bg-black w-full sm:pt-20 sm:pb-0 py-10 xl:px-0 px-5">
        <div className="md:max-w-[1300px] w-full mx-auto flex lg:flex-row flex-col-reverse justify-around ">
          <div className="lg:w-5/12 w-full ">
            <motion.div
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.h1
                //  variants={cardVariantsLeft}
                className="font-bold text-[#333] dark:text-white sm:text-[64px] md:leading-[85px] text-[30px] sm:pb-5 pb-3  "
              >
                <span className="text-[#295DA7]">Trending</span> Affiliate
                Offers
              </motion.h1>

              <motion.p
                //  variants={cardVariantsLeft}
                className="text-base text-[#333333] dark:text-white sm:pb-12 pb-5"
              >
                Maximize your earning potential with our Forex Affiliate Network
                featuring 500+ partners globally, including regulated and
                well-known brands.
              </motion.p>
              <motion.div
                className="box inline-block"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.button
                  //  variants={cardVariantsLeft}
                  className="border-2 border-s-[21px] px-6 py-4 border-[#1F57A1] bg-[#E7E7E7] dark:text-black rounded-[5px] font-semibold uppercase"
                >
                  More Detail
                </motion.button>
              </motion.div>
              <div className="flex justify-between mt-7 mx-auto">
                {cardData.map((data, key) => (
                  <CardComp key={key} {...data} index={key} />
                ))}
              </div>
            </motion.div>
          </div>
          {/* <Image src='/images/home_banner.png' alt='' width={690} height={561} />
        
        */}
          <div className="lg:w-7/12 w-full">
            <motion.div
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.img
                variants={cardVariantsRight}
                src="images/offer_banner.png"
                alt="banner"
                className="float-right"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <img
        src="images/grey_wave.png"
        alt="waves"
        className="w-full xl:mt-0 dark:hidden"
      />
    </>
  );
};

const CardComp = (props) => {
  const { count, desc, suffix, index } = props;
  return (
    <div className="inline-block">
      <p className="text-[#333] dark:text-white sm:text-[50px] text-2xl  md:leading-[66px] leading-normal font-semibold text-center">
            <CountUp end={count} />
            {suffix}
          </p>
          <p className="text-[#333] dark:text-white text-base text-center uppercase">
            {" "}
            {desc}
          </p>
    </div>
  );
};

export default Banner;
