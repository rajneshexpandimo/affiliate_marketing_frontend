
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const visible = { opacity: 1, x: 0, transition: { duration: 0.9 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

const CookiesLess = () => {
  return (
    <div className="earn_confidence lg:my-2 my-10">
      <div>
        <motion.h1
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible,
          }}
          className="font-bold sm:text-[50px] text-3xl sm:pb-5 pb-0 sm:leading-[66px] leading-normal text-center text-[#295DA7] pt-[69px]"
        >
          Show the cookieless
          <span className="text-black dark:text-white"> future who’s boss.</span>
        </motion.h1>
        <motion.p className="sm:text-2xl text-[#333333] dark:text-white text-[24px] leading-8 font-medium text-center">
          Access the Socialprofit Collective
        </motion.p>
      </div>
      <motion.article
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <div className="md:max-w-[1300px] w-full mx-auto flex lg:flex-row flex-col xl:px-0 px-5 ">
          <div className="lg:w-1/2 w-full pt-[49px]">
            <motion.p
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible,
              }}
              className="text-base font-normal leiiokhfggrgfghfdhfdading-[21px] mb-[59px]"
            >jhhhggfrdg
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
              Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. <br />{" "}
              <br />
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. <br /> <br /> Nullam dictum
              felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
              Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tellus.
            </motion.p>
            <div className="bg-[#1F57A1] text-[#FFFFFF] px-[25px] sm:rounded-full rounded-md flex flex-col sm:flex-row justify-around items-center profit_list  relative lg:max-w-[450px] lg:min-w-[450px] mb-[65px]">
              <div className="text-center sm:py-0 py-6">
                <h1>416M+</h1>
                <p>Daily readers</p>
              </div>
              <div class="w-[1px] h-32 justify-center items-center bg-gradient-to-b from-[#002366] via-[#839BC9] to-[#002366] sm:flex hidden"></div>
              <div className="text-center sm:py-0 py-6">
                <h1>13B+</h1>
                <p>Daily page views</p>
              </div>
              <div class="w-[1px] h-32 justify-center items-center bg-gradient-to-b from-[#002366] via-[#839BC9] to-[#002366] sm:flex hidden"></div>
              <div className="text-center sm:py-0 py-6">
                <h1>60K+</h1>
                <p>Websites</p>
              </div>
              {/* <div class="w-full h-screen flex justify-center items-center bg-gradient-to-r from-blue-900 via-blue-300 to-blue-900">
                abc
              </div> */}
            </div>
          </div>
          <div className="lg:w-1/2 lg:ps-[80px] w-full flex justify-center mt-[60px] lg:mt-0">
            <motion.img
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible,
              }}
              src="/images/cookieless.png"
              className="object-none"
              alt="Earn with confidence"
              //   width={582}
              //   height={407}
            />
            {/* <motion.h1
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible,
              }}
              className="font-bold sm:text-[50px] text-3xl sm:pb-5 pb-0 sm:leading-[66px] leading-normal"
            >
              <span className="text-[#295DA7]">Earn</span> with confidence
            </motion.h1> */}
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export default CookiesLess;
