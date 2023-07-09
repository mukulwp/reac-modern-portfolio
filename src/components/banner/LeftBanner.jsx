import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaLinkedinIn, FaReact, FaTwitter } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder",
      "Web Developer",
      "Web Designer",
      "Freelancer",
      "Wordpress Developer",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="lgl:w-1/2 w-full flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal uppercase tracking-wider">
          Welcome to my world
        </h4>
        <h1 className="text-4xl lgl:text-6xl font-bold text-white dark:text-bodyColor">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">John Doe</span>
        </h1>
        <h2 className="text-2xl lg:text-4xl font-bold text-white dark:text-bodyColor">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          qui dolorem sapiente! Facere maxime dicta, excepturi asperiores
          consectetur veritatis recusandae exercitationem aut, eligendi alias
          repudiandae quo dolor velit vitae ratione nam odit, at deserunt ipsum
          vero! Ducimus maiores.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Best Skill On
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
