import React from "react";
import { contactImg } from "../../assets";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne rounded-lg p-8 flex flex-col gap-8 justify-center dark:bg-gradient-to-b dark:from-gray-50 dark:to-gray-100 dark:shadow-shadowTwo">
      <img
        src={contactImg}
        alt="Contact"
        className="w-full h-64 object-cover rounded-lg hover:grayscale transition-colors duration-300"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white dark:text-bodyColor">John Doe</h3>
        <p className="text-lg font-normal text-gray-400 dark:text-bodyColor">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide dark:text-bodyColor">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          dolorem magnam. Culpa atque accusamus sint?
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2 dark:text-bodyColor">
          Phone: <span className="text-lightText dark:text-gray-500">+1 1534190254</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2 dark:text-bodyColor">
          Email: <span className="text-lightText dark:text-gray-500">john@gamil.com</span>
        </p>
      </div>
      <div>
        <h3 className="text-base uppercase font-titleFont mb-4">find me in</h3>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
