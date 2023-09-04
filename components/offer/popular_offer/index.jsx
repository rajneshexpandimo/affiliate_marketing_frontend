import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
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

const PopularOffer = () => {
  return (
    <div className="md:max-w-[1300px] dark:bg-black w-full mx-auto text-center lg:px-0 px-6 md:py-20 py-4">
      <div className="flex flex-wrap lg:flex-row flex-col lg:gap-0 gap-4 justify-between 5">
        <div className="shrink border border-[#1F57A1] rounded-[50px] flex justify-center items-center xl:min-w-[246px]">
          <Image
            src={"/images/logo1.png"}
            width={224}
            height={82}
            alt="logos"
          />
        </div>
        <div className="shrink border border-[#1F57A1] rounded-[50px] flex justify-center items-center xl:min-w-[246px]">
          <Image
            src={"/images/logo2.png"}
            width={224}
            height={82}
            alt="logos"
          />
        </div>
        <div className="shrink border border-[#1F57A1] rounded-[50px] flex justify-center items-center xl:min-w-[246px]">
          <Image
            src={"/images/logo3.png"}
            width={214}
            height={22}
            alt="logos"
          />
        </div>
        <div className="shrink border border-[#1F57A1] rounded-[50px] flex justify-center items-center xl:min-w-[246px]">
          <Image
            src={"/images/logo4.png"}
            width={224}
            height={82}
            alt="logos"
          />
        </div>
        <div className="shrink border border-[#1F57A1] rounded-[50px] flex justify-center items-center xl:min-w-[246px]">
          <Image
            src={"/images/logo5.png"}
            width={108}
            height={22}
            alt="logos"
          />
        </div>
      </div>

      <motion.div className="md:mt-10 mt-5"  
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}>
        <h2 className="font-bold sm:text-[64px] text-2xl sm:pb-5 pb-3  text-[#333] dark:text-white md:leading-[88px] leading-normal lg:max-w-[1000px] mx-auto capitalize">
          This week most
          <span className="text-[#295DA7]"> popular offers</span>
        </h2>
        <p className="text-base text-center lg:max-w-[1000px] mx-auto">
          We provide access to exceptional offers from reputable, regulated
          brands, ensuring that our clients can take advantage of the best deals
          and opportunities in the market.
        </p>
        <button className="border-2 px-3 py-4 border-[#1F57A1] bg-[#E7E7E7] text-[#333] rounded-[5px] font-semibold flex justify-center items-center mx-auto gap-1 md:mt-10 mt-5">
          View all Offers{" "}
          <span className="bg-[#1F57A1] rounded-full min-w-[25px] min-h-[25px] flex justify-center items-center ">
            <FaArrowRight className="text-white text-xs" />
          </span>
        </button>

        <div
          
          className="flex lg:flex-row flex-col justify-between md:mt-10 mt-5 lg:gap-0 gap-4"
        >
          <Image
           variants={cardVariantsdown}
            src={"/images/offer_1.png"}
            width={418}
            height={297}
            alt="Offer"
            className="rounded-[50px] box-shadow max-h-[297px] mx-auto"
          />
          <Image
            src={"/images/offer_2.png"}
            width={304}
            height={340}
            alt="Offer"
            className="rounded-[50px] box-shadow mx-auto"
          />
          <Image
            src={"/images/offer_1.png"}
            width={418}
            height={297}
            alt="Offer"
            className="rounded-[50px] box-shadow max-h-[297px] mx-auto"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PopularOffer;
