import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CountUp from "../../common/CountUp";

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

const cardData = [
  {
    icon: "/icons/question.svg",
    title: "Ask a question",
    desc: "Cras eu semper neque, sit amet aliquet odio. Donec volutpat enim quis mollis consequat",
    link: "/",
  },
  {
    icon: "/icons/handshake.svg",
    title: "Partnership",
    desc: "Cras eu semper neque, sit amet aliquet odio. Donec volutpat enim quis mollis consequat",
    link: "/",
  },
  {
    icon: "/icons/personalgrowth.svg",
    title: "Career",
    desc: "Cras eu semper neque, sit amet aliquet odio. Donec volutpat enim quis mollis consequat",
    link: "/",
  },
];

const HowWeHelp = () => {
  return (
    <>
      <div className="w-full py-5">
        <div className="md:max-w-[1300px] w-full mx-auto xl:px-0 px-5 md:pt-[90px] pt-4">
          <h1 className="font-bold sm:text-[64px] text-3xl sm:pb-5 pb-0 sm:leading-[66px] leading-normal text-center capitalize text-[#333]">
            <span className="text-[#295DA7]"> How can we help  </span>you right now?
          </h1>
          <p className="text-base text-center  lg:max-w-[1140px] mx-auto">
          Invest in Bitcoin, Ethereum, USDT, and other cryptocurrencies using our crypto trading app. The Bitcoin and cryptocurrency markets have experienced a surge in volume recently, making it an exciting time to become a trader. Cryptocurrency markets have seen an increase in volume in recent weeks, which is a great opportunity for new traders.
          </p>
          <div className="flex lg:flex-row flex-col xl:gap-16 gap-4 my-12">
          {cardData.map((data, key) => (
                  <CardComp key={key} {...data} index={key} />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

const CardComp = (props) => {
    const { icon,title, desc, link } = props;
    return (
      <div className="inline-block rounded-[25px] border-[3px] border-[#fff] bg-[#d3d3d3] text-center px-7 py-[55px]">
        <Image src={icon} width={100} height={100} alt="join us" className="mx-auto"/>
        <h3 className="md:text-4xl text-2xl md:leading-[46px] leading-normal font-semibold text-[#333] lowercase">{title}</h3>
            <p className="text-[#000] text-base text-center">
              {" "}
              {desc}
            </p>
            <button className="bg-blue rounded-[10px] min-w-[166px] min-h-[49px] text-white text-base mt-6">Read More</button>
      </div>
    );
  };

export default HowWeHelp;
