import Image from "next/image";
import React from "react";

const OurMission = () => {
  return (
    <div className="md:max-w-[1300px] w-full mx-auto text-center pt-10 lg:pb-40 pb-10 xl:px-0 lg:px-3 px-6 ">
      <p className="text-[#295DA7] uppercase font-bold lg:text-2xl">
        Our Mission
      </p>
      <h2 className="font-bold sm:text-[64px] text-2xl sm:pb-5 pb-4 text-[#333] md:leading-[88px] leading-normal">
        <span className="text-[#295DA7]">We are helping </span> people to get a
        success
      </h2>
      <p className="text-center md:text-2xl text-lg capitalize">
        Welcome to socialProfit.IO, the revolutionary partnership management
        platform that’s revolutionizing the way businesses operate!
        <br />
        <br />
        Our mission at socialProfit.IO is to empower businesses of all sizes to
        expand their reach and grow their partnership network. Our platform
        gives you access to the most comprehensive and reliable partnership
        automation available, allowing you to scale every type of partnership in
        an efficient, cost-effective way.
        <br />
        <br />
        With socialProfit.IO you can easily connect to affiliates, influencers,
        strategic business partners, mobile apps, publishers, and more. You’ll
        have the ability to quickly and effortlessly onboard new partners, track
        performance, optimize campaigns, and manage all of your partnerships in
        one place.
      </p>

      <div className="flex xl:flex-row flex-col xl:gap-0 gap-6 justify-between relative md:pt-20 pt-5">
        <div className="shrink bg-blue box-shadow-dark text-white rounded-[50px] py-8 xl:px-20 px-10 z-10 xl:max-w-[481px]  max-w-full min-h-[423px]">
          <Image src={'/icons/transparency.svg'} width={100} height={100} alt="Transparency" className="mx-auto"/>
          <h3 className="md:text-4xl text-2xl text-white font-semibold text-center lg:leading-[46px] leading-normal">Transparency</h3>
          <p className="sm:text-2xl text-lg text-center">We uphold high standards and earn trust through actions, nurturing it and expecting reciprocation. Our commitment is shown through what we do.</p>
        </div>
        <div className="shrink bg-[#d3d3d3] box-shadow-dark text-[#333] rounded-[50px] py-8 xl:px-20  px-10 z-20 xl:absolute relative xl:left-0 xl:right-0 xl:top-[32%] top-0 m-auto xl:max-w-[481px] max-w-full min-h-[423px]">
          <Image src={'/icons/GroupTask.svg'} width={100} height={100} alt="Transparency" className="mx-auto"/>
          <h3 className="md:text-4xl text-2xl text-[#333] font-semibold text-center lg:leading-[46px] leading-normal">Experienced team</h3>
          <p className="sm:text-2xl text-lg text-center">Our experienced team comprises skilled professionals who offer diverse expertise and bring exceptional results to the table.</p>
        </div>
        <div className="shrink bg-blue box-shadow-dark text-white rounded-[50px] py-8 xl:px-20 px-10 z-10 xl:max-w-[481px] max-w-full min-h-[423px]">
          <Image src={'/icons/transparency.svg'} width={100} height={100} alt="Transparency" className="mx-auto"/>
          <h3 className="md:text-4xl text-2xl text-white font-semibold text-center lg:leading-[46px] leading-normal">Security garantie</h3>
          <p className="sm:text-2xl text-lg text-center">We uphold high standards and earn trust through actions, nurturing it and expecting reciprocation. Our commitment is shown through what we do.</p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
