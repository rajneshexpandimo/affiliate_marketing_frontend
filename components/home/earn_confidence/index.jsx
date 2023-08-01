import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const visible = { opacity: 1, x: 0, transition: { duration: 0.9 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

const EarnConfidence = () => {
  return (
    <div className="earn_confidence">
      <motion.article
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <div className="md:max-w-[1300px] w-full mx-auto flex lg:flex-row flex-col xl:px-0 px-5 items-center">
          <div className="lg:w-1/2 w-full">
            <motion.img
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible,
              }}
              src="/images/confidence.png"
              alt="Earn with confidence"
              width={627}
              height={550}
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <motion.h1
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible,
              }}
              className="font-bold text-[50px] pb-5 leading-[66px]"
            >
              <span className="text-[#295DA7]">Earn</span> with confidence
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible,
              }}
              className="text-base font-light leading-[21px]"
            >
              Here at SP, we are dedicated to providing unparalleled support to
              our affiliates, ensuring their success and growth. Our tailored
              approach begins by understanding the unique needs and goals of
              each affiliate, allowing us to offer personalized guidance and
              resources. We believe in fostering strong relationships with our
              affiliates, providing continuous training and education on the
              latest marketing strategies and industry trends. By equipping them
              with cutting-edge tools and a user-friendly platform, we empower
              our affiliates to optimize their performance and maximize their
              earnings.
            </motion.p>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export default EarnConfidence;
