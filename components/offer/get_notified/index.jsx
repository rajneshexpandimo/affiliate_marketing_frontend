import React from "react";

const GetNotified = () => {
  return (
    <>
      <img
        src="/images/grey_wave.png"
        alt="upper wave"
        className="w-full mb-[-3px]"
        style={{ transform: "rotateX(180deg)" }}
      />
      <div className="bg-[#D3D3D3] w-full pt-5 2xl:pb-[200px] 2xl:mb-[-180px] pb-[150px] mb-[-115px] ">
        <div className="md:max-w-[1300px] w-full mx-auto xl:px-0 px-5 md:pt-[90px] pt-4 text-center">
          <h1 className="font-bold sm:text-[64px] text-3xl sm:pb-5 pb-0 sm:leading-[66px] leading-normal text-center capitalize text-[#333]">
            <span className="text-[#295DA7]"> Get notified </span>of the next
            awesome Forex &{" "}
            <span className="text-[#295DA7]"> Crypto offers </span>
          </h1>
          <p className="text-base text-center  lg:max-w-[1140px] mx-auto py-3">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
          <button className="bg-blue rounded-[10px] min-w-[186px] min-h-[58px] text-white text-base mt-6">Start Now</button>

        </div>
      </div>
    </>
  );
};

export default GetNotified;
