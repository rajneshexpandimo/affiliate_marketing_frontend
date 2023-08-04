import Image from "next/image";
import React from "react";

const GettingStarted = () => {
  return (
    <div className="md:max-w-[1300px] w-full mx-auto sm:my-20 my-10 lg:px-0 px-2">
      <h2 className="sm:text-5xl text-3xl pb-3 font-bold text-center">
        <span className="text-[#1F57A1] ">Getting </span>started is easy.
      </h2>
      <p className="sm:text-2xl text-[18px] lg:max-w-[989px] mx-auto pt-3 text-center">
        Take control of your financial future with SocialProfit.io
      </p>
      <div className="flex sm:flex-row flex-col max-w-[1220px] mx-auto sm:gap-[113px] gap-9 sm:mt-16 mt-5">
        <div className="sm:w-1/3 w-full">
          <div className="bg-[#1F57A1] rounded-full border-[15px] p-3 border-white box-shadow min-w-[160px] max-w-[160px] min-h-[160px] max-h-[160px] flex items-center justify-center mx-auto">
            <Image
              src="/icons/user_signup.svg"
              width={84}
              height={79}
              alt="userSignup"
              className="mx-auto "
            />
          </div>
          <h3 className="text-[25px] font-semibold leading-8 text-center py-2">
            Sign Up
          </h3>
          <p className="text-[18px] leading-6 text-center">
             Create your account and fill out the sign up form.
          </p>
        </div>
        <div className="sm:w-1/3 w-full">
          <div className="bg-[#1F57A1] rounded-full border-[15px] p-3 border-white box-shadow min-w-[160px] max-w-[160px] min-h-[160px] max-h-[160px] flex items-center justify-center mx-auto">
            <Image
              src="/icons/review.svg"
              width={84}
              height={79}
              alt="userSignup"
              className="mx-auto "
            />
          </div>
          <h3 className="text-[25px] font-semibold leading-8 text-center py-2">
          Review
          </h3>
          <p className="text-[18px] leading-6 text-center">
           A member of the onboarding team will review your application and assign you to a manager.
          </p>
        </div>
        <div className="sm:w-1/3 w-full">
          <div className="bg-[#1F57A1] rounded-full border-[15px] p-3 border-white box-shadow min-w-[160px] max-w-[160px] min-h-[160px] max-h-[160px] flex items-center justify-center mx-auto">
            <Image
              src="/icons/heart.svg"
              width={84}
              height={79}
              alt="userSignup"
              className="mx-auto "
            />
          </div>
          <h3 className="text-[25px] font-semibold leading-8 text-center py-2">
          Do what you love
          </h3>
          <p className="text-[18px] leading-6 text-center">
           Use our tools to start making money.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
