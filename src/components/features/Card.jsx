import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, desc, icon }) => {
  return (
    <div className="w-full px-12 h-[22rem] lg:h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-300 group dark:shadow-shadowTwo dark:bg-gradient-to-b dark:from-gray-100 dark:via-purple-100 dark:to-gray-50 dark:hover:bg-gradient-to-t">
      <div className="h-[18.8rem] overflow-y-hidden">
        <div className="h-full flex flex-col gap-8 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div>
            <span className="text-5xl text-designColor">{icon}</span>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl lg:text-2xl font-titleFont font-bold text-gray-300 dark:text-bodyColor">
              {title}
            </h2>
            <p className="text-base">{desc}</p>
            <span className="text-2xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
