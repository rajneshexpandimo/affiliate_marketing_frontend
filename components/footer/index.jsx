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
          <div className="flex justify-between  flex-wrap 2xl:px-0 px-5 md:text-start text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full">
              <h1 className="text-[25px] font-semibold leading-[37.5px] py-4">
                SocialProfit{" "}
              </h1>
              <ul className="footer_ul_list">
                <li className="leading-[27px] pb-[6px] sm:text-[16px] text-[14px] font-normal flex items-center justify-center md:justify-start">
                  <img
                    src="/images/arrow.svg "
                    className="pr-4 hidden md:block"
                  />
                  {/* <RightOutlined className="pr-4" /> */}
                  About Us
                </li>
                <li className="leading-[27px] pb-[6px] sm:text-[16px] text-[14px] font-normal flex items-center justify-center md:justify-start">
                  <img
                    src="/images/arrow.svg "
                    className="pr-4 hidden md:block"
                  />
                  Advertised Deals
                </li>
                <li className="leading-[27px] pb-[6px] sm:text-[16px] text-[14px] font-normal flex items-center justify-center md:justify-start">
                  <img
                    src="/images/arrow.svg "
                    className="pr-4 hidden md:block"
                  />
                  Marketing
                </li>
                <li className="leading-[27px] pb-[6px] sm:text-[16px] text-[14px] font-normal flex items-center justify-center md:justify-start">
                  <img
                    src="/images/arrow.svg "
                    className="pr-4 hidden md:block"
                  />
                  Features
                </li>
                <li className="leading-[27px] pb-[6px] sm:text-[16px] text-[14px] font-normal flex items-center justify-center md:justify-start">
                  <img
                    src="/images/arrow.svg "
                    className="pr-4 hidden md:block"
                  />
                  Resources
                </li>
                <li className="leading-[27px] pb-[6px] sm:text-[16px] text-[14px] font-normal flex items-center lg:hidden justify-center md:justify-start">
                  <img
                    src="/images/arrow.svg "
                    className="pr-4 hidden md:block"
                  />
                  Ratings
                </li>
              </ul>
            </div>
            <div className="h-fit lg:w-1/4 md:w-1/2 w-full">
              {" "}
              <h1 className="text-[25px] font-semibold leading-[37.5px] py-4">
                Commerce{" "}
              </h1>
              <ul className="footer_ul_list">
                <li className="leading-[27px] pb-[6px] sm:text-[16px] text-[14px] font-normal flex items-center justify-center md:justify-start">
                  <img
                    src="/images/arrow.svg "
                    className="pr-4 hidden md:block"
                  />
                  Affiliate Marketing
                </li>
                <li className="leading-[27px] pb-[6px] sm:text-[16px] text-[14px] font-normal flex items-center justify-center md:justify-start">
                  <img
                    src="/images/arrow.svg "
                    className="pr-4 hidden md:block"
                  />
                  Price Comparisons
                </li>
                <li className="leading-[27px] pb-[6px] sm:text-[16px] text-[14px] font-normal flex items-center justify-center md:justify-start">
                  <img
                    src="/images/arrow.svg "
                    className="pr-4 hidden md:block"
                  />
                  Shopping Galleries
                </li>
                <li className="leading-[27px] pb-[6px] sm:text-[16px] text-[14px] font-normal flex items-center justify-center md:justify-start">
                  <img
                    src="/images/arrow.svg "
                    className="pr-4 hidden md:block"
                  />
                  Become a socialprofit Merchant
                </li>
              </ul>
            </div>
            <div className="h-fit lg:w-1/4 md:w-1/2 w-full">
              {" "}
              <h1 className="text-[25px] font-semibold leading-[37.5px] py-4">
                Data
              </h1>
              <ul className="footer_ul_list">
                <li className="leading-[27px] pb-[6px] sm:text-[16px] text-[14px] font-normal flex items-center justify-center md:justify-start">
                  <img
                    src="/images/arrow.svg "
                    className="pr-4 hidden md:block"
                  />
                  Signal
                </li>
                <li className="leading-[27px] pb-[6px] sm:text-[16px] text-[14px] font-normal flex items-center justify-center md:justify-start">
                  <img
                    src="/images/arrow.svg "
                    className="pr-4 hidden md:block"
                  />
                  Market Insights
                </li>
                <li className="leading-[27px] pb-[6px] sm:text-[16px] text-[14px] font-normal flex items-center justify-center md:justify-start">
                  <img
                    src="/images/arrow.svg "
                    className="pr-4 hidden md:block"
                  />
                  Data Monetization
                </li>
                <li className="leading-[27px] pb-[6px] sm:text-[16px] text-[14px] font-normal flex items-center justify-center md:justify-start">
                  <img
                    src="/images/arrow.svg "
                    className="pr-4 hidden md:block"
                  />
                  Resources
                </li>
              </ul>
            </div>
            <div className="h-fit lg:w-1/4 md:w-1/2 w-full">
              {" "}
              <h1 className="text-[25px] font-semibold leading-[37.5px] py-4">
                Advertising{" "}
              </h1>
              <ul className="footer_ul_list">
                <li className="leading-[27px] pb-[6px] sm:text-[16px] text-[14px] font-normal flex items-center justify-center md:justify-start">
                  <img
                    src="/images/arrow.svg "
                    className="pr-4 hidden md:block"
                  />
                  Ad Management
                </li>
                <li className="leading-[27px] pb-[6px] sm:text-[16px] text-[14px] font-normal flex items-center justify-center md:justify-start">
                  <img
                    src="/images/arrow.svg "
                    className="pr-4 hidden md:block"
                  />
                  Ad Exchange
                </li>
                <li className="leading-[27px] pb-[6px] sm:text-[16px] text-[14px] font-normal flex items-center justify-center md:justify-start">
                  <img
                    src="/images/arrow.svg "
                    className="pr-4 hidden md:block"
                  />
                  Buy socialprofit Ad Exchange
                </li>
              </ul>
            </div>
          </div>
          <div className="flex  2xl:px-0 px-5">
            <ul className="footer_ul_list w-1/4">
              <li className="leading-[27px] pb-[6px] sm:text-[16px] text-[14px] font-normal lg:flex items-center hidden justify-center md:justify-start">
                <img
                  src="/images/arrow.svg "
                  className="pr-4 hidden md:block"
                />
                Ratings
              </li>
            </ul>
            <div className=" none hidden w-3/4 lg:flex items-center leading-4">
              <Link href="/" className="border-r-2  xl:pe-3 lg:pe-[5px]">
                Legal
              </Link>
              <Link href="/" className="border-r-2 xl:px-3 lg:px-[5px]">
                Privacy Policy
              </Link>
              <Link href="/" className="border-r-2  xl:px-3 lg:px-[5px]">
                Terms and conditions
              </Link>
              <Link href="/" className="border-r-2 xl:px-3 lg:px-[5px]">
                Disclaimer
              </Link>
              <Link href="/" className="border-r-2 xl:px-3 lg:px-[5px]">
                Your Privacy Choices
              </Link>
              <Link href="/" className="xl:ps-3 lg:ps-1">
                Ad Choices
              </Link>
            </div>
          </div>
          <div className="px-5 mt-[34px] md:text-center text-start lg:hidden flex flex-wrap items-center justify-center sm:text-[16px] text-[14px]">
            <Link href="/" className="border-r-2  md:pe-3 sm:pe-2 pe-2">
              Legal
            </Link>
            <Link href="/" className="border-r-2 md:px-3 sm:px-2 px-2">
              Privacy Policy
            </Link>
            <Link href="/" className="border-r-2  md:px-3 sm:px-2 px-2">
              Terms and conditions
            </Link>
            <Link href="/" className="border-r-2 md:px-3 sm:px-2 px-2">
              Disclaimer
            </Link>
            <Link href="/" className="border-r-2 md:px-3 sm:px-2 px-2">
              Your Privacy Choices
            </Link>
            <Link href="/" className="md:ps-3 sm:ps-2 ps-2">
              Ad Choices
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#d3d3d3]">
        <div className=" text-[#333333] font-medium text-[16px] 2xl:py-[27px] py-[15px] lg:max-w-[1302px] w-full my-0 mx-auto 2xl:px-0 px-5 flex flex-col justify-between items-center md:flex-row">
          <div className="sm:text-start text-center">
            © Copyright 2023 | socialprofit.io | All Rights Reserved
          </div>
          <div className="social_icons flex gap-3 pt-4 md:pt-0">
            <div className="footer_icon">
              <div className="border-[#1F57A1] border-2 rounded-full p-1">
                <div className="bg-[#1F57A1] p-2 rounded-3xl">
                  <img
                    className="bg-[#1F57A1] w-[24px]"
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
                <img
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
                <img
                  className="mx-auto"
                  src="/icons/linkedInwhite.svg"
                  alt="social_icon"
                  width={21}
                  height={21}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
