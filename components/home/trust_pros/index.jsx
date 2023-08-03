import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';

const visible = { opacity: 1, x: 0, transition: { duration: 0.9 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

const TrustThePros = () => {
  return (
    <>
    <img
    src="/images/grey_wave.png"
    alt="upper wave"
    className="md:mb-[-20px] mb-[-10px] w-full"
    style={{ transform: "rotateX(221deg)" }}
  />
  <div className="bg-[#D3D3D3] w-full py-5">
    <div className="md:max-w-[1300px] w-full mx-auto xl:px-0 px-5 pt-5 my-10">
      <motion.h1
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible,
        }}
        className="font-bold text-[50px] leading-[66px] text-center"
      >
    
        <span className="text-[#295DA7]"> Trust</span> the pros.
      </motion.h1>
      <motion.p className="text-2xl leading-8 font-light text-center lg:max-w-[1132px] mx-auto">
      You know your tech partners should be highly vetted and certified. Rest easy knowing that Sovrn has earned the highest possible industry certifications for trust and transparency.
      </motion.p>
    <div className='flex lg:max-w-[708px] mx-auto justify-between my-10'>
        <Image src='/images/tag.png' width={150} height={150} alt="certified against fraud" />
        <Image src='/images/tag1.png' width={165} height={150} alt="certified against fraud" />
        <Image src='/images/tag3.png' width={161} height={150} alt="certified against fraud" />
        <Image src='/images/balanced.png' width={150} height={150} alt="certified against fraud" />
    </div>
    <div className='flex lg:max-w-[768px] mx-auto justify-between'>
        <Image src='/images/certified.png' width={342} height={122} alt="certified against fraud" />
        <Image src='/images/iab_certified.png' width={180} height={130} alt="certified against fraud" />
        <Image src='/images/iab_blue_certified.png' width={222} height={138} alt="certified against fraud" />
    </div>
    </div>
  </div>
  <img
    src="/images/grey_wave.png"
    alt="upper wave"
    className="mb-[-20px] w-full"
  />
</>
  )
}

export default TrustThePros
