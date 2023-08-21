import React from "react";
import { motion } from "framer-motion";
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

const HigherCTR = () => {
  return (
    <>
      <img
        src="/images/grey_wave.png"
        alt="upper wave"
        className="w-full"
        style={{ transform: "rotateX(180deg)" }}
      />
      <div className="bg-[#D3D3D3] w-full py-5">
        <div className="md:max-w-[1300px] w-full mx-auto flex lg:flex-row flex-col xl:px-0 px-5 py-5 items-center lg:gap-32 gap-10">
          <div className="lg:w-1/2 w-full">
            <motion.div
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.h1
                // variants={cardVariantsRight}
                className="font-semibold sm:text-[40px] text-3xl sm:pb-5 pb-0 sm:leading-[42px] leading-normal"
              >
                Drive 2x more attention with engaged time
              </motion.h1>
              <motion.p
                // variants={cardVariantsRight}
                className="text-base leading-[21px]"
              >
                Signal captures 45 meaningful on-page consumer interactions,
                which indicate user engagement.
                <br />
                <br />
                Engaged time delivers twice the click through rate and twice the
                attention compared to viewability. Dive deeper into your
                audience behaviors and turn engagement into revenue.
                <br />
                <br />
                Download the data sheet to learn more about how Signal can
                monetize your reader engagement.
              </motion.p>
              <motion.button
                //  variants={cardVariantsLeft}
                className="border-2 border-s-[21px] px-9 py-4 mt-8 border-[#1F57A1] bg-[#E7E7E7] rounded-[5px] font-semibold"
              >
                DOWNLOAD NOW
              </motion.button>
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
                src="/images/ctr.png"
                alt="Earn with confidence"
                width={627}
                height={550}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <img src="/images/grey_wave.png" alt="upper wave" className=" w-full" />
    </>
  );
};

export default HigherCTR;
