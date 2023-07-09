import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] xl:w-[500px] xl:h-[680px] lgl:w-[450px] lgl:h-[500px] z-10"
        src={bannerImg}
        alt="John Doe"
      />
      <div className="absolute bottom-0 w-[350px] xl:w-[500px] h-[300px] xl:h-[500px] lgl:w-[400px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center dark:from-[#f1f1f1] dark:to-[#f5f5f5] dark:shadow-shadowTwo"></div>
    </div>
  );
};

export default RightBanner;
