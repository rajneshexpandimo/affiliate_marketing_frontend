import React from "react";
import CountUp from "../../common/CountUp";
import { motion } from "framer-motion";

const CookieLessFuture = () => {
  const cardData = [
    {
      desc: "Daily readers",
      count: 416,
      suffix: "M+",
    },
    {
      desc: "Daily page views",
      count: 13,
      suffix: "B+",
    },
    {
      desc: "Websites",
      count: 80,
      suffix: "K+",
    },
  ];

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

  return (
    <div className='bg-[url("/images/cookieless_banner.png")] bg-no-repeat bg-cover bg-top 2xl:py-[250px] sm:py-[180px] py-[100px]'>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div
          variants={cardVariantsdown}
          className="md:max-w-[1300px] w-full mx-auto  xl:px-0 px-5"
        >
          <h1 className="text-white font-bold sm:text-[50px] text-3xl sm:pb-5 pb-0 sm:leading-[66px] leading-normal text-center">
            Show the cookieless future who&apos;s boss.
          </h1>
          <p className="text-center text-white sm:text-2xl text-[18px] font-medium">
            Access the Sovrn Data Collective
          </p>
          <div className="flex sm:flex-row flex-col justify-around sm:py-[100px] py-[30px] lg:max-w-[1030px] w-full mx-auto sm:gap-0 gap-10">
            {cardData.map((data, key) => (
              <CardComp key={key} {...data} index={key} />
            ))}
          </div>
          <p className="text-white sm:text-2xl text-[18px] font-medium text-center lg:max-w-[1030px] w-full mx-auto">
            Tap the world&apos;s largest publisher collective for deep consumer
            insights and enriched audience data. Then get out there and rule the
            roost.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

const CardComp = (props) => {
  const { count, desc, suffix, index } = props;
  return (
    <div className="inline-block">
      <div className="border-2 border-dashed border-white p-2 rounded-full mx-auto min-w-[160px] min-h-[160px] max-w-[160px] max-h-[160px] flex justify-center items-center">
        <p className="text-white sm:text-3xl text-lg font-medium bg-[#1F57A1] rounded-full  min-w-[134px] min-h-[134px] max-w-[134px] max-h-[134px] flex items-center justify-center">
          <CountUp end={count} />
          {suffix}
        </p>
      </div>
      <p className="text-white text-2xl text-center pt-2 font-medium">
        {" "}
        {desc}
      </p>
    </div>
  );
};

export default CookieLessFuture;
