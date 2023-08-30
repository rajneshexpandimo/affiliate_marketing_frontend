import React from "react";
import CountUp from "../../common/CountUp";
import { motion } from "framer-motion";
import Image from "next/image";

const cardData = [
  {
    desc: "Referred Clients",
    count: 80,
    suffix: "K",
  },
  {
    desc: "Total Transactions",
    count: 150,
    suffix: "K",
  },
  {
    desc: "Growing partners",
    count: 500,
    suffix: "",
  },
];
const Counter = () => {
  return (
    <div>
      <div className="bg-blue py-[60px] md:px-3 px-6">
        <div className="md:max-w-[1300px] bg-[#d3d3d3] rounded-[50px] flex md:flex-row flex-col md:gap-0 gap-10 justify-around sm:py-[60px]  py-[30px] w-full mx-auto">
          {cardData.map((data, key) => (
            <CardComp key={key} {...data} index={key} />
          ))}
        </div>
      </div>
      <div className="flex md:flex-row flex-col">
        <div className="bg-[#C3C6CA] min-h-[480px] flex justify-center items-center">
          <Image
            src={"/images/crypto.png"}
            width={456}
            height={456}
            alt="crypto"
          />
        </div>
        <div className="bg-[#D9D9D9] min-h-[480px] flex justify-center items-center">
          <Image
            src={"/images/businesslaw.png"}
            width={456}
            height={456}
            alt="crypto"
          />
        </div>
        <div className="bg-[#C3C6CA] min-h-[480px] flex justify-center items-center">
          <Image
            src={"/images/cyber.png"}
            width={456}
            height={456}
            alt="crypto"
          />
        </div>
        <div className="bg-[#D9D9D9] min-h-[480px] flex justify-center items-center">
          <Image
            src={"/images/businessaccount.png"}
            width={456}
            height={456}
            alt="crypto"
          />
        </div>
      </div>
    </div>
  );
};

const CardComp = (props) => {
  const { count, desc, suffix, index } = props;
  return (
    <div className="inline-block">
      <div className="bg-white  rounded-full mx-auto lg:min-w-[260px] lg:min-h-[260px] lg:max-w-[260px] lg:max-h-[260px] min-w-[230px] min-h-[230px] max-w-[230px] max-h-[230px] flex justify-center items-center box-shadow-dark">
        <div className="text-white bg-white border-4 border-[#1F57A1] rounded-full  lg:min-w-[233px] lg:min-h-[233px] lg:max-w-[233px] lg:max-h-[233px] min-w-[215px] min-h-[215px] max-w-[215px] max-h-[215px] flex-col  flex items-center justify-center">
          <p className="text-[#1F57A1] sm:text-[64px] text-2xl  md:leading-[50px] leading-normal font-bold">
            <CountUp end={count} />
            {suffix}
          </p>
          <p className="text-[#000] md:text-2xl text-xl text-center px-1"> {desc}</p>
        </div>
      </div>
    </div>
  );
};
export default Counter;
