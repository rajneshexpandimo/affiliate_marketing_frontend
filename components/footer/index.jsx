import { RightOutlined } from "@ant-design/icons";
import { Col, Image, Row } from "antd";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <img
        src="/images/bluewave.png"
        alt="upper wave"
        className="md:mb-[-20px] sm:mb-[-10px] mb-[-4px] w-full"
      />
      <div className="bg-[#1f57a1] w-full shadow-none">
        <div className=" text-white lg:max-w-[1302px] w-full py-[59px] my-0 mx-auto">
          <div className="flex justify-between  flex-wrap 2xl:px-0 px-5">
            <div className="lg:w-1/4 md:w-1/2 w-full">
              <h1 className="text-[25px] font-semibold leading-[37.5px] pb-4">
                SocialProfit{" "}
              </h1>
              <ul className="footer_ul_list">
                <li>
                  <img src="/images/arrow.svg " className="pr-4" />
                  {/* <RightOutlined className="pr-4" /> */}
                  About Us
                </li>
                <li>
                  <img src="/images/arrow.svg " className="pr-4" />
                  Advertised Deals
                </li>
                <li>
                  <img src="/images/arrow.svg " className="pr-4" />
                  Marketing
                </li>
                <li>
                  <img src="/images/arrow.svg " className="pr-4" />
                  Features
                </li>
                <li>
                  <img src="/images/arrow.svg " className="pr-4" />
                  Resources
                </li>
                {/* <li>
                  <RightOutlined className="pr-4" />
                  Ratings
                </li> */}
              </ul>
            </div>
            <div className="h-fit lg:w-1/4 md:w-1/2 w-full">
              {" "}
              <h1 className="text-[25px] font-semibold leading-[37.5px] pb-4">
                Commerce{" "}
              </h1>
              <ul className="footer_ul_list">
                <li>
                  <img src="/images/arrow.svg " className="pr-4" />
                  Affiliate Marketing
                </li>
                <li>
                  <img src="/images/arrow.svg " className="pr-4" />
                  Price Comparisons
                </li>
                <li>
                  <img src="/images/arrow.svg " className="pr-4" />
                  Shopping Galleries
                </li>
                <li>
                  <img src="/images/arrow.svg " className="pr-4" />
                  Become a socialprofit Merchant
                </li>
                {/* <li className="footer_disclaimer">
                  Legal | Privacy Policy | Terms and conditions | Disclaimer |
                  Your Privacy Choices | Ad Choices
                </li> */}
              </ul>
            </div>
            {/* <div>
              Legal | Privacy Policy | Terms and conditions | Disclaimer | Your
              Privacy Choices | Ad Choices
            </div> */}
            <div className="h-fit lg:w-1/4 md:w-1/2 w-full">
              {" "}
              <h1 className="text-[25px] font-semibold leading-[37.5px] pb-4">
                Data
              </h1>
              <ul className="footer_ul_list">
                <li>
                  <img src="/images/arrow.svg " className="pr-4" />
                  Signal
                </li>
                <li>
                  <img src="/images/arrow.svg " className="pr-4" />
                  Market Insights
                </li>
                <li>
                  <img src="/images/arrow.svg " className="pr-4" />
                  Data Monetization
                </li>
                <li>
                  <img src="/images/arrow.svg " className="pr-4" />
                  Resources
                </li>
              </ul>
            </div>
            <div className="h-fit lg:w-1/4 md:w-1/2 w-full">
              {" "}
              <h1 className="text-[25px] font-semibold leading-[37.5px] pb-4">
                Advertising{" "}
              </h1>
              <ul className="footer_ul_list">
                <li>
                  <img src="/images/arrow.svg " className="pr-4" />
                  Ad Management
                </li>
                <li>
                  <img src="/images/arrow.svg " className="pr-4" />
                  Ad Exchange
                </li>
                <li>
                  <img src="/images/arrow.svg " className="pr-4" />
                  Buy socialprofit Ad Exchange
                </li>
              </ul>
            </div>
          </div>
          <div className="flex  2xl:px-0 px-5">
            <ul className="footer_ul_list w-1/4">
              <li>
                <img src="/images/arrow.svg " className="pr-4" />
                Ratings
              </li>
            </ul>
            <div className=" none hidden w-3/4 lg:flex items-center leading-4">
              <Link href="/" className="border-r-2  xl:px-3 lg:px-2">
                Legal
              </Link>
              <Link href="/" className="border-r-2 xl:px-3 lg:px-2">
                Privacy Policy
              </Link>
              <Link href="/" className="border-r-2  xl:px-3 lg:px-1">
                Terms and conditions
              </Link>
              <Link href="/" className="border-r-2 xl:px-3 lg:px-1">
                Disclaimer
              </Link>
              <Link href="/" className="border-r-2 xl:px-3">
                Your Privacy Choices
              </Link>
              <Link href="/" className="px-3">
                Ad Choices
              </Link>
            </div>
          </div>
          <div className="px-5 mt-[34px] md:text-center text-start lg:hidden flex items-center">
            Legal| Privacy Policy | Terms and conditions | Disclaimer | Your
            Privacy Choices | Ad Choices
          </div>
        </div>
      </div>
      <div className="bg-[#d3d3d3]">
        <div className=" text-[#333333] font-medium text-[16px] 2xl:py-[27px] py-[15px] lg:max-w-[1302px] w-full my-0 mx-auto 2xl:px-0 px-5 flex flex-col justify-between items-center md:flex-row">
          <div>© Copyright 2023 | socialprofit.io | All Rights Reserved</div>
          <div className="social_icons flex gap-3 pt-4 md:pt-0">
            <div className="footer_icon">
              <div className="border-[#1F57A1] border-2 rounded-full p-1">
                <div className="bg-[#1F57A1] p-2 rounded-3xl">
                  <img
                    className="bg-[#1F57A1]"
                    src="/icons/tiktokWhite.svg"
                    alt="social_icon"
                  />
                </div>
              </div>
            </div>
            <div className="border-[#1F57A1] border-2 rounded-full p-1">
              <div className="bg-[#1F57A1] p-2 rounded-3xl">
                <img
                  className="bg-[#1F57A1]"
                  src="/icons/instawhite.svg"
                  alt="social_icon"
                />
              </div>
            </div>
            <div className="border-[#1F57A1] border-2 rounded-full p-1  flex justify-center items-center">
              <div className="bg-[#1F57A1] p-2 rounded-3xl min-w-[35px] min-h-[40ppx] max-w-[40px] max-h-[40px] flex justify-center items-center">
                <Image
                  className="mx-auto"
                  src="/icons/twitterwhite.svg"
                  alt="social_icon"
                  width={21}
                  height={21}
                />
              </div>
            </div>
            <div className="border-[#1F57A1] border-2 rounded-full p-1  flex justify-center items-center">
              <div className="bg-[#1F57A1] p-2 rounded-3xl min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] flex justify-center">
                <Image
                  className="mx-auto"
                  src="/icons/linkedInwhite.svg"
                  alt="social_icon"
                  width={21}
                  height={21}
                />
              </div>
            </div>
            {/* <Image
              className="bg-[#1F57A1]"
              src="/icons/linkedInwhite.svg"
              alt="social_icon"
              width="17"
              height="17"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
