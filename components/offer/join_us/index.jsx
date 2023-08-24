import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CountUp from "@/components/common/CountUp";

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
    icon: "/icons/card.svg",
    title: "PAYMENTS",
    desc: "Your earnings are automatically deposited into your chosen online",
    link: "/",
  },
  {
    icon: "/icons/analytics.svg",
    title: "CLEAR ANALYTICS",
    desc: "Analyze your results in real time using convenient reports and data filters",
    link: "/",
  },
  {
    icon: "/icons/jet.svg",
    title: "UNIVERSAL LINKS",
    desc: "We do the work of detecting your users’ location, language, and device",
    link: "/",
  },
];

const JoinUs = () => {
  return (
    <>
      <img
        src="/images/grey_wave.png"
        alt="upper wave"
        className="w-full mb-[-5px]"
        style={{ transform: "rotateX(180deg)" }}
      />
      <div className="bg-[#D3D3D3] w-full py-5">
        <div className="md:max-w-[1300px] w-full mx-auto xl:px-0 px-5 md:pt-[90px] pt-4">
          <h1 className="font-bold sm:text-[64px] text-3xl sm:pb-5 pb-0 sm:leading-[66px] leading-normal text-center capitalize text-[#333]">
            Join us and create
            <span className="text-[#295DA7]"> your own success </span>
          </h1>
          <p className="text-base text-center  lg:max-w-[1140px] mx-auto">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution
          </p>
          <div className="flex lg:flex-row flex-col xl:gap-16 gap-4 my-12">
          {cardData.map((data, key) => (
                  <CardComp key={key} {...data} index={key} />
                ))}
          </div>
        </div>
      </div>
      <img src="/images/grey_wave.png" alt="upper wave" className=" w-full" />
    </>
  );
};

const CardComp = (props) => {
    const { icon,title, desc, link } = props;
    return (
      <div className="inline-block rounded-[50px] border-[3px] border-[#fff] text-center px-7 py-[55px]">
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

export default JoinUs;
