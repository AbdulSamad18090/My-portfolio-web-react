import React from "react";
import FooterCard from "./FooterCard";
import Newsletter from "./Newsletter";
import FollowUs from "./FollowUs";
import CallUs from "./CallUs";

const Foter = () => {
  return (
    <div className="text-center md:text-left">
      <FooterCard />
      <div className="bg-[#0a1435] text-left text-white pt-[120px] md:pb-10 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-4">
          <h1 className="text-[20px]">Abdul Samad</h1>
          <p className="text-[gray]">
            A skilled Front-end Web Developer and a Digital Marketer
          </p>
        </div>
        <Newsletter />
        <FollowUs />
        <CallUs />
      </div>
      <div className="bg-[#0a1435] text-gray-50 border-t-2 border-[#9d9d9d] sm:grid grid-cols-2 md:p-10">
        <div className="text-[gray] p-4">
          <p className="w-fit hover:cursor-pointer hover:underline transition-[600ms]">
            PRIVACY POLICY
          </p>
          <p className="w-fit hover:cursor-pointer hover:underline transition-[600ms]">
            TERMS & CONDITIONS
          </p>
        </div>
        <div className="text-[15px] text-[gray] pb-2">
          &copy; Abdul Samad. All rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Foter;
