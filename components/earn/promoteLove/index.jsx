import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.5,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.999,
      delay: 0.5,
      ease: [0, 0.9, 0.9, 1],
    },
  },
};
const PromoteLove = () => {
  return (
    <>
      <img
        src="/images/grey_wave.png"
        alt="upper wave"
        className="w-full"
        style={{ transform: "rotateX(180deg)" }}
      />
      <div className="bg-[#D3D3D3] w-full py-5">
        <div className="md:max-w-[1300px] w-full mx-auto xl:px-0 px-5 pt-[90px] ">
          <h1 className="font-bold sm:text-[50px] text-3xl sm:pb-5 pb-0 sm:leading-[66px] leading-normal text-center">
            <span className="text-[#295DA7]"> Promote </span>What You Love
          </h1>
          <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className="flex lg:py-24 py-10 justify-between lg:flex-row flex-col items-center">
              <div className="relative rounded-[20px]  z-50">
              <div className="bg-white flex flex-col justify-center rounded-[20px] min-w-[375px] max-w-[375px] min-h-[375px] max-h-[375px] border-b-[15px] border-[#08bbb3]">
                <div className="border-[15px] border-[#08bbb3] box-shadow rounded-full min-w-[140px] min-h-[140px] max-w-[160px] max-h-[160px] flex items-center justify-center absolute top-[-20%] left-[28%]">
                  <div
                    className="bg-white box-shadow rounded-full min-w-[130px] min-h-[130px] max-w-[130px] max-h-[130px] flex items-center justify-center
                "
                  >
                    {" "}
                    <Image
                      src="/icons/bulb.svg"
                      width={59}
                      height={59}
                      alt="Promote your love icon"
                      // className="rounded-full"
                    />
                  </div>
                </div>
                <p className="xl:text-[27px] text-base text-[#333] xl:leading-[36px] leading-normal text-center font-medium px-[90px]">
                  Choose from a list of offer
                </p>
                <div className="borderbottomfirst"></div>
              </div>
              </div>
              <div className="relative z-50">
              <div className="relative bg-white flex flex-col justify-center rounded-[20px] min-w-[375px] max-w-[375px] min-h-[375px] max-h-[375px] border-[#f6b552]">
               <div className="borderbottommiddle"></div>
                <p className="xl:text-[27px] text-base text-[#333] xl:leading-[36px] leading-normal text-center font-medium px-[90px]">
                  Choose from a list of offer
                </p>
                <div className="border-[15px] border-[#00bdea] box-shadow rounded-full min-w-[140px] min-h-[140px] max-w-[160px] max-h-[160px] flex items-center justify-center absolute bottom-[-20%] left-[28%]">
                  <div
                    className="bg-white box-shadow rounded-full min-w-[130px] min-h-[130px] max-w-[130px] max-h-[130px] flex items-center justify-center
                "
                  >
                    {" "}
                    <Image
                      src="/icons/MaleUser.svg"
                      width={59}
                      height={59}
                      alt="Promote your love icon"
                      // className="rounded-full"
                    />
                  </div>
                </div>
              </div>
              </div>
              <div className="relative bg-white z-50 rounded-[20px]"> 
              <div className=" flex flex-col justify-center rounded-[20px] min-w-[375px] max-w-[375px] min-h-[375px] max-h-[375px] border-b-[15px] border-[#f6b552] z-50">
                <div className="border-[15px] border-[#f6b552] box-shadow rounded-full min-w-[140px] min-h-[140px] max-w-[160px] max-h-[160px] flex items-center justify-center absolute top-[-20%] left-[28%]">
                  <div
                    className="bg-white box-shadow rounded-full min-w-[130px] min-h-[130px] max-w-[130px] max-h-[130px] flex items-center justify-center
                "
                  >
                    {" "}
                    <Image
                      src="/icons/Airport.svg"
                      width={59}
                      height={59}
                      alt="Promote your love icon"
                      // className="rounded-full"
                    />
                  </div>
                </div>
                <p className="xl:text-[27px] text-base text-[#333] xl:leading-[36px] leading-normal text-center font-medium px-[90px]">
                  Choose from a list of offer
                </p>
                <div className="borderbottomlast"></div>
                {/* <div className="borderright"></div> */}
              </div>
              </div>
              {/* <motion.div
                variants={cardVariants}
                className="border-[10px] border-[#1F57A1] rounded-full w-fit mb-4"
              >
                <div className="bg-[#01C7C2] m-3 border-2 border-dashed rounded-full border-[#002366] xl:min-w-[371px] xl:max-w-[371px] xl:min-h-[371px] xl:max-h-[371px] min-w-[221px] max-w-[221px] min-h-[221px] max-h-[221px] flex flex-col justify-center items-center xl:p-[80px] p-5">
                  <Image
                    src="/icons/list.svg"
                    width={92}
                    height={92}
                    alt="Promote your love icon"
                  />
                  <p className="xl:text-[27px] text-base text-[#333] xl:leading-[36px] leading-normal text-center font-medium xl:pt-4 pt-1">
                    Choose from a list of offer
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="border-[10px] border-[#1F57A1] rounded-full w-fit mb-4"
              >
                <div className="bg-[#003736] m-3 border-2 border-dashed rounded-full border-[#002366] xl:min-w-[371px] xl:max-w-[371px] xl:min-h-[371px] xl:max-h-[371px] min-w-[221px] max-w-[221px] min-h-[221px] max-h-[221px] flex flex-col justify-center items-center xl:p-10 p-3">
                  <Image
                    src="/icons/Omnichannel.svg"
                    width={92}
                    height={92}
                    alt="Promote your love icon"
                  />
                  <p className="xl:text-[27px] text-base text-white  text-center xl:leading-[36px] leading-normal font-medium xl:pt-4 pt-0 xl:px-0 px-3">
                    The Commission Per Referral is stated Under each Offer.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="border-[10px] border-[#1F57A1] rounded-full w-fit mb-4"
              >
                <div className="bg-[#F2BD70] m-3 border-2 border-dashed rounded-full border-[#002366] xl:min-w-[371px] xl:max-w-[371px] xl:min-h-[371px] xl:max-h-[371px] min-w-[221px] max-w-[221px] min-h-[221px] max-h-[221px] flex flex-col justify-center items-center xl:p-10 p-2">
                  <Image
                    src="/icons/PaidBill.svg"
                    width={92}
                    height={92}
                    alt="Promote your love icon"
                  />
                  <p className="xl:text-[27px] text-base text-[#333]  text-center xl:leading-[36px] leading-normal font-medium xl:pt-4 pt-1">
                    Preview of how much you’ll be Paid.
                  </p>
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>
      <img src="/images/grey_wave.png" alt="upper wave" className=" w-full" />
    </>
  );
};

export default PromoteLove;
