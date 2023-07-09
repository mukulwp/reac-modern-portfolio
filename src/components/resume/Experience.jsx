import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div className="w-full flex flex-col lgl:flex-row gap-20" initial={{translateX: "50px"}} animate={{translateX: 0, transition:{duration: 0.5}}} >
      <div>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2020-2023</p>
          <h2 className="text-3xl xl:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-4 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Jr. Web Developer"
            subTitle="SoftecBiz (2022-Present)"
            result="Bangladesh"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est accusantium labore libero neque! Facilis."
          />
          <ResumeCard
            title="Wordpress Developer"
            subTitle="Get Web Expert (2021-Present)"
            result="USA"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est accusantium labore libero neque! Facilis."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike (2022-2023)"
            result="Canada"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est accusantium labore libero neque! Facilis."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2007-2021</p>
          <h2 className="text-3xl xl:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-4 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-end Instructor"
            subTitle="Superking College (2017-2021)"
            result="India"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est accusantium labore libero neque! Facilis."
          />
          <ResumeCard
            title="Wordpress Instructor"
            subTitle="Adward College (2015-2017)"
            result="England"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est accusantium labore libero neque! Facilis."
          />
          <ResumeCard
            title="Web Developer Instructor"
            subTitle="Menwhile School (2013-2015)"
            result="Singapore"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est accusantium labore libero neque! Facilis."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
