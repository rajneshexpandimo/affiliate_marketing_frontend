import React from "react";
import AllBlogs from "./AllBlogs";
import BlogSidebar from "./BlogSidebar";

const Blogs = () => {
  return (
    <div className="md:max-w-[1300px] w-full mx-auto xl:px-0 lg:px-3 px-6">
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
