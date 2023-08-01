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
        className="mb-[-20px]"
        style={{ transform: "rotateX(221deg)" }}
      />
      <div className="bg-[#D3D3D3] w-full py-5">
        <div className="md:max-w-[1300px] w-full mx-auto xl:px-0 px-5 ">
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
          <div className="flex py-10">
            <div className="flex w-1/3 justify-between flex-col">
              <div className="bg-[#1F57A1] p-2 rounded-full flex flex-row">
                <div className="bg-white p-2 rounded-full min-w-[78px] min-h-[78px] font-bold flex items-center justify-center text-4xl">
                  1
                </div>
                <p className="text-white text-base">
                  All-in-one toolset combining advertising, affiliate marketing,
                  and data technologies.
                </p>
              </div>
              <div className="bg-[#1F57A1] p-2 rounded-full flex">
                <div className="bg-white p-2 rounded-full min-w-[78px] min-h-[78px] font-bold flex items-center justify-center text-4xl">
                  1
                </div>
                <p className="text-white text-base">
                  All-in-one toolset combining advertising, affiliate marketing,
                  and data technologies.
                </p>
              </div>
            </div>
            <div className="w-1/3 text-center flex justify-center">
              <div className="border-dashed border-[#002366] border-2 rounded-full p-2 max-w-[306px] max-w-[306px] min-w-[306px] min-w-[306px]">
                <img src="/images/social_profit.png" className="rounded-full max-w-[280px] max-w-[280px] min-w-[280px] min-w-[280px]" />
              </div>
            </div>
            <div className="w-1/3 flex flex-col justify-between">
              <div className="bg-[#1F57A1] p-2 rounded-full flex">
                <div className="bg-white p-2 rounded-full min-w-[78px] min-h-[78px] font-bold flex items-center justify-center text-4xl">
                  1
                </div>
                <p className="text-white text-base">
                  All-in-one toolset combining advertising, affiliate marketing,
                  and data technologies.
                </p>
              </div>
              <div className="bg-[#1F57A1] p-2 rounded-full flex">
                <div className="bg-white p-2 rounded-full min-w-[78px] min-h-[78px] font-bold flex items-center justify-center text-4xl">
                  1
                </div>
                <p className="text-white text-base">
                  All-in-one toolset combining advertising, affiliate marketing,
                  and data technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/images/grey_wave.png"
        alt="upper wave"
        className="mb-[-20px]"
      />
    </>
  );
};

export default WhyChooses;
