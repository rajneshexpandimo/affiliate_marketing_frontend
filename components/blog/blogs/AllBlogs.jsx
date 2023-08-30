import Image from "next/image";
import React from "react";

const cardData = [
  {
    image: "/images/blog1.jpg",
    date: "February1,2023",
    title: "The Future of Affiliate Marketing",
    desc: "As a digital marketer, you’ve probably heard about broker affiliate programs.",
    link: "https://www.google.com/maps/place/100+High+St,+Boston,+MA+02110,+USA/@42.3544742,-71.0578804,17z/data=!3m1!4b1!4m6!3m5!1s0x89e3708178ea0e83:0x50c89534c1717af0!8m2!3d42.3544742!4d-71.0553055!16s%2Fg%2F11cnddnv0y?entry=ttu",
  },
  {
    image: "/images/blog2.jpg",
    date: "February1,2023",
    title: "The Future of Affiliate Marketing",
    desc: "100 High StreetBoston, MA 02110",
    link: "https://www.google.com/maps/place/100+High+St,+Boston,+MA+02110,+USA/@42.3544742,-71.0578804,17z/data=!3m1!4b1!4m6!3m5!1s0x89e3708178ea0e83:0x50c89534c1717af0!8m2!3d42.3544742!4d-71.0553055!16s%2Fg%2F11cnddnv0y?entry=ttu",
  },
  {
    image: "/images/blog3.jpg",
    date: "February1,2023",
    title: "The Future of Affiliate Marketing",
    desc: "100 High StreetBoston, MA 02110",
    link: "https://www.google.com/maps/place/100+High+St,+Boston,+MA+02110,+USA/@42.3544742,-71.0578804,17z/data=!3m1!4b1!4m6!3m5!1s0x89e3708178ea0e83:0x50c89534c1717af0!8m2!3d42.3544742!4d-71.0553055!16s%2Fg%2F11cnddnv0y?entry=ttu",
  },
];

const AllBlogs = () => {
  return (
    <div className="text-center">
      <div className="text-left">
        {" "}
        {cardData.map((data, key) => (
          <CardComp key={key} {...data} index={key} />
        ))}
      </div>
      <button className="border-2 border-s-[21px] px-9 py-4 border-[#1F57A1] bg-[#E7E7E7] rounded-[5px] font-semibold uppercase mx-auto">
        More details
      </button>
    </div>
  );
};

const CardComp = (props) => {
  const { image, title, date, desc, link, index } = props;
  return (
    <div className="w-full flex md:flex-row flex-col even:bg-white odd:bg-[#D3D3D3] even:border-b-2 border-[#33333333] even:border-0 mb-11">
      <div className="relative md:w-1/2 w-full">
        <Image
          src={image}
          width={353}
          height={346}
          alt={image}
          className="xl:min-w-[353px] xl:min-h-[346px] w-full h-full min-h-[240px] object-cover"
        />
        <div className="flex absolute bottom-0 justify-between w-full bg-[#33333380] py-2 px-3 text-[#fff]">
          <p className="w-1/2 flex items-center text-base gap-1">
            <Image
              src={"/icons/calendar.svg"}
              width={20}
              height={20}
              alt="comments"
            />{" "}
            {date}
          </p>
          <p className="w-1/2 flex items-center text-base gap-1">
            <Image
              src={"/icons/comments.svg"}
              width={20}
              height={20}
              alt="comments"
            />{" "}
            Comments
          </p>
        </div>
      </div>
      <div className="md:w-1/2 w-full flex flex-col justify-center lg:py:[69px] py-5 lg:px-[44px] px-5">
        <h3 className="sm:text-3xl text-xl sm:leading-9 leading-none font-semibold text-[#333]">
          {title}
        </h3>
        <p className="text-lg py-[22px]">{desc}</p>
        <button className="bg-[#1F57A1] rounded-[7px] text-white text-lg max-w-[122px] h-[39px]">
          Read More
        </button>
      </div>
    </div>
  );
};

export default AllBlogs;
