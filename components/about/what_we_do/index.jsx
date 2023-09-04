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

const WhatWeDo = () => {
  return (
    <div className=" bg-[#D3D3D3] dark:bg-black lg:py-20 py-6">
      <div className="md:max-w-[1300px] w-full mx-auto text-center md:px-0 px-6">
        <p className="text-[#295DA7] uppercase font-bold lg:text-2xl">
          WHAT WE DO
        </p>
        <h2 className="font-bold sm:text-[64px] text-2xl sm:pb-5 pb-3  text-[#333] dark:text-white md:leading-[88px] leading-normal">
          <span className="text-[#295DA7]">Thousands of users </span> around the
          world
        </h2>
        <p className="text-center md:text-2xl text-lg lg:px-5 px-0 capitalize">
          Our focus is on unlocking the potential of partner ecosystems in the
          forex and crypto industries. This means that the company aims to
          develop and strengthen partnerships with affiliates, influencers, and
          educators to maximize their impact and success. By leveraging these
          relationships, the company seeks to create a network of partners that
          can help promote and drive growth in these industries. This involves
          providing resources, support, and other benefits to help partners
          succeed. Ultimately, the goal is to create a thriving ecosystem of
          partners that can work together to achieve shared goals and advance
          the forex and crypto industries.
        </p>
        <button className="bg-blue text-white w-[247px] h-[66px] md:text-2xl text-lg rounded-[5px] mt-10">
          Start Now
        </button>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="flex md:flex-row flex-col justify-between gap-2 md:mt-[66px] mt-5"
        >
          <motion.div 
          variants={cardVariantsLeft}
          className="md:w-[54%] w-full">
            <Image
              src={"/images/whatwedo1.png"}
              width={691}
              height={626}
              alt="transaction history"
            />
          </motion.div>
          <motion.div  variants={cardVariantsRight} className="md:w-[46%] w-full">
            <Image
              src={"/images/whatwedo2.png"}
              width={570}
              height={300}
              alt="transaction history"
              className="md:mb-7 mb-2"
            />
            <Image
              src={"/images/whatwedo3.png"}
              width={570}
              height={300}
              alt="transaction history"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
