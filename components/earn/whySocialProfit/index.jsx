import Image from "next/image";
import React from "react";
import { motion, useScroll, Variants } from "framer-motion";
import CountUp from "../../common/CountUp";

const cardData = [
  {
    desc: "E-commerce purchases powered monthly",
    count: 487,
    suffix: "K",
    icon: "icons/ecommerce_purchases.svg",
  },
  {
    desc: "Median time to get your first traffic",
    count: 5,
    suffix: "min",
    icon: "icons/median-time.svg",
  },
  {
    desc: "The average number of affiliates per store",
    count: 130,
    suffix: "",
    icon: "icons/people.svg",
  },
];

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

const WhySocialProfit = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="earn_confidence lg:my-2 my-10">
      <div className="md:max-w-[1300px] w-full mx-auto flex lg:flex-row flex-col xl:px-0 pt-5 px-6 items-center">
        <div className="w-full">
          <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.h1
              // variants={cardVariantsRight}
              className="font-bold sm:text-[50px] text-3xl sm:pb-3 pb-0 sm:leading-[66px] leading-normal text-center"
            >
                Why
              <span className="text-[#295DA7]"> SocialProfit.IO?</span> 
            </motion.h1>
            <div className="flex sm:flex-row flex-col justify-between sm:pt-[74px] sm:pb-[80px] py-[30px] w-full mx-auto gap-10">
              {cardData.map((data, key) => (
                <CardComp key={key} {...data} index={key} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const CardComp = (props) => {
  const { count, desc, suffix, index, icon } = props;
  return (
    <div className="bg-[#295DA7] rounded-[48px] p-4 box-shadow w-full">
      <h3 className="text-white text-4xl leading-[53px] font-bold ">
        {" "}
        <CountUp end={count} />
        {suffix}
      </h3>
      <div className="mx-auto border-dashed border-2 border-[#fff] rounded-full min-w-[160px] min-h-[160px] max-w-[160px] max-h-[160px] w-full flex justify-center items-center">
      <div className="rounded-full bg-white m-4 min-w-[134px] min-h-[134px] max-w-[134px] max-h-[134px] w-full flex justify-center items-center" >
        <Image src={icon} className="" width={88} height={88} alt="counter icons"/>
      </div>
      </div>
      <p className="text-center font-light text-base pt-6 text-white">{desc}</p>
    </div>
  );
};

export default WhySocialProfit;
