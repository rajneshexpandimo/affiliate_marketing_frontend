import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="bg-[#D3D3D3] w-full py-36">
        <div className="md:max-w-[1300px] w-full mx-auto flex">
          <div className="w-1/2 ">
            <h1 className="font-bold text-[64px] pb-5">
              <span className="text-[#295DA7]">Empowering</span> you to monetise
              your platform
            </h1>
            <p className="text-2xl pb-12 font-extralight">
              Unlock your earning potential today!
            </p>
            <button className="border-2 border-s-[21px] p-4 border-[#1F57A1] bg-[#E7E7E7] rounded-[5px]">
              GET STARTED
            </button>
          </div>
          {/* <Image src='/images/home_banner.png' alt='' width={690} height={561} />
        
        */}

          <img src="images/home_banner.png" alt="banner" />
        </div>
      </div>
      <img src="images/grey_wave.png" alt="waves" className="w-full"/>
      {/* <Image
        src="/images/grey_wave.png"
        alt="wave shape"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      /> */}
    </>
  );
};

export default HeroSection;
