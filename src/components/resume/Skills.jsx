import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

const Skills = () => {
  return (
    <motion.div
      className="w-full flex flex-col lg:flex-row gap-20"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1, transition: { duration: 0.5 } }}
    >
      <div className="w-full lg:w-1/2">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-3xl xl:text-4xl font-bold">Design Skills</h2>
        </div>
        <div className="mt-4 lgl:mt-14 w-full flex flex-col gap-10">
          <Skill title="Photoshop" percentage={96} barWidth="w-[96%]" />
          <Skill title="Figma" percentage={90} barWidth="w-[90%]" />
          <Skill title="Adobe Xd" percentage={80} barWidth="w-[80%]" />
          <Skill title="PSD" percentage={85} barWidth="w-[85%]" />
          <Skill title="Design" percentage={88} barWidth="w-[88%]" />
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-3xl xl:text-4xl font-bold">Development Skills</h2>
        </div>
        <div className="mt-4 lgl:mt-14 w-full flex flex-col gap-8">
          <Skill title="html" percentage={95} barWidth="w-[95%]" />
          <Skill title="css" percentage={92} barWidth="w-[92%]" />
          <Skill title="javascript" percentage={85} barWidth="w-[85%]" />
          <Skill title="PHP" percentage={70} barWidth="w-[70%]" />
          <Skill title="React" percentage={80} barWidth="w-[80%]" />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
