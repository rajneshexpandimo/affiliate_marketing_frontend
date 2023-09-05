import React from "react";
import { motion, useScroll, Variants } from "framer-motion";

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

const TermsData = () => {
  return (
    <div className="termsData lg:mt-24 lg:mb-14 my-10">
      <div className="md:max-w-[1300px] w-full mx-auto flex lg:flex-row flex-col xl:px-0 px-5 items-center lg:gap-32 gap-10">
        <div className="w-full">
          <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.h1
              // variants={cardVariantsRight}
              className="font-bold sm:text-[50px] text-3xl sm:pb-5 pb-0 sm:leading-[66px] leading-normal text-[#333] dark:text-white"
            >
              REGISTRATION
            </motion.h1>
            <div>
              <ol className="list-inside custom_order_list">
                <li>
                  <span className="mt-1 border-[#000000] border rounded-full min-w-[43px] min-h-[43px] max-w-[43px] max-h-[43px] flex items-center justify-center">
                    <span className="bg-blue text-white rounded-full min-w-[35px] min-h-[35px] max-w-[35px] max-h-[35px] flex justify-center items-center">
                      1
                    </span>
                  </span>
                  To make use of the Service, it is necessary to create an
                  account (“Account”).
                </li>
                <li>
                  <span className="mt-1 border-[#000000] border rounded-full min-w-[43px] min-h-[43px] max-w-[43px] max-h-[43px] flex items-center justify-center">
                    <span className="bg-blue text-white rounded-full min-w-[35px] min-h-[35px] max-w-[35px] max-h-[35px] flex justify-center items-center">
                      2
                    </span>
                  </span>
                  The Service is intended solely for persons who are 18 or
                  older. Any access to or use of the Service by anyone under 18
                  is expressly prohibited. By accessing or using the Service you
                  represent and warrant that you are 18 or older.
                </li>
                <li>
                  <span className="mt-1 border-[#000000] border rounded-full min-w-[43px] min-h-[43px] max-w-[43px] max-h-[43px] flex items-center justify-center">
                    <span className="bg-blue text-white rounded-full min-w-[35px] min-h-[35px] max-w-[35px] max-h-[35px] flex justify-center items-center">
                      3
                    </span>
                  </span>
                  To create your Account you will have to provide your full
                  name, your current email-address and your credit card details
                  (only Advertisers).
                </li>
                <li>
                  <span className="mt-1 border-[#000000] border rounded-full min-w-[43px] min-h-[43px] max-w-[43px] max-h-[43px] flex items-center justify-center">
                    <span className="bg-blue text-white rounded-full min-w-[35px] min-h-[35px] max-w-[35px] max-h-[35px] flex justify-center items-center">
                      4
                    </span>
                  </span>
                  Anyone who registers, agrees that all information supplied on
                  registration is true and accurate and will be kept up to date
                  at all times. If the information provided is not true and/or
                  accurate, we reserve the right to block, cancel or remove your
                  Account.
                </li>
                <li>
                  <span className="mt-1 border-[#000000] border rounded-full min-w-[43px] min-h-[43px] max-w-[43px] max-h-[43px] flex items-center justify-center">
                    <span className="bg-blue text-white rounded-full min-w-[35px] min-h-[35px] max-w-[35px] max-h-[35px] flex justify-center items-center">
                      5
                    </span>
                  </span>
                  You are responsible for the security of your username and
                  password.SocialProfit.IO shall not be held liable for any
                  damage resulting from your failure to comply with this
                  security obligation.{" "}
                </li>
              </ol>
            </div>
          </motion.div>
          {/* Payment list next */}
          <motion.div
            className="card-container lg:mt-[100px] mt-10"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.h1
              // variants={cardVariantsRight}
              className="font-bold sm:text-[50px] text-3xl sm:pb-5 pb-0 sm:leading-[66px] leading-normal text-[#333]  dark:text-white"
            >
              PAYMENT
            </motion.h1>
            <div>
              <ol className="list-inside custom_order_list">
                <li>
                  <span className="mt-1 border-[#000000] border rounded-full min-w-[43px] min-h-[43px] max-w-[43px] max-h-[43px] flex items-center justify-center">
                    <span className="bg-blue text-white rounded-full min-w-[35px] min-h-[35px] max-w-[35px] max-h-[35px] flex justify-center items-center">
                      1
                    </span>
                  </span>
                  A valid, chargeable credit card or chargeable ---------
                  account and billing agreement is required for paying accounts.
                  If neither of these is present on the account, the account may
                  be closed.
                </li>
                <li>
                  <span className="mt-1 border-[#000000] border rounded-full min-w-[43px] min-h-[43px] max-w-[43px] max-h-[43px] flex items-center justify-center">
                    <span className="bg-blue text-white rounded-full min-w-[35px] min-h-[35px] max-w-[35px] max-h-[35px] flex justify-center items-center">
                      2
                    </span>
                  </span>
                  The Service is billed in advance on a monthly or yearly basis
                  (Monthly or Annual Subscription Period) as according to the
                  rates specified on SocialProfit.IO pricing page;----website
                  link---- Billing starts automatically when the 14-day free
                  trial ends.
                </li>
                <li>
                  <span className="mt-1 border-[#000000] border rounded-full min-w-[43px] min-h-[43px] max-w-[43px] max-h-[43px] flex items-center justify-center">
                    <span className="bg-blue text-white rounded-full min-w-[35px] min-h-[35px] max-w-[35px] max-h-[35px] flex justify-center items-center">
                      3
                    </span>
                  </span>
                  Paid Service can be refundable as provided herein. There will
                  be no refunds or credits for partial months of service, nor
                  will SocialProfit.IO refund for months unused with an open
                  account.
                </li>
                <li>
                  <span className="mt-1 border-[#000000] border rounded-full min-w-[43px] min-h-[43px] max-w-[43px] max-h-[43px] flex items-center justify-center">
                    <span className="bg-blue text-white rounded-full min-w-[35px] min-h-[35px] max-w-[35px] max-h-[35px] flex justify-center items-center">
                      4
                    </span>
                  </span>
                  SocialProfit.IO will only agree to refund requests for annual
                  billing when your account has been closed within the first 30
                  days after the initial payment took place. In case of Monthly
                  billing, SocialProfit.IO will only refund the initial payment
                  made when your account has been closed within the first 30
                  days after the initial payment took place.
                </li>
                <li>
                  <span className="mt-1 border-[#000000] border rounded-full min-w-[43px] min-h-[43px] max-w-[43px] max-h-[43px] flex items-center justify-center">
                    <span className="bg-blue text-white rounded-full min-w-[35px] min-h-[35px] max-w-[35px] max-h-[35px] flex justify-center items-center">
                      5
                    </span>
                  </span>
                  All fees are exclusive of all taxes, levies, or duties imposed
                  by taxing authorities, and you shall be responsible for
                  payment of all such taxes, levies, or duties.
                </li>
                <li>
                  <span className="mt-1 border-[#000000] border rounded-full min-w-[43px] min-h-[43px] max-w-[43px] max-h-[43px] flex items-center justify-center">
                    <span className="bg-blue text-white rounded-full min-w-[35px] min-h-[35px] max-w-[35px] max-h-[35px] flex justify-center items-center">
                      6
                    </span>
                  </span>
                  SocialProfit.IO has no responsibility or legal power to ensure
                  the payment of the Advertiser and accepts no responsibility or
                  liability in the event that the Affiliate fails to arrange or
                  collect payment from the Advertiser.
                </li>
              </ol>
            </div>
          </motion.div>

          <motion.div
            className="card-container  lg:mt-[100px] mt-10"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.h1
              // variants={cardVariantsRight}
              className="font-bold sm:text-[50px] text-3xl sm:pb-3 pb-0 sm:leading-[66px] leading-normal text-center lg:max-w-[860px] mx-auto"
            >
              <span className="text-[#295DA7]">UPGRADING, </span> DOWNGRADING
              AND <span className="text-[#295DA7]">TRACKING EVENTS</span>
            </motion.h1>
            <p className="text-center md:text-2xl text-lg leading-8 mt-4">
              SocialProfit.IO offers different Services levels. Every Service
              level includes a different number of tracking events (“Tracking
              Events”). You may upgrade or downgrade your Service level at any
              given time during your subscription period (the “Subscription
              Period”) in accordance to the terms specified herein. Changing
              your Service Level during the Subscription period will have
              immediate effect.
              <br />
              <br />
              In case of an upgrade to a higher Service level of your Monthly
              Subscription Period, the monthly fee of the higher Service level
              will be charged minus the difference between the total amount of
              the paid for the Service level before upgrading, and the amount of
              the fee for the days not used (pro rata). In case of an upgrade of
              your Annual Subscription you will be charged with the yearly fee
              of the higher Service level minus the difference between the total
              amount of the paid of the Service level before upgrading and the
              amount of the fee for the days not used (pro rata).
              <br />
              <br />
              Downgrading your Service Level during the Monthly Subscription
              period is possible at any given moment. Downgrading your Service
              level or changing from Annual Subscription to a Monthly
              Subscription during the Annual Subscription period is only
              possible within the first 30 days of the initial payment or within
              the last week of the annual paid Service period, by written
              request to the SocialProfit.IO Support Team. The monthly fee will
              be adjusted accordingly the next month of the Subscription period.
              <br />
              <br />
              When you upgrade or downgrade your Service Level the new
              calculated rate will be automatically charged on the next billing
              date. We will charge the financial service account as provided by
              you.
            </p>
          </motion.div>

          <motion.div
            className="card-container lg:mt-[100px] mt-10"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.h1
              // variants={cardVariantsRight}
              className="font-bold sm:text-[50px] text-3xl sm:pb-5 pb-0 sm:leading-[66px] leading-normal text-[#333]  dark:text-white"
            >
              CANCELLATION   <span className="text-[#295DA7]">AND TERMINATION </span> 
            </motion.h1>
            <div>
              <ol className="list-inside custom_order_list">
                <li>
                  <span className="mt-1 border-[#000000] border rounded-full min-w-[43px] min-h-[43px] max-w-[43px] max-h-[43px] flex items-center justify-center">
                    <span className="bg-blue text-white rounded-full min-w-[35px] min-h-[35px] max-w-[35px] max-h-[35px] flex justify-center items-center">
                      1
                    </span>
                  </span>
                  We may, in our discretion and without liability to you, with
                  or without cause, with or without prior notice and at any
                  time, decide to limit, suspend, deactivate or cancel your
                  Account.
                </li>
                <li>
                  <span className="mt-1 border-[#000000] border rounded-full min-w-[43px] min-h-[43px] max-w-[43px] max-h-[43px] flex items-center justify-center">
                    <span className="bg-blue text-white rounded-full min-w-[35px] min-h-[35px] max-w-[35px] max-h-[35px] flex justify-center items-center">
                      2
                    </span>
                  </span>
                  If we exercise our discretion under these Terms to do so, any
                  or all of the following can occur with or without prior notice
                  or explanation to you: (a) your Account will be deactivated or
                  suspended, your password will be disabled, and you will not be
                  able to access the Service, or receive assistance from our
                  customer service.
                </li>
                <li>
                  <span className="mt-1 border-[#000000] border rounded-full min-w-[43px] min-h-[43px] max-w-[43px] max-h-[43px] flex items-center justify-center">
                    <span className="bg-blue text-white rounded-full min-w-[35px] min-h-[35px] max-w-[35px] max-h-[35px] flex justify-center items-center">
                      3
                    </span>
                  </span>
                  You may cancel your Account at any time from the Subscription
                  & Billing page &gt; Plan page. You are solely responsible for
                  properly canceling your account. Please note that if your
                  Account is canceled, we do not have an obligation to delete or
                  return to you any content.
                </li>
                <li>
                  <span className="mt-1 border-[#000000] border rounded-full min-w-[43px] min-h-[43px] max-w-[43px] max-h-[43px] flex items-center justify-center">
                    <span className="bg-blue text-white rounded-full min-w-[35px] min-h-[35px] max-w-[35px] max-h-[35px] flex justify-center items-center">
                      4
                    </span>
                  </span>
                  All of your content (text and files) may be immediately
                  deleted from the Service upon cancellation. This information
                  cannot be recovered once your account is canceled.
                </li>
                <li>
                  <span className="mt-1 border-[#000000] border rounded-full min-w-[43px] min-h-[43px] max-w-[43px] max-h-[43px] flex items-center justify-center">
                    <span className="bg-blue text-white rounded-full min-w-[35px] min-h-[35px] max-w-[35px] max-h-[35px] flex justify-center items-center">
                      5
                    </span>
                  </span>
                  If you cancel the Service before the end of your current
                  Service Period, your cancellation will take effect immediately
                  and you will not be charged again.
                </li>
           
              </ol>
            </div>
          </motion.div>

        

          <motion.div
            className="card-container  lg:mt-[100px] mt-10"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.h1
              // variants={cardVariantsRight}
              className="font-bold sm:text-[50px] text-3xl sm:pb-3 pb-0 sm:leading-[66px] leading-normal text-center  mx-auto"
            >
              <span className="text-[#295DA7]">MODIFICATION TO </span>  THE SERVICE AND PRICES
             
            </motion.h1>
            <p className="text-center md:text-2xl text-lg leading-8 mt-4">
            SocialProfit.IO reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice.<br/><br/>
            Prices of all Services, including but not limited to monthly subscription Service fees, are subject to change upon 30 days notice from us. Such notice may be provided at any time by posting the changes to the SocialProfit.IO<br/><br/>
            SocialProfit.IO shall not be liable to you or to any third party for any modification, price change, suspension or discontinuance of the Service.
            </p>
          </motion.div>


          <motion.div
            className="card-container  lg:mt-[100px] mt-10"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.h1
              // variants={cardVariantsRight}
              className="font-bold sm:text-[50px] text-3xl sm:pb-3 pb-0 sm:leading-[66px] leading-normal text-center  mx-auto"
            >
              <span className="text-[#295DA7]">INTELLECTUAL </span>  PROPERTY
             
            </motion.h1>
            <p className="text-center md:text-2xl text-lg leading-8 mt-4">
            We reserve all rights in relation to our copyright whether owned or licensed to us and all rights are reserved to any of our registered and unregistered trademarks (whether owned or licensed to us) which appear on this website.<br/><br/>
            SocialProfit.IO has the right in its sole discretion to  remove any Content that is available via the Service.<br/><br/>
            The Service and this website or any portion of the Service or the website may not be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose without our express written consent. You may not systematically extract and/or re-utilise parts of the contents of the Service without our express written consent. In particular, you may not utilize any data mining, robots, or similar data gathering and extraction tools to extract (whether once or many times) for re-utilisation of any substantial parts of the Service without our express written consent.<br/><br/>
            We claim no intellectual property rights over the material you provide to the Service. Your profile and materials uploaded remain yours. However, if you or anyone else with access to your account makes any content public, you agree to allow others to view and share your content.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsData;
