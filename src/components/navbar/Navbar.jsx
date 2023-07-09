import React, { useState } from "react";
import { navLinksData } from "../../constants";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import DarkMode from "../darkMode/DarkMode";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto px-6 flex justify-between items-center border-b-[1px] border-b-gray-600 dark:bg-gray-50">
      <div>
        <h3 className="font-titleFont text-xl bg-gradient-to-r from-blue-200 via-pink-300 to-red-400  text-transparent bg-clip-text uppercase dark:from-blue-500 dark:via-pink-500 dark:to-red-600">
          Mukul
        </h3>
      </div>
      <div>
        <div onClick={() => setToggleMenu(false)}>
        <ul 
          className={`${
            toggleMenu
              ? "w-[80%] h-screen flex flex-col bg-slate-950 dark:bg-gray-100 dark:shadow-shadowTwo absolute left-0 top-0 px-4 py-8 animate-fade"
              : "hidden"
          } lg:flex gap-6 lg:gap-10 lg:items-center font-titleFont transition-transform duration-300`}
        >
          <div className="flex flex-col gap-3 lg:hidden">
            <h3 className="font-titleFont text-xl bg-gradient-to-r from-blue-200 via-pink-300 to-red-400  text-transparent bg-clip-text uppercase dark:from-blue-500 dark:via-pink-500 dark:to-red-600">
              Mukul
            </h3>
            <p className="text-sm text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              adipisci sed rerum natus qui iste!
            </p>
          </div>
          {navLinksData.map((navLink) => {
            const { _id, title, link } = navLink;
            return (
              <li
                key={_id}
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer group hover:text-designColor duration-300 dark:text-bodyColor dark:hover:text-designColor"
              >
                <Link
                  to={link}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span onClick={() => setToggleMenu(false)} className="relative">
                    {title}{" "}
                    <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-2 left-0 -translate-x-[100%] invisible group-hover:translate-x-0 group-hover:visible transition-transform duration-500"></span>
                  </span>
                </Link>
              </li>
            );
          })}
          <li className="hidden lg:inline-flex">
            <DarkMode />
          </li>
          <div className="block lg:hidden">
            <h3 className="text-base uppercase font-titleFont mb-4">
              find me in
            </h3>
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
        </ul>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <span>
            <DarkMode />
          </span>
          <span
            onClick={() => setToggleMenu(!toggleMenu)}
            className="text-xl dark:text-designColor bg-black w-10 h-10 flex items-center justify-center rounded-full text-designColor cursor-pointer dark:bg-transparent"
          >
            {toggleMenu ? (
              <span className="animate-spin">
                <AiOutlineClose />
              </span>
            ) : (
              <FiMenu />
            )}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
