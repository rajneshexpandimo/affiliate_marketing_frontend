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
    flag: "/images/georgia.png",
    title: "Boston",
    addr: "100 High StreetBoston, MA 02110",
    link: "https://www.google.com/maps/place/100+High+St,+Boston,+MA+02110,+USA/@42.3544742,-71.0578804,17z/data=!3m1!4b1!4m6!3m5!1s0x89e3708178ea0e83:0x50c89534c1717af0!8m2!3d42.3544742!4d-71.0553055!16s%2Fg%2F11cnddnv0y?entry=ttu",
  },
  {
    flag: "/images/michigan.png",
    title: "Louisville",
    addr: "100 High StreetBoston, MA 02110",
    link: "https://www.google.com/maps/place/100+High+St,+Boston,+MA+02110,+USA/@42.3544742,-71.0578804,17z/data=!3m1!4b1!4m6!3m5!1s0x89e3708178ea0e83:0x50c89534c1717af0!8m2!3d42.3544742!4d-71.0553055!16s%2Fg%2F11cnddnv0y?entry=ttu",
  },
  {
    flag: "/images/haiti.png",
    title: "Warsaw",
    addr: "100 High StreetBoston, MA 02110",
    link: "https://www.google.com/maps/place/100+High+St,+Boston,+MA+02110,+USA/@42.3544742,-71.0578804,17z/data=!3m1!4b1!4m6!3m5!1s0x89e3708178ea0e83:0x50c89534c1717af0!8m2!3d42.3544742!4d-71.0553055!16s%2Fg%2F11cnddnv0y?entry=ttu",
  },
];

const Locations = () => {
  return (
    <>
      <img
        src="/images/grey_wave.png"
        alt="upper wave"
        className="w-full mb-[-5px]"
        style={{ transform: "rotateX(180deg)" }}
      />
      <div className="bg-[#D3D3D3] w-full pt-5 xl:pb-32 pb-8">
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
          <div className="flex lg:flex-row flex-col xl:gap-3 gap-4 my-12">
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
    const { flag,title, addr, link } = props;
    return (
      <div className="lg:w-4/12 w-full relative z-50">
        <div className="rounded-[50px] border-[3px] border-[#fff] bg-white text-center px-7 py-[55px] z-50 relative max-w-[355px] mx-auto"> <Image src={flag} width={100} height={100} alt="join us" className="mx-auto"/>
        <h3 className="md:text-4xl text-2xl md:leading-[46px] leading-normal font-semibold text-[#333] lowercase">{title}</h3>
            <p className="text-[#000] text-base text-center">
              {" "}
              {addr}
            </p>
            <button className="bg-blue rounded-[10px] min-w-[166px] min-h-[49px] text-white text-base mt-6" onClick={link}>Read More</button>
           </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.4393982181145!2d-71.05788042405935!3d42.35447417119349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3708178ea0e83%3A0x50c89534c1717af0!2s100%20High%20St%2C%20Boston%2C%20MA%2002110%2C%20USA!5e0!3m2!1sen!2sin!4v1692876839280!5m2!1sen!2sin" width="424" height="223" allowfullscreen="" loading="lazy" disableDefaultUI="true" referrerpolicy="no-referrer-when-downgrade" className="absolute bottom-[-32%] z-[-1] xl:block hidden"></iframe>
      </div>
    );
  };

export default Locations;
