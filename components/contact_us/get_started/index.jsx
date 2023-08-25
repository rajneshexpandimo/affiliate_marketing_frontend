import Link from "next/link";
import React from "react";
import { Button, Checkbox, Form, Input, InputNumber } from "antd";

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
/* eslint-enable no-template-curly-in-string */
const GetStarted = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="bg-[#d3d3d3]">
        <div className="md:max-w-[1300px] w-full mx-auto pt-2 pb-20 xl:px-0 lg:px-3 px-6">
          <h1 className="font-bold sm:text-[64px] text-2xl sm:pb-5 pb-4 text-[#333] md:leading-[88px] leading-normal text-center">
            Get
            <span className="text-[#295DA7]"> Started </span>
          </h1>
          <p className="text-base text-center">
            Fill out the form and one of our representatives will contact you
            within one business day.
          </p>
          <div className="flex lg:flex-row flex-col xl:gap-24 md:gap-5 gap-5 md:pt-[70px] pt-5">
            <div className="bg-white rounded-[50px] md:py-24 py-10 md:px-20 px-5 lg:w-1/2 w-full">
              <h2 className="md:text-[40px] text-2xl leading-[53px] text-[#333] font-semibold text-center">
                Contact Us Directly
              </h2>
              <div className="py-9 flex sm:flex-row flex-col justify-between md:gap-9">
                <div className="md:w-1/2 w-full">
                  <h4 className="text-base font-semibold uppercase text-[#333]">
                    GENERAL INQUIRIES
                  </h4>
                  <p className="text-[#1F57A1] text-base leading-5 pt-3">
                    {" "}
                    <Link href={"mailto:sales@socialprofit.com"}>
                      sales@socialprofit.com
                    </Link>
                  </p>
                </div>
                <div className="md:w-1/2 w-full">
                  <h4 className="text-base font-semibold uppercase text-[#333]">
                    MEDIA INQUIRIES
                  </h4>
                  <p className="text-[#1F57A1] text-base leading-5 pt-3">
                    <Link href={"mailto:sales@socialprofit.com"}>
                      media@socialprofit.com
                    </Link>
                  </p>
                </div>
              </div>
              <div className="py-9 flex sm:flex-row flex-col justify-between md:gap-9">
                <div className="md:w-1/2 w-full">
                  <h4 className="text-base font-semibold uppercase text-[#333]">
                    HEADQUARTERS
                  </h4>
                  <p className="text-[#333] text-base leading-5 pt-3">
                    2010 Northern Blvd, Suite 403, short Island City, yv 12011
                  </p>
                </div>
                <div className="md:w-1/2 w-full">
                  <h4 className="text-base font-semibold uppercase text-[#333]">
                    PHONE
                  </h4>
                  <p className="text-[#333] text-base leading-5 pt-3">
                    1-777-989-9837
                  </p>
                  <p className="text-[#333] text-base leading-5 pt-3">
                    1-777-989-9837
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-base font-semibold uppercase">
                  Opening hours
                </h4>
                <p className="text-[#B8B7B7] text-base pt-[18px]">
                  <span className="text-[#000]">Monday:</span>8:00-17:00
                </p>
                <p className="text-[#B8B7B7] text-base pt-[18px]">
                  <span className="text-[#000]">Tuesday:</span>8:00-17:00
                </p>
                <p className="text-[#B8B7B7] text-base pt-[18px]">
                  <span className="text-[#000]">Wednesday:</span>8:00-17:00
                </p>
                <p className="text-[#B8B7B7] text-base pt-[18px]">
                  <span className="text-[#000]">Thursday:</span>8:00-17:00
                </p>
                <p className="text-[#B8B7B7] text-base pt-[18px]">
                  <span className="text-[#000]">Friday:</span>8:00-17:00
                </p>
                <p className="text-[#B8B7B7] text-base pt-[18px]">
                  <span className="text-[#000]">Saturday:</span>8:00-17:00
                </p>
                <p className="text-[#B8B7B7] text-base pt-[18px]">
                  <span className="text-[#000]">Sunday:</span>8:00-17:00
                </p>
              </div>
            </div>
            <div className="bg-[#1F57A1] rounded-[50px] md:pt-24 md:pb-7  py-10 md:px-[64px] px-5 lg:w-1/2 w-full contact_us_form">
              <h2 className="md:text-[40px] text-2xl leading-[53px] text-white font-semibold text-center mb-10">
                Send A Message
              </h2>
              <div>
                <Form
                  name="messages"
                  onFinish={onFinish}
                  style={{ maxWidth: 600 }}
                  validateMessages={validateMessages}
                  layout="vertical"
                >
                  <div className="flex md:flex-row flex-col justify-between md:gap-8">
                    <Form.Item
                      name="firstname"
                      label={<label className="text-white uppercase text-base font-semibold">First Name</label>}
                      rules={[{ required: true }]}
                      className="sm:mb-6 mb-2"
                    >
                      <Input className="bg-[#FFFFFF80] border-transparent py-[10px] rounded-[10px]"/>
                    </Form.Item>
                    <Form.Item
                      name="lastname"
                      label={<label className="text-white uppercase text-base font-semibold">Last Name</label>}
                      rules={[{ required: true }]}
                      className="sm:mb-6 mb-2"
                    >
                      <Input  className="bg-[#FFFFFF80] border-transparent py-[10px] rounded-[10px]"/>
                    </Form.Item>
                  </div>
                  <div className="lex md:flex-row flex-col justify-between gap-5">
                    <Form.Item
                      name="email"
                      label={<label className="text-white uppercase text-base font-semibold">Email Address</label>}
                      rules={[{ type: "email", required: true }]}
                      className="sm:mb-6 mb-2"
                    >
                      <Input  className="bg-[#FFFFFF80] border-transparent py-[10px] rounded-[10px]"/>
                    </Form.Item>
                    <Form.Item
                      name="phone"
                      label={<label className="text-white uppercase text-base font-semibold">Phone</label>}
                      rules={[{ required: true }]}
                      className="sm:mb-6 mb-2"
                    >
                      <Input  className="bg-[#FFFFFF80] border-transparent py-[10px] rounded-[10px]"/>
                    </Form.Item>
                  </div>

                  <Form.Item name="message" label={<label className="text-white uppercase text-base font-semibold  mb-0">Your Message</label>}>
                    <Input.TextArea  rows={7} className="bg-[#FFFFFF80] border-transparent py-[10px] rounded-[10px] mb-0" />
                  </Form.Item>
                  <Checkbox className="text-white text-sm capitalize rounded-none pt-4 pb-8">
                    I agree to the{" "}
                    <Link href={"/terms_and_condition"} className="underline">
                      Terms of use 
                    </Link>
                     And 
                    <Link href={"/privacy_policy"} className="underline">
                      privacy policy
                    </Link>
                  </Checkbox>
                  <Checkbox className="text-white text-sm capitalize rounded-none">
                  I agree to join our Text Alerts or Email Alerts for special offers!
                  </Checkbox>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="bg-white text-[#1F57A1] text-xl font-semibold uppercase w-full mt-12 min-h-[46px] rounded-none">
                      Contact us
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="images/grey_wave.png" alt="waves" className="w-full xl:mt-0" />
    </>
  );
};

export default GetStarted;
