import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, Button, Drawer, Space, Dropdown, Typography } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
const items = [
  {
    label: <Link href="/about_us"> About Us </Link>,
    key: "about_us",
  },
  {
    label: <Link href="/offer"> Offer </Link>,
    key: "offer",
  },
  {
    label: <Link href="/marketing"> Marketing </Link>,
    key: "marketing",
  },
  {
    label: <Link href="/contact_us"> Contact Us </Link>,
    key: "contact_us",
  },
  {
    label: <Link href="/blog"> blog </Link>,
    key: "blog",
  },
];

const Header = () => {
  const [current, setCurrent] = useState("/");
  const [state, setState] = useState({
    current: "marketing ",
    visible: false,
  });

  const showDrawer = () => {
    setState({ visible: true });
  };

  const onClose = () => {
    setState({ visible: false });
  };

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const mobileSignup = [
    {
      key: "/login",
      label: "Login",
    },
    {
      key: "/signup",
      label: "Sign Up",
    },
  ];
  return (
    <>
      <div className="header w-full">
        <div className="top_header bg-[#D3D3D3] dark:bg-[#2727276e] m-hide">
          <div className="md:max-w-[1300px] w-full mx-auto flex justify-between py-3 2xl:px-0 xl:px-4 px-5">
            <div className="social_icons flex gap-3">
          <button className="dark:bg-white dark:p-2">
          <Image
                src="/icons/tiktok.svg"
                alt="social_icon"
                width="17"
                height="17"
              />
          </button>
          <button className="dark:bg-white dark:p-2">
              <Image
                src="/icons/insta.svg"
                alt="social_icon"
                width="17"
                height="17"
              />
              </button>
              <button className="dark:bg-white dark:p-2">
              <Image
                src="/icons/twitter.svg"
                alt="social_icon"
                width="17"
                height="17"
              />
              </button>
              <button className="dark:bg-white dark:p-2">
              <Image
                src="/icons/linkedIn.svg"
                alt="social_icon"
                width="17"
                height="17"
              />
              </button>
            </div>
            <div className="login">
              <Link href={"/"} className="">Login</Link>
            </div>
          </div>
        </div>
        <div className="main_header dark:bg-black">
          <div className="md:max-w-[1300px] w-full mx-auto flex justify-between items-center 2xl:px-0 xl:px-4 px-5 py-3">
            <div className="logo md:w-1/6 w-[30%]">
              <Link href={"/"}>
                <Image
                  src="/images/socialProfit_logo.png"
                  alt=""
                  width={148}
                  height={127}
                  className="2xl:w-auto bg-transparent"
                />
              </Link>
            </div>

            <div className="main_navbar w-7/12 md:block flex justify-end items-center bg-transparent">
              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
                itemHoverColor="white"
                className="bigmenu justify-center border-none 2xl:text-2xl md:text-lg font-medium xl:gap-7 gap-3 bg-transparent dark:text-white"
              />
              <Dropdown
                menu={{
                  items: mobileSignup,
                  selectable: true,
                  defaultSelectedKeys: ["3"],
                }}
                trigger={["click"]}
                className="md:hidden inline-block w-7 text-right"
              >
                <Typography.Link className="bg-white w-full block ">
                  <Space className="w-full justify-between text-[#33333380]">
                    <UserOutlined className="text-lg text-[#333]" />
                  </Space>
                </Typography.Link>
              </Dropdown>
              <Button
                className="menubtn float-right shadow-none text-[#000] bg-transparent"
                type="primary"
                shape="circle"
                icon={<MenuOutlined />}
                onClick={showDrawer}
              ></Button>
              <Drawer
                title={
                  <Link href={"/"}>
                    <Image
                      src="/icons/Logo.svg"
                      alt="logo"
                      // className="float-right"
                      width="100"
                      height="50"
                    />
                  </Link>
                }
                placement="left"
                onClose={onClose}
                open={state.visible}
                className="mobile_menu_drawer"
              >
                <div
                  style={{ display: "flex", flexDirection: "column" }}
                  className="mobile_menu"
                >
                  <Button type="text" href="/about_us">
                    About Us
                  </Button>
                  <Button type="text" href="/offer">
                    Offer
                  </Button>
                  <Button type="text" href="/marketing">
                    Marketing
                  </Button>
                  <Button type="text" href="/contact_us">
                    Contact Us
                  </Button>
                  <Button type="text" href="/blog">
                    Blog
                  </Button>
                </div>
              </Drawer>
            </div>
            <div className="register_sec w-1/4 m-hide">
              <motion.div
                className="inline-block float-right"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button className="bg-[#295DA7] float-right text-white md:h-[60px] md:w-[194px]  font-semibold ">
                  REGISTER NOW
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
