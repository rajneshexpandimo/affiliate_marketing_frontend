import React from 'react'
import { motion, useScroll, Variants } from "framer-motion";
import Image from "next/image";

const OurInfoSharing = () => {
  return (
    <div className="earn_confidence lg:my-2 my-10">
      <div className="md:max-w-[1300px] w-full mx-auto flex lg:flex-row flex-col xl:px-0 px-6 items-center">
        <div className="w-full">
          <motion.div
            className="card-container pb-8"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.h2
              // variants={cardVariantsRight}
              className="font-bold sm:text-[50px] text-2xl sm:pb-3 pb-0 sm:leading-[66px] leading-normal text-center lg:max-w-[1070px] mx-auto uppercase"
            >
              <span className="text-[#295DA7]">Our Information </span>
              Sharing Practices
            </motion.h2>
            <motion.p className="sm:text-2xl text-lg pb-2 capitalize">
            We use Personal- and Non-Personal Information to support our commercial interests (Interest-based Advertising, affiliate network marketing, and Data), internal business operations (such as improving the Services, fraud prevention and security), and business intelligence.
            </motion.p>

            <h3 className='sm:text-4xl text-2xl text-center font-semibold py-4 '>Commercial Interests:</h3>
            <p className='sm:text-2xl text-lg capitalize'>Commercial interests are activities that allow SocialProfit.IO and/or our customers and business partners (such partners include data services and data resellers) to earn revenue and include, for example:</p>
            <ul className='px-8'>
            <li className='list-disc sm:text-2xl text-lg py-5 capitalize'>Serving Interest-based Advertising to Readers on behalf of our Publishers and supporting third parties’ Interest-Based Advertising activities. Options for opting-out of such advertising may be found in the -- section of this Privacy Policy.</li>
            <li className='list-disc sm:text-2xl text-lg py-2 capitalize'>Creating audience segments* by categorizing Personal Information we have collected by common interests, intent or other characteristics (for clarity, PII is not used for this purpose). Audience segments are used to provide additional insights, enrichment of our Publisher’s first party data, and to attribute reader interests to browsers and devices to better inform advertising campaigns.</li>
            <li className='list-disc sm:text-2xl text-lg py-5 capitalize'>Specific to Sovrn Commerce, we will use Personal Information to optimize links, determine the best merchant destination for clicks, and set the appropriate language and region for click destinations.</li>
            </ul>


            <div className=' xl:my-14'>
                <h2 className='uppercase font-bold sm:text-[50px] text-2xl text-center text-[#1F57A1] py-5'>
                Contact Us
                </h2>
                <p className='sm:text-2xl text-lg pb-5 capitalize'>Please contact us at privacy[at]sovrn.com with questions or concerns regarding our Privacy Policy or how we process your Personal Information.</p>
                <p className='sm:text-2xl text-lg pb-5 capitalize'>SocialProfit.IO will respond in good faith to all privacy inquiries but may not be able to provide complete information if the request requires SocialProfit.IO to release confidential information of third parties, or otherwise imposes an undue burden or expense.</p>
                <div className='flex sm:gap-14 gap-5 pb-5 sm:flex-row flex-col'>
                    <p className='sm:text-2xl text-lg lg:max-w-[493px] font-semibold capitalize'>SocialProfit.IO U.S. Headquarters12345 Central Avenue, Suite 100Boulder, CO 80301United States</p>
                    <p className='sm:text-2xl text-lg lg:max-w-[493px] font-semibold capitalize'>SocialProfit Switzerland, S.A. Via Cantonale 19, CH- 6900 Lugano Switzerland</p>
                </div>
            </div>

            <div>
                <h2 className='font-semibold sm:text-4xl text-2xl text-center sm:py-6 pb-5 capitalize'>Changes in this Privacy Policy</h2>
                <p className='sm:text-2xl text-lg max-md:text-center capitalize'>We may modify or amend this Privacy Policy from time to time at our discretion. When we make material changes to this Privacy Policy</p>
            </div>
            



            
            
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default OurInfoSharing