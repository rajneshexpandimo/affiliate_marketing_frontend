import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const cardVariantsdown = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const ForBeginners = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariantsdown} className="md:max-w-[1300px] w-full mx-auto text-center lg:py-20 py-6 md:px-0 px-2">
        <p className="text-[#295DA7] uppercase font-bold lg:text-2xl">
          FOR BEGINNERS
        </p>
        <h2 className="font-bold sm:text-[64px] text-2xl sm:pb-5 pb-3 md:leading-[88px] leading-normal text-[#333] dark:text-white">
          Why you should Choose to
          <span className="text-[#295DA7]"> promote fintech affiliate </span>and
          forex offers world
        </h2>
        <p className="text-center md:text-2xl text-lg  capitalize">
          Have you considered promoting fintech and forex offers? With high
          earning potential, a growing industry, a large target market, a wide
          range of products, and strong conversion rates, it’s worth taking a
          closer look. Get in on the action and start earning big with fintech
          and forex affiliate programs.
        </p>
        <button className="bg-blue text-white w-[247px] h-[66px] md:text-2xl text-lg rounded-[5px] mt-10">
          Start Now
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ForBeginners;
