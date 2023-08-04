import React from "react";

const LogoSection = () => {
  return (
    <div className="md:max-w-[1300px] w-full mx-auto xl:px-0 px-5 text-center sm:mb-10 mb-0 sm:mt-16 mt-0">
      <div className="logoSectionInfo">
        <h2 className="sm:text-5xl text-[30px] pb-3 font-bold ">
          <span className="text-[#1F57A1] ">Don&apos;t </span>take our word for
          it...
        </h2>
        <p className="text-2xl lg:max-w-[989px] mx-auto pt-1">
          Join over <span className="text-[#1F57A1] ">70,000</span> sites that
          benefit from socialprofit’s world-class advertising, affiliate
          linking, and data tools.
        </p>
      </div>
      <div className="logoSectionImages flex sm:flex-row flex-col flex-wrap justify-between py-10">
        <div className="border-2 rounded-full mb-4  box-shadow sm:w-[32%] 2xl:p-5 p-4 ">
          <img
            src="images/pmc.png"
            className="rounded-[57px] mx-auto 2xl:w-full md:w-3/5 w-full"
          />
        </div>
        <div className="border-2 rounded-full  mb-4  box-shadow sm:w-[32%] 2xl:p-5 p-4">
          <img
            src="images/recurrent.png"
            className="rounded-[57px]  mx-auto 2xl:w-full md:w-3/5"
          />
        </div>
        <div className="border-2 rounded-full  mb-4  box-shadow sm:w-[32%] 2xl:p-5 p-4">
          <img
            src="images/lovetoknow.png"
            className="rounded-[57px] mx-auto 2xl:w-full md:w-3/5"
          />
        </div>
        <div className="border-2 rounded-full  mb-4  box-shadow  sm:w-[32%] 2xl:p-5 p-4">
          <img
            src="images/sheknows.png"
            className="rounded-[57px] mx-auto 2xl:w-full md:w-3/5"
          />
        </div>
        <div className="border-2 rounded-full  mb-4  box-shadow  sm:w-[32%] 2xl:p-5 p-4">
          <img
            src="images/apartment.png"
            className="rounded-[57px] mx-auto 2xl:w-full md:w-3/5"
          />
        </div>
        <div className="border-2 rounded-full  mb-4   box-shadow  sm:w-[32%] 2xl:p-5 p-4">
          <img
            src="images/zola.png"
            className="rounded-[57px] mx-auto 2xl:w-full md:w-3/5"
          />
        </div>
        <div className="border-2 rounded-full  mb-4  box-shadow   sm:w-[32%] 2xl:p-5 p-4">
          <img
            src="images/dailymail.png"
            className="rounded-[57px] mx-auto 2xl:w-full md:w-3/5"
          />
        </div>
        <div className="border-2 rounded-full  mb-4  box-shadow sm:w-[32%] 2xl:p-5 p-4">
          <img
            src="images/thesettletimes.png"
            className="rounded-[57px]  mx-auto 2xl:w-full md:w-3/5"
          />
        </div>
        <div className="border-2 rounded-full  mb-4  box-shadow  sm:w-[32%] 2xl:p-5 p-4">
          <img
            src="images/a360.png"
            className="rounded-[57px]  mx-auto 2xl:w-full md:w-3/5"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
