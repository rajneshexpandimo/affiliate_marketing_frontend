import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';

const cardVariantsLeft = {
  offscreen: {
    opacity: 0,
    x: -50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};
const cardVariantsRight = {
  offscreen: {
    opacity: 0,
    x: 50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const TrustThePros = () => {
  return (
    <>
    <img
    src="/images/grey_wave.png"
    alt="upper wave"
    className=" w-full"
    style={{ transform: "rotateX(180deg)" }}
  />
  <div className="bg-[#D3D3D3] w-full py-5">
    <div className="md:max-w-[1300px] w-full mx-auto xl:px-0 px-5 pt-5 sm:my-10">
      <motion.h1
        className="font-bold sm:text-5xl text-[30px] sm:leading-[66px] leading-normal text-center"
      >
    
        <span className="text-[#295DA7]"> Trust</span> the pros.
      </motion.h1>
      <motion.p className="sm:text-2xl text-[18px] leading-8 font-light text-center lg:max-w-[1132px] mx-auto">
      You know your tech partners should be highly vetted and certified. Rest easy knowing that Sovrn has earned the highest possible industry certifications for trust and transparency.
      </motion.p>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
    <motion.div  variants={cardVariantsLeft}  className='flex md:flex-row flex-col lg:max-w-[708px] mx-auto sm:justify-between justify-center items-center gap-4 my-10'>
        <Image src='/images/tag.png' width={150} height={150} alt="certified against fraud" quality={100} />
        <Image src='/images/tag1.png' width={165} height={150} alt="certified against fraud" quality={100}/>
        <Image src='/images/tag3.png' width={161} height={150} alt="certified against fraud" quality={100}/>
        <Image src='/images/balanced.png' width={150} height={150} alt="certified against fraud" quality={100}/>
    </motion.div>
    <motion.div variants={cardVariantsRight} className='flex md:flex-row flex-col lg:max-w-[768px] mx-auto sm:justify-between justify-center items-center gap-4 my-10'>
        <Image src='/images/certified.png' width={342} height={122} alt="certified against fraud" className='box-shadow' />
        <Image src='/images/iab_certified.png' width={180} height={130} alt="certified against fraud" />
        <Image src='/images/iab_blue_certified.png' width={222} height={138} alt="certified against fraud" />
    </motion.div>
    </motion.div>
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
