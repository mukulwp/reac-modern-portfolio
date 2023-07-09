import React from "react";

const ResumeCard = ({ title, subTitle, result, desc }) => {
  return (
    <div className="w-full h-auto lgl:h-1/3 group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60 dark:group-hover:bg-designColor">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300 dark:bg-gray-100"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10 flex flex-col justify-center gap-10 shadow-shadowOne dark:bg-gray-50 dark:shadow-shadowTwo py-6 lgl:py-0">
        <div className="flex flex-col lgl:flex-row justify-between gap-3 lgl:gap-0 items-start lgl:items-center">
          <div>
            <h3 className="text-xl lg:text-2xl font-semibold group-hover:text-white duration-300 dark:text-bodyColor dark:group-hover:text-black">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300 dark:group-hover:text-black dark:text-bodyColor">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium dark:bg-gray-100 dark:shadow-shadowTwo">{result}</p>
          </div>
        </div>
        <p className="text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300 dark:text-bodyColor dark:group-hover:text-black">{desc}</p>
      </div>
    </div>
  );
};

export default ResumeCard;
