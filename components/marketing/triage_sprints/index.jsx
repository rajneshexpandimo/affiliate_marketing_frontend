import CountUp from "../../common/CountUp";
import { Divider } from "antd";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const triageSprintData = [
  {
    image: "/images/brain-circle.png",
    title: "Understand",
    desc: "We discover insights through both first and third-party data sources. Then we define the creative challenges to be solved and consumer journeys to be explored.",
  },
  {
    image: "/images/design.png",
    title: "Ideate",
    desc: "Strategy, creative and technical teams work in agile 1 week sprints until completion.Existing frameworks accelerate delivery and guarantee quality.",
  },
  {
    image: "/images/marketing3.png",
    title: "Deliver + Optimize",
    desc: "Teams launch innovative campaign experiences that generate growth.‍Outputs are optimized based on quantified consumer feedback and usage data.",
  },
];
const counterData = [
  {
    desc: "Referred Clients",
    count: 200000,
    suffix: "+",
  },
  {
    desc: "Total Transactions",
    count: 12,
    suffix: "Billion",
  },
  {
    desc: "Growing partners",
    count: 100,
    suffix: "TB+",
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
const TriageSprint = () => {
  return (
    <>
      <img
        src="/images/grey_wave.png"
        alt="upper wave"
        className="w-full mb-[-3px] dark:hidden"
        style={{ transform: "rotateX(180deg)" }}
      />
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="bg-[#D3D3D3] dark:bg-black w-full pt-5 2xl:pb-[200px] 2xl:mb-[-180px] pb-[150px] mb-[-115px] "
      >
        <div className="md:max-w-[1300px] w-full mx-auto xl:px-0 px-5 md:pt-[90px] pt-4 text-center">
          <h1 className="font-bold sm:text-[50px] text-2xl sm:pb-5 pb-0 sm:leading-[66px] leading-normal text-center capitalize text-[#333] dark:text-white">
            Triage rapidly solves a particular marketing or
            <span className="text-[#1F57A1]">
              {" "}
              audience challenge elevating campaigns into{" "}
            </span>
            unexpected new territories
          </h1>
          <Divider className="md:!text-[40px] font-semibold !border-[#1F57A1]">
            How do Triage sprints work?
          </Divider>
          <motion.div  className="flex xl:flex-row flex-col xl:gap-16 gap-4 mt-12 mb-20">
            {triageSprintData.map((data, key) => (
              // console.log(data)
              <TriageSprintComp key={key} {...data} index={key} />
            ))}
          </motion.div>

          <motion.div className="counter bg-blue border-dashed border-white border-[3px] rounded-[50px] flex sm:flex-row flex-col sm:gap-0 gap-9 justify-evenly py-7">
            {counterData.map((data, key) => (
              <CounterComp key={key} {...data} index={key} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

const TriageSprintComp = (props) => {
  const { image, title, desc } = props;
  return (
    <motion.div className="inline-block rounded-[25px] border-[3px] border-[#fff] bg-white text-center px-7 py-[55px]  ">
      <div className="border-2 border-dashed border-[#1F57A1] rounded-full p-4 w-auto inline-block">
        <Image
          src={image}
          width={291}
          height={291}
          alt="join us"
          className="mx-auto w-full md:min-w-[291px] md:min-h-[291px] md:max-w-[291px] md:max-h-[291px]"
        />
      </div>
      <h3 className="md:text-[35px] text-2xl md:leading-[46px] leading-normal font-semibold py-5">
        {title}
      </h3>
      <p className="text-[#000] text-base text-center capitalize">{desc}</p>
    </motion.div>
  );
};

const CounterComp = (props) => {
  const { count, desc, suffix, index } = props;
  return (
    <motion.div className="md:w-1/3 w-full border-r-2 border-white last:border-r-0">
      <h3 className="md:text-[40px] text-xl md:leading-[48px] leading-normal text-white font-semibold">
        <CountUp end={count} /> {suffix}
      </h3>
      <p className="text-base text-white">Developers Worldwide</p>
    </motion.div>
  );
};
export default TriageSprint;
