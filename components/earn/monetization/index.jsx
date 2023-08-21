import React from "react";
import { motion, useScroll, Variants } from "framer-motion";
import Image from "next/image";

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

const Monetization = () => {
  return (
    <div className="earn_confidence lg:my-2 my-10">
      <div className="md:max-w-[1300px] w-full mx-auto flex lg:flex-row flex-col xl:px-0 px-5 items-center lg:gap-32 gap-10">
        <div className="lg:w-1/2 w-full">
          <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.h1
              // variants={cardVariantsRight}
              className="font-bold sm:text-[40px] text-3xl sm:pb-5 pb-0 sm:leading-[66px] leading-normal"
            >
              Mobile data monetization
            </motion.h1>
            <motion.p
              // variants={cardVariantsRight}
              className="text-base leading-[21px]"
            >
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
              blandit vel, luctus pulvinar, hendrerit id, lorem. <br />
              <br />
              Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
              libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci
              eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
              amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget
              bibendum sodales, augue velit cursus nunc,
            </motion.p>
            <div className="mt-8">
              <p className="flex gap-2 items-center mb-3">
                <Image
                  src="/icons/bluecheck.svg"
                  height={30}
                  width={30}
                  alt="list check"
                />
                Mobile linkage data
              </p>
              <p className="flex gap-2 items-center mb-3">
                <Image
                  src="/icons/bluecheck.svg"
                  height={30}
                  width={30}
                  alt="list check"
                />
                In-app data
              </p>
              <p className="flex gap-2 items-center mb-3">
                <Image
                  src="/icons/bluecheck.svg"
                  height={30}
                  width={30}
                  alt="list check"
                />
                Location data
              </p>
            </div>
          </motion.div>
        </div>
        <div className="lg:w-1/2 w-full">
          <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.img
              variants={cardVariantsRight}
              src="/images/monetization.png"
              alt="Earn with confidence"
              width={627}
              height={550}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Monetization;
