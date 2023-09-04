import React from "react";
import AllBlogs from "./AllBlogs";
import BlogSidebar from "./BlogSidebar";

const Blogs = () => {
  return (
    <div className="md:max-w-[1300px] w-full mx-auto xl:px-0 lg:px-3 px-6 relative after:content-[''] after:bg-[url('/icons/three_bubbles.svg')] after:w-[172px] after:h-[352px] after:absolute after:right-0 after:top-[-13%] after:bg-no-repeat after:bg-contain before:content-[''] before:bg-[url('/icons/singlebubble.png')] before:w-[75px] before:h-[75px] before:absolute before:left-0 before:top-[-6%] before:bg-no-repeat before:bg-contain">
      <h1 className="font-bold sm:text-[50px] text-[30px] sm:pb-5 pb-3  capitalize text-center"
      >
        <span className="text-[#295DA7]"> Elevate your revenue with </span>Socialprofit.io
      </h1>
      <div className="flex lg:py-22 py-10 lg:flex-row flex-col gap-10">
       <div className="lg:w-2/3 w-full"> <AllBlogs/></div>
       <div className="lg:w-2/6 w-full"> <BlogSidebar/></div>
      </div>
    </div>
  );
};

export default Blogs;
