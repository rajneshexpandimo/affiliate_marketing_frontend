import React from "react";
import Image from "next/image";
import CountUp from "../../common/CountUp";

const cardData = [
  {
    userImage: "/images/user1.png",
    name: "Affiliate",
    earning: "36,563",
  },
  {
    userImage: "/images/user1.png",
    name: "Affiliate",
    earning: "36,563",
  },
  {
    userImage: "/images/user1.png",
    name: "Affiliate",
    earning: "36,563",
  },
];
const ActiveAffiliate = () => {
  return (
    <div className="md:max-w-[1300px] w-full mx-auto xl:px-0 px-5 md:pt-[90px] md:pb-10 py-5">
      <h1 className="font-bold sm:text-[64px] text-3xl sm:pb-5 pb-0 sm:leading-[66px] leading-normal text-center capitalize text-[#333]">
        Most active affiliates
        <span className="text-[#295DA7]"> on SocialProfit.IO </span>
      </h1>
      <p className="text-base text-center  lg:max-w-[1140px] mx-auto">
        Our network is dedicated to helping affiliates like you succeed and grow
        your business. By joining our network, you will have access to a range
        of resources, support, and exclusive offers from reputable, regulated
        brands.
      </p>
      <div className="flex md:flex-row flex-col gap-10 my-12 lg:max-w-[1194px] mx-auto">
        {cardData.map((data, key) => (
          <CardComp key={key} {...data} index={key} />
        ))}
      </div>
    </div>
  );
};

const CardComp = (props) => {
  const { userImage, name, earning } = props;
  return (
    <div className="flex  w-full">
   <div className="w-[25%] bg-[#1F57A1] min-w-[114px] min-h-[102]">
   <Image
        src={userImage}
        width={100}
        height={100}
        alt="join us"
        className="mx-auto bg-[#1F57A1]"
      />
   </div>
      <div className="bg-[#d3d3d3] text-center w-[75%] flex flex-col justify-center items-center">
        <h3 className="md:text-xl font-semibold text-[#333] uppercase">
          {name}
        </h3>
        <p className="text-[#1F57A1] text-base text-center"> ${earning}</p>
      </div>
    </div>
  );
};

export default ActiveAffiliate;
