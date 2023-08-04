import { RightOutlined } from "@ant-design/icons";
import { Col, Image, Row } from "antd";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1f57a1] w-full">
        <div className=" text-white lg:max-w-[1302px] w-full py-[59px] my-0 mx-auto">
          <div className="flex justify-between  flex-wrap 2xl:px-0 px-5">
            <div className="lg:w-1/4 md:w-1/2 w-full">
              <h1 className="text-[25px] font-semibold leading-[37.5px]">
                SocialProfit{" "}
              </h1>{" "}
              <ul className="footer_ul_list">
                <li>
                  <RightOutlined className="pr-4" />
                  About Us
                </li>
                <li>
                  <RightOutlined className="pr-4" />
                  Advertised Deals
                </li>
                <li>
                  <RightOutlined className="pr-4" />
                  Marketing
                </li>
                <li>
                  <RightOutlined className="pr-4" />
                  Features
                </li>
                <li>
                  <RightOutlined className="pr-4" />
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
              <h1 className="text-[25px] font-semibold leading-[37.5px]">
                Commerce{" "}
              </h1>
              <ul className="footer_ul_list">
                <li>
                  <RightOutlined className="pr-4" />
                  Affiliate Marketing
                </li>
                <li>
                  <RightOutlined className="pr-4" />
                  Price Comparisons
                </li>
                <li>
                  <RightOutlined className="pr-4" />
                  Shopping Galleries
                </li>
                <li>
                  <RightOutlined className="pr-4" />
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
              <h1 className="text-[25px] font-semibold leading-[37.5px]">
                Data
              </h1>
              <ul className="footer_ul_list">
                <li>
                  <RightOutlined className="pr-4" />
                  Signal
                </li>
                <li>
                  <RightOutlined className="pr-4" />
                  Market Insights
                </li>
                <li>
                  <RightOutlined className="pr-4" />
                  Data Monetization
                </li>
                <li>
                  <RightOutlined className="pr-4" />
                  Resources
                </li>
              </ul>
            </div>
            <div className="h-fit lg:w-1/4 md:w-1/2 w-full">
              {" "}
              <h1 className="text-[25px] font-semibold leading-[37.5px]">
                Advertising{" "}
              </h1>
              <ul className="footer_ul_list">
                <li>
                  <RightOutlined className="pr-4" />
                  Ad Management
                </li>
                <li>
                  <RightOutlined className="pr-4" />
                  Ad Exchange
                </li>
                <li>
                  <RightOutlined className="pr-4" />
                  Buy socialprofit Ad Exchange
                </li>
              </ul>
            </div>
          </div>
          <div className="flex  2xl:px-0 px-5">
            <ul className="footer_ul_list w-1/4">
              <li>
                <RightOutlined className="pr-4" />
                Ratings
              </li>
            </ul>
            <div className="lg:block none hidden w-3/4">
              Legal | Privacy Policy | Terms and conditions | Disclaimer | Your
              Privacy Choices | Ad Choices
            </div>
          </div>
          <div className="px-5 mt-[34px] md:text-center text-start lg:hidden block">
            Legal | Privacy Policy | Terms and conditions | Disclaimer | Your
            Privacy Choices | Ad Choices
          </div>
        </div>
      </div>
      <div className="bg-[#d3d3d3]">
        <div className=" text-[#333333] font-medium text-[16px] py-[27px] lg:max-w-[1302px] w-full my-0 mx-auto 2xl:px-0 px-5">
          <div>© Copyright 2023 | socialprofit.io | All Rights Reserved</div>
          <div className="social_icons flex gap-3">
            <div className="footer_icon">
              <Image
                className="bg-[#1F57A1]"
                src="/icons/tiktokWhite.svg"
                alt="social_icon"
                width="17"
                height="17"
              />
            </div>
            <Image
              className="bg-[#1F57A1]"
              src="/icons/instawhite.svg"
              alt="social_icon"
              width="17"
              height="17"
            />
            <Image
              className="bg-[#1F57A1]"
              src="/icons/twitterwhite.svg"
              alt="social_icon"
              width="17"
              height="17"
            />
            <Image
              className="bg-[#1F57A1]"
              src="/icons/linkedInwhite.svg"
              alt="social_icon"
              width="17"
              height="17"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
