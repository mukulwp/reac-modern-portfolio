import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectCard = ({ title, desc, imgUrl }) => {
  return (
    <div className="w-full px-6 lg:px-12 h-1uto py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 dark:shadow-shadowTwo dark:bg-gradient-to-b dark:from-gray-100 dark:via-purple-100 dark:to-gray-50 dark:hover:bg-gradient-to-t">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-64 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={imgUrl}
          alt=""
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-5">
        <div className="flex justify-between items-center">
        <h3 className="text-designColor uppercase text-base font-normal">{title}</h3>
        <div className="flex items-center gap-2">
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer dark:text-white"><FaGithub /></span>
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer dark:text-white"><FaGlobe /></span>
        </div>
        </div>
        <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300 dark:hover:text-gray-900">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
