import React, { useState } from "react";
import { Menu, Button, Drawer, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";

const items = [
  {
    label: <Link href="/about"> Marketing </Link>,
    key: "marketing",
  },
  {
    label: <Link href="/services/why-choose-us"> Earn </Link>,
    key: "earn",
  },
  {
    label: <Link href="/services/how-it-works"> Learn </Link>,
    key: "learn",
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
  return (
    <>
      <div className="header w-full">
        <div className="top_header bg-[#D3D3D3]">
         <div className="md:max-w-[1300px] w-full mx-auto flex justify-between py-3 xl:px-0 px-5">
         <div className="social_icons flex gap-3">
            <Image src='/icons/tiktok.svg' alt="social_icon" width="17" height="17" />
            <Image src='/icons/insta.svg' alt="social_icon" width="17" height="17"/>
            <Image src='/icons/twitter.svg' alt="social_icon" width="17" height="17"/>
            <Image src='/icons/linkedIn.svg' alt="social_icon" width="17" height="17"/>
          </div>
          <div className="login">
            <Link href={"/"}>Login</Link>
          </div>
         </div>
        </div>
        <div className="main_header">
          <div className="md:max-w-[1300px] w-full mx-auto flex justify-between items-center xl:px-0 px-5">
              <div className="logo  w-1/4">
              <Link href={"/"}>
                <Image src="/icons/Logo.svg" alt="" width={148} height={127} />
                </Link>
              </div>
          
            <div className="main_navbar w-1/2">
              <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
                className="bigmenu justify-center border-none 2xl:text-2xl md:text-lg font-medium gap-4"
              />
              <Button
                className="menubtn"
                type="primary"
                shape="circle"
                icon={<MenuOutlined />}
                onClick={showDrawer}
              ></Button>
              <Drawer
                title={
                  <Link href={"/"}>
                    <Image
                      src="/logos/expandimo-logo.png"
                      alt="logo"
                      className="w-1/2"
                      width="220"
                      height="50"
                    />
                  </Link>
                }
                placement="right"
                onClose={onClose}
                open={state.visible}
              >
                <div
                  style={{ display: "flex", flexDirection: "column" }}
                  className="mobile_menu"
                >
                  <Button type="text" href="/about">
                    About
                  </Button>
                  <Button type="text" href="/services">
                    Services
                  </Button>
                  <Button type="text" href="/industry">
                    Industry
                  </Button>
                  <Button type="text" href="/success_stories">
                    Success Stories
                  </Button>
                  <Button type="text" href="/company">
                    Company
                  </Button>
                  <Button type="text" href="/industry">
                    Industry
                  </Button>
                </div>
              </Drawer>
            </div>
            <div className="register_sec w-1/4">
              <Button className="bg-[#295DA7] float-right text-white h-[60px] w-[194px] font-semibold ">REGISTER NOW</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
