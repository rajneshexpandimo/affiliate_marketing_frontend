import React from "react";
import { motion } from "framer-motion";

const visible = { opacity: 1, x: 0, transition: { duration: 0.9 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

const WhyChooses = () => {
  return (
    <>
      <img
        src="/images/grey_wave.png"
        alt="upper wave"
        className="md:mb-[-20px] mb-[-10px] w-full"
        style={{ transform: "rotateX(221deg)" }}
      />
      <div className="bg-[#D3D3D3] w-full py-5">
        <div className="md:max-w-[1300px] w-full mx-auto xl:px-0 px-5 pt-5 ">
          <motion.h1
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible,
            }}
            className="font-bold text-[50px] leading-[66px] text-center"
          >
            Why choose
            <span className="text-[#295DA7]"> SocialProfit</span>
          </motion.h1>
          <motion.p className="text-2xl leading-8 font-light text-center">
            eo eget bibendum sodales, augue velit cursus nunc
          </motion.p>
          <div className="flex lg:py-24 py-10 justify-between lg:flex-row flex-col">
            <div className="flex lg:w-1/3 w-full justify-between flex-col lg:items-start items-center lg:gap-0 gap-5">
              <div className="bg-[#1F57A1] p-3 rounded-full flex flex-row items-center gap-3 profit_list profit_list_1 relative max-w-[392px] min-w-[392px]">
                <div className="bg-white p-2 rounded-full min-w-[78px] min-h-[78px] font-bold flex items-center justify-center text-4xl">
                  1
                </div>
                <p className="text-white text-base">
                  All-in-one toolset combining advertising, affiliate marketing,
                  and data technologies.
                </p>
              </div>
              <div className="bg-[#1F57A1] p-3 rounded-full flex flex-row items-center gap-3 profit_list profit_list_2 relative  max-w-[392px] min-w-[392px]">
                <div className="bg-white p-2 rounded-full min-w-[78px] min-h-[78px] font-bold flex items-center justify-center text-4xl">
                  2
                </div>
                <p className="text-white text-base">
                  Real-time, granular data across all your revenue opportunities
                  in one platform.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 w-full  text-center flex justify-center lg:max-w-[306px] lg:py-0 py-5">
              <div className="border-dashed border-[#002366] border-2 rounded-full p-2 max-w-[306px] max-w-[306px] min-w-[306px] min-h-[306px] flex items-center justify-center social_profit_wrapper">
                <div className="bg-white rounded-full p-5 social_profit_image_wrapper">
                  <img
                    src="/images/social_profit.png"
                    className="rounded-full max-w-[230px] max-h-[240px] min-w-[230px] min-h-[240px] social_profit_image"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full flex flex-col justify-between lg:items-end items-center gap-5">
              <div className="bg-[#1F57A1] p-3 rounded-full flex lg:flex-row-reverse flex-row items-center gap-3 profit_list profit_list_3 relative  max-w-[392px] min-w-[392px]">
                <div className="bg-white p-2 rounded-full min-w-[78px] min-h-[78px] font-bold flex items-center justify-center text-4xl">
                  3
                </div>
                <p className="text-white text-base lg:text-right text-left">
                  Experienced team providing consistent support.
                </p>
              </div>
              <div className="bg-[#1F57A1] p-3 rounded-full flex lg:flex-row-reverse flex-row items-center gap-3 profit_list profit_list_4 relative max-w-[392px] min-w-[392px]">
                <div className="bg-white p-2 rounded-full min-w-[78px] min-h-[78px] font-bold flex items-center justify-center text-4xl">
                  4
                </div>
                <p className="text-white text-base lg:text-right text-left">
                  Limitless earning potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img
        src="/images/grey_wave.png"
        alt="upper wave"
        className="mb-[-20px] w-full"
      /> */}
    </>
  );
};

export default WhyChooses;
