import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const cardData = [
  {
    image: "/icons/audience.svg",
    title: "Engage valuable audiences",
    desc: "With audience attention at a premium, we deliver engagement strategies that move beyond awareness and deliver tangible value.",
  },
  {
    image: "/icons/audience.svg",
    title: "Engage valuable audiences",
    desc: "With audience attention at a premium, we deliver engagement strategies that move beyond awareness and deliver tangible value.",
  },
  {
    image: "/icons/audience.svg",
    title: "Engage valuable audiences",
    desc: "With audience attention at a premium, we deliver engagement strategies that move beyond awareness and deliver tangible value.",
  },
];
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
const EmergingTechnology = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="md:max-w-[1300px] w-full mx-auto xl:px-0 px-5 lg:py-20 py-16 relative after:content-[''] after:bg-[url('/icons/singlebubble.png')] after:w-[75px] after:h-[75px] after:absolute after:right-[35%] after:top-[-15%] after:bg-no-repeat after:bg-contain"
    >
      <motion.h2  className="font-bold sm:text-[50px] text-2xl leading-normal sm:pb-5 pb-3  capitalize text-center">
        We combine
        <span className="text-[#295DA7]"> emerging technology </span>
        with storytelling ,the speed of culture and design to create innovative
        CX that gains attention
      </motion.h2>
      <motion.div className="flex lg:flex-row flex-col justify-between lg:gap-14 gap-5 lg:pt-20 pt-5">
        {cardData.map((data, key) => (
          <CardComp key={key} {...data} index={key} />
        ))}
      </motion.div>
    </motion.div>
  );
};

const CardComp = (props) => {
  const { image, title, desc } = props;
  return (
    <motion.div
      variants={cardVariantsdown}
      className="lg:w-1/3 w-full relative rounded-[20px] border border-[#1F57A1]"
    >
      <h3 className="bg-blue text-white text-[30px] font-semibold py-4 px-8 rounded-l-[20px] rounded-r-[20px] rounded-b-none ">
        AUDIENCE
      </h3>
      <div className="border-2 rounded-full border-[#33333380] absolute p-4 right-7 top-3 bg-white">
        <Image src={image} width={67} height={64} alt="Tech icon" />
      </div>
      <div className="py-11 px-12">
        <h4 className="text-2xl font-semibold leading-7 capitalize mb-4">
          {title}
        </h4>
        <p>{desc}</p>
      </div>
      <div className="rounded-b-[20px] rounded-br-[20px] rounded-t-[0] border-[#1F57A1] h-[31px] bg-blue"></div>
    </motion.div>
  );
};
export default EmergingTechnology;
