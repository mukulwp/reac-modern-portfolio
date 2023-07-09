import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Achievements from "./Achievements";

const Resume = () => {
  const [toggle, setToggle] = useState("Education");
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black dark:border-b-designColor">
      <div className="flex justify-center text-center">
        <Title title="3+ years experience" subTitle="My Resume" />
      </div>
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full">
          <li onClick={()=> setToggle("Education")} className={`resumeList ${toggle === "Education" && 'resumeListActive'}`}>Education</li>
          <li onClick={()=> setToggle("Skills")} className={`resumeList ${toggle === "Skills" && 'resumeListActive'}`}>Professional Skills</li>
          <li onClick={()=> setToggle("Experience")} className={`resumeList ${toggle === "Experience" && 'resumeListActive'}`}>Experience</li>
          <li onClick={()=> setToggle("Achievements")} className={`resumeList ${toggle === "Achievements" && 'resumeListActive'}`}>Achievements</li>
        </ul>
      </div>
      {toggle === "Education" && <Education />}
      {toggle === "Skills" && <Skills />}
      {toggle === "Experience" && <Experience />}
      {toggle === "Achievements" && <Achievements />}
    </section>
  );
};

export default Resume;
