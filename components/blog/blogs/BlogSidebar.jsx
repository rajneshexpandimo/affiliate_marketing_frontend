import React, { useCallback, useState } from "react";
import { Input, Space, Dropdown, Typography } from "antd";
import { Calendar } from "@natscale/react-calendar";
import Image from "next/image";
const { Search } = Input;

const BlogSidebar = () => {
  const [value, setValue] = useState();
  const categories = [
    {
      key: "1",
      label: "Item 1",
    },
    {
      key: "2",
      label: "Item 2",
    },
    {
      key: "3",
      label: "Item 3",
    },
  ];
  const tags = [
    {
      key: "1",
      label: "Item 1",
    },
    {
      key: "2",
      label: "Item 2",
    },
    {
      key: "3",
      label: "Item 3",
    },
  ];

  const onSearch = (value) => console.log(value);

  const onDateChange = useCallback(
    (value) => {
      setValue(value);
    },
    [setValue]
  );
  return (
    <div>
      <div className="bg-[#d3d3d3] rounded-2xl py-[26px] xl:px-[45px] px-5 mb-[48px]">
        <h4 className="text-[#1F57A1] uppercase text-lg font-bold border-b-[1px] border-[#1F57A1] inline-block w-auto mb-5">
          search by post
        </h4>
        <Search
          placeholder="search..."
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          className="blog_search"
        />
      </div>
      <div className="bg-[#d3d3d3] rounded-2xl py-[26px] xl:px-[45px] px-5 mb-[48px]">
        <h4 className="text-[#1F57A1] uppercase text-lg font-bold border-b-[1px] border-[#1F57A1] inline-block w-auto mb-5">
          Categories
        </h4>
        <div className="w-full">
          <Dropdown
            menu={{
              items: categories,
              selectable: true,
              defaultSelectedKeys: ["3"],
            }}
            trigger={["click"]}
          >
            <Typography.Link className="bg-white w-full block rounded-[20px] p-[10px] ">
              <Space className="w-full justify-between text-[#33333380]">
                Select Category
                <Image
                  src={"/icons/blog_downArrow.svg"}
                  width={17}
                  height={17}
                  alt="down_arrow"
                />
              </Space>
            </Typography.Link>
          </Dropdown>
        </div>
      </div>
      <div className="bg-[#d3d3d3] rounded-2xl py-[26px] xl:px-[45px] px-5 mb-[48px] text-center">
        <h4 className="text-[#1F57A1] uppercase text-lg font-bold border-b-[1px] border-[#1F57A1] inline-block w-auto mb-5 mx-auto">
          Calender
        </h4>
        <div className="w-full mx-auto">
          <Calendar
            value={value}
            onChange={onDateChange}
            className="w-full flex justify-center custom_calender"
          />
        </div>
      </div>
      <div className="bg-[#1F57A1] rounded-2xl py-[26px] px-[45px] mb-[36px]">
        <h4 className="text-white uppercase text-lg font-bold border-b-[1px] border-[#fff] inline-block w-auto mb-5">
          Recent Posts
        </h4>
        <p className="text-sm text-white font-bold my-3 capitalize flex items-start gap-2">
          <Image src={"/icons/RightButton.svg"} width={24} height={24} alt="" />
          Best Affiliate Marketing Conferences with CPA Networks in 2023
        </p>
        <hr />
        <p className="text-sm text-white font-bold my-3 capitalize flex items-start gap-2">
          <Image src={"/icons/RightButton.svg"} width={24} height={24} alt="" />
          Best Affiliate Marketing Conferences with CPA Networks in 2023
        </p>
      </div>
      <div className="bg-[#d3d3d3] rounded-2xl py-[26px] xl:px-[45px] px-5 mb-[48px]">
        <h4 className="text-[#1F57A1] uppercase text-lg font-bold border-b-[1px] border-[#1F57A1] inline-block w-auto mb-5">
          Tags
        </h4>
        <div className="flex flex-wrap gap-4">
          <p className="bg-[#D9D9D9] text-base font-light px-2 py-1 capitalize rounded-[4px]">
            # affiliate forex
          </p>
          <p className="bg-[#D9D9D9] lighttext-base font-light px-2 py-1 capitalize rounded-[4px]">
            # broken affiliate
          </p>
          <p className="bg-[#D9D9D9] text-base font-light px-2 py-1 capitalize rounded-[4px]">
            # affiliate program forex
          </p>
        </div>
      </div>
      <div className="bg-[#1F57A1] rounded-2xl py-[26px] xl:px-[45px] px-5 mb-[36px]">
        <h4 className="text-white uppercase text-lg font-bold border-b-[1px] border-[#fff] inline-block w-auto mb-5">
          Recent Comments
        </h4>
        <p className="text-base text-white font-light mb-3 capitalize">
          There are many variations of passages
        </p>
        <p className="text-base text-white font-light mb-3 capitalize">
          If you are going to use a passage
        </p>
        <p className="text-base text-white font-light mb-3 capitalize">
          you need to be sure
        </p>
        <p className="text-base text-white font-light mb-3 capitalize">
          you need to be sure
        </p>
        <p className="text-base text-white font-light mb-3 capitalize">
          you need to be sure
        </p>
      </div>
    </div>
  );
};

export default BlogSidebar;
