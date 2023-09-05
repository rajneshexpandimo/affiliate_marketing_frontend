import React from "react";
import { motion, useScroll, Variants } from "framer-motion";
import Image from "next/image";

const InfoWeCollect = () => {
  return (
    <div className="earn_confidence lg:my-2 sm:mt-10">
      <div className="md:max-w-[1300px] w-full mx-auto flex lg:flex-row flex-col xl:px-0 pt-5 px-6 items-center">
        <div className="w-full">
          <motion.div
            className="card-container sm:pt-8"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.h2
              // variants={cardVariantsRight}
              className="font-bold sm:text-[50px] text-2xl sm:pb-10 pb-2 sm:leading-[66px] leading-normal text-center lg:max-w-[1070px] mx-auto uppercase"
            >
              <span className="text-[#295DA7]">Information </span>
              We Collect
            </motion.h2>
            <motion.p className="sm:text-xl text-lg pb-2 capitalize">
              The information we collect allows us to see browsing habits at an
              individual device level, but we do not attempt to identify the
              exact individual who is browsing. Here we outline the types of
              information used in Interest-Based Advertising, as well as what to
              expect when visiting our Site.
            </motion.p>

            <Image src="/images/infoWeCollect.png" width={1267} height={627} />

            <motion.p className="sm:text-2xl text-lg pt-3 capitalize">
              SocialProfit.IO Services and Site collects both Personal
              Information and Non-Personal Information.SocialProfit.IO does not
              collect personally identifiable information (“PII”) about Readers
              such as names, surnames, plain-text email addresses, physical
              addresses, or phone numbers, unless provided to us through the
              Site when requesting materials or information from us. For
              clarity, none of the information collected through the Site is
              used in our commercial Data products.
            </motion.p>

            <div className="sm:pt-10 pt-5">
              <h2 className="font-bold sm:text-[50px] text-2xl sm:pb-5 pb-2 sm:leading-[66px] leading-normal text-center lg:max-w-[1070px] mx-auto uppercase">
              <span className="text-[#295DA7]">Information </span>
              We Collect

              </h2>
            <p className="sm:text-xl text-lg font-medium capitalize">
              The information we collect allows us to see browsing habits at an
              individual device level, but we do not attempt to identify the
              exact individual who is browsing. Here we outline the types of
              information used in Interest-Based Advertising, as well as what to
              expect when visiting our Site.
              <br />
              <br />
              <span className="sm:text-2xl text-lg font-normal capitalize">
              Both session cookies (which expire once the web browser is closed)
              and persistent cookies (which stay on a device until deleted or
              expire) are used to collect viewing and search behaviors by both
              Sovrn Services and the Site. For more information about how
              cookies are used or what information

              </span>
            </p>
            
            <div className="flex items-center lg:flex-row flex-col">
              <Image 
              src="/images/socialProfitServices.png"
              width={719}
              height={718}
              className="xl:w-auto lg:w-1/2 w-full"
              />
              <div className="lg:w-1/2 w-full">
                <h2 className="2xl:text-[40px] sm:text-[36px]  text-2xl font-bold text-[#1F57A1] sm:leading-[48px] leading-normal">Through our site</h2>
                <p className="sm:text-2xl text-lg capitalize">We collect Personal Information submitted to us voluntarily, such as name and contact information. For example, when signing up to receive our newsletter or to participate in a webinar we collect your email address. When contacting us via email, we will collect the email contents.</p>
                <h2 className="sm:text-[36px] text-2xl font-bold text-[#1F57A1]  sm:leading-[48px] leading-normal sm:pt-10 pt-3">Through <span className="font-normal">SocialProfit.IO</span> Services</h2>
                <p className="sm:text-xl text-lg capitalize">The information we gather about browsing preferences and purchasing behaviors using cookies helps us provide SocialProfit.IO Services to our Publishers, which in turn provides meaningful Interest-based Advertising to Readers.</p>
              </div>
            </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InfoWeCollect;
