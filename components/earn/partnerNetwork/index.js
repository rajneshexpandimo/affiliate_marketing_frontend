import Image from "next/image";
import React from "react";
import { motion, useScroll, Variants } from "framer-motion";
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

const PartnerNetwork = () => {
  return (
    <div className="md:max-w-[1300px] w-full mx-auto sm:my-20 my-10 lg:px-0 px-2">
      <h2 className="sm:text-5xl text-2xl pb-3 font-bold text-center">
        Access to Admitad{" "}
        <span className="text-[#1F57A1]">Partner Network</span>
      </h2>
      <p className="sm:text-2xl text-[18px] mx-auto pt-3 text-center">
        Need more affiliates for your e-commerce affiliate program? Get access
        to the Admitad Store with 100K+ active publishers ready to promote your
        business. No additional fees are required!
      </p>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="flex md:flex-row flex-col max-w-[1220px] mx-auto lg:gap-[113px] gap-9 sm:mt-16 mt-5 justify-center md:items-start items-center">
          <motion.div variants={cardVariantsdown} className="sm:w-1/3 w-full">
            <div className="bg-[#1F57A1] rounded-[20px] flex items-center justify-center mx-auto mb-3 max-w-[109px] max-h-[92px] min-w-[109px] min-h-[92px] partner_network_img  partner_network relative z-50">
              <Image
                src="/icons/cloudUserGroup.svg"
                width={84}
                height={84}
                alt="userSignup"
                className="mx-auto"
              />
            </div>
            <h3 className="lg:text-[40px] text-2xl lg:leading-[53px] font-bold text-center py-2">
              100 000+ publishers
            </h3>
          </motion.div>
          <motion.div variants={cardVariantsdown} className="sm:w-1/3 w-full z-50">
            <div className="bg-[#1F57A1] rounded-[20px] flex items-center justify-center mx-auto mb-3 max-w-[109px] max-h-[92px] min-w-[109px] min-h-[92px]  partner_network relative z-50">
              <Image
                src="/icons/cloudPrivacy.svg"
                width={84}
                height={84}
                alt="userSignup"
                className="mx-auto"
              />
            </div>
            <h3 className="lg:text-[40px] text-2xl lg:leading-[53px] font-bold text-center py-2">
              Various publisher types
            </h3>
          </motion.div>
          <motion.div variants={cardVariantsdown} className="sm:w-1/3 w-full z-50">
            <div className="bg-[#1F57A1] rounded-[20px] flex items-center justify-center mx-auto mb-3 max-w-[109px] max-h-[92px] min-w-[109px] min-h-[92px] z-50">
              <Image
                src="/icons/statistics.svg"
                width={84}
                height={84}
                alt="userSignup"
                className="mx-auto "
              />
            </div>
            <h3 className="lg:text-[40px] text-2xl font-bold lg:leading-[53px] text-center py-2">
              All statistics in one place
            </h3>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PartnerNetwork;
