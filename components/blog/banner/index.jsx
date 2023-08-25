import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
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
const Banner = () => {
  return (
    <>
      <div className="bg-[#D3D3D3] w-full sm:py-36 py-10 xl:px-0 px-5">
        <div className="md:max-w-[1300px] w-full mx-auto flex lg:flex-row flex-col-reverse justify-around ">
          <div className="lg:w-1/2 w-full ">
            <motion.div
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.h1
                //  variants={cardVariantsLeft}
                className="font-bold sm:text-[64px] text-[30px] sm:pb-5 pb-3  capitalize"
              >
                The smart choice for
                <span className="text-[#295DA7]"> affiliate marketing</span>
              </motion.h1>

              <motion.p
                //  variants={cardVariantsLeft}
                className="text-base text-[#333333] sm:pb-12 pb-5"
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn&apos;t anything embarrassing
                hidden in the middle of text.
              </motion.p>
              <motion.div
                className="box inline-block"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.button
                  //  variants={cardVariantsLeft}
                  className="border-2 border-s-[21px] px-9 py-4 border-[#1F57A1] bg-[#E7E7E7] rounded-[5px] font-semibold uppercase"
                >
                  More details
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
          {/* <Image src='/images/home_banner.png' alt='' width={690} height={561} />
        
        */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.img
                variants={cardVariantsRight}
                src="images/blog_banner.png"
                alt="banner"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <img
        src="images/grey_wave.png"
        alt="waves"
        className="w-full xl:mt-0 mt-[-5px]"
      />
    </>
  );
};

export default Banner;
