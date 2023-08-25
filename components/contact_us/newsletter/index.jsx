import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";

const NewsLetter = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log("Finish:", values);
  };
  return (
    <div className="md:max-w-[1300px] w-full mx-auto xl:px-0 px-5 md:py-20 py-7">
      <h2 className="font-bold sm:text-[64px] text-3xl pb-0 sm:pb-8 sm:leading-[66px] leading-normal text-center capitalize text-[#333]">
        Sign Up for
        <span className="text-[#295DA7]"> Our Newsletters </span>
      </h2>
      <p className="text-base text-center ">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <div className="relative py-12">
        <Form
          form={form}
          name="newsletter"
          layout="inline"
          onFinish={onFinish}
          className="bg-white box-shadow px-8 justify-between xl:flex-row flex-col xl:py-0 py-8"
        >
          <Form.Item
            name="username"
            className="xl:w-1/3 w-full"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Enter your name" className="border-[#7E7E7E69] lg:border-r-1 border-r-0 lg:border-y-0 border-t-0 border-b-1 border-l-0 rounded-none py-8 text-lg" />
          </Form.Item>
          <Form.Item
          className="xl:w-1/3 w-full"
            name="useremail"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" placeholder="Enter your email" className="py-8 border-0 text-lg hover:border-0 focus-within:border-0 focus:border-0"/>
          </Form.Item>
          <div className="lg:absolute relative bottom-0 left-0">
            {" "}
            <Checkbox className="text-[15px] text-[#333] rounded-none items-start">
            By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.
            </Checkbox>
          </div>
          <Form.Item shouldUpdate className="flex justify-center items-center">
            {() => (
              <Button
                type="primary"
                htmlType="submit"
                className="bg-[#1F57A1] text-white min-w-[266px] min-h-[58px] rounded-none text-lg font-semibold capitalize"
             
              >
                subscribe
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default NewsLetter;
