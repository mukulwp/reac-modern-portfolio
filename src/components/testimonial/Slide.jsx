import React from "react";
import { quote } from "../../assets";
import { RiStarFill } from "react-icons/ri";

const Slide = ({
  photo,
  title,
  name,
  designation,
  jobTitle,
  jobFrom,
  comment,
}) => {
  return (
    <div className="w-full">
      <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne rounded-lg px-8 py-12 flex flex-col md:flex-row lg:flex-col gap-8 justify-center md:justify-start lg:justify-center dark:shadow-shadowTwo dark:bg-gradient-to-b dark:from-gray-100 dark:via-purple-100 dark:to-gray-50 dark:hover:bg-gradient-to-t">
          <img
            src={photo}
            alt={name}
            className="rounded-lg object-cover h-72 md:h-32 lg:h-72"
          />
          <div className="w-full flex flex-col justify-end">
            <p className="text-xs uppercase text-designColor tracking-wide mb-2">
              {title}
            </p>
            <h3 className="text-2xl font-bold tracking-wide">{name}</h3>
            <p className="text-base tracking-wide text-gray-500">
              {designation}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[60%] h-full flex flex-col justify-between">
          <img src={quote} alt="qoute" className="w-[20%]" />
          <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-8 flex flex-col justify-center gap-8 dark:shadow-shadowTwo dark:bg-gradient-to-r dark:from-gray-100 dark:via-purple-50 dark:to-gray-50">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0 py-6 border-b-2 border-b-gray-900">
              <div>
                <h3 className="text-xl lg:text-2xl font-medium tracking-wide">
                  {jobTitle}
                </h3>
                <p className="text-base text-gray-400 mt-3">{jobFrom}</p>
              </div>
              <div className="text-yellow-500 flex gap-1">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </div>
            </div>
            <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
              {comment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
