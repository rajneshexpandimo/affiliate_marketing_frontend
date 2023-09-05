import React from "react";
import { motion, useScroll, Variants } from "framer-motion";

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

const OurCommitment = () => {
  return (
    <div className="earn_confidence sm:my-10">
      <div className="md:max-w-[1300px] w-full mx-auto flex lg:flex-row flex-col xl:px-0 pt-5 px-6 items-center">
        <div className="w-full">
          <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.h2
              // variants={cardVariantsRight}
              className="font-bold sm:text-[50px] text-2xl sm:pb-5 pb-2 sm:leading-[66px] leading-normal text-center lg:max-w-[1070px] mx-auto uppercase"
            >
              <span className="text-[#295DA7]"> Our Commitment </span>
              to Good Advertising
              <span className="text-[#295DA7]"> Practices</span>
            </motion.h2>
            <motion.p className="sm:text-2xl text-lg capitalize">
              SocialProfit.IO supports industry self-regulatory principles and
              endorses industry recognized practices and self-regulatory
              standards.
              <br />
              <br />
              SocialProfit.IO follows and adheres to the industry
              Self-Regulatory Principles of___ the European self-regulatory
              Framework for Online Behavioural Advertising.
              <br />
              <br />
              In addition to the Services, SocialProfit.IO collects Personal
              Information through interactions with the Site. By visiting or
              submitting Personal Information through the Site, you acknowledge
              the processing of your Personal Information in accordance with
              this Privacy Policy.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurCommitment;
