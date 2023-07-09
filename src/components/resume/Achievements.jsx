import React from 'react'
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <motion.div className="w-full flex flex-col lgl:flex-row gap-20" initial={{translateX: "-50px"}} animate={{translateX: 0, transition:{duration: 0.5}}} >
    <div>
      <div className="py-12 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px]">2020-2023</p>
        <h2 className="text-3xl xl:text-4xl font-bold">Company Experience</h2>
      </div>
      <div className="mt-4 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="Lorem Ipsum Dolor Sit"
          subTitle="SoftecBiz (2022-Present)"
          result="Success"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est accusantium labore libero neque! Facilis."
        />
        <ResumeCard
          title="Lorem Ipsum Dolor Sit"
          subTitle="Get Web Expert (2021-Present)"
          result="Success"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est accusantium labore libero neque! Facilis."
        />
        <ResumeCard
          title="Lorem Ipsum Dolor Sit"
          subTitle="Nike (2022-2023)"
          result="Success"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est accusantium labore libero neque! Facilis."
        />
      </div>
    </div>
    <div>
      <div className="py-12 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px]">2007-2021</p>
        <h2 className="text-3xl xl:text-4xl font-bold">Job Experience</h2>
      </div>
      <div className="mt-4 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="Lorem Ipsum Dolor Sit"
          subTitle="Superking College (2017-2021)"
          result="Success"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est accusantium labore libero neque! Facilis."
        />
        <ResumeCard
          title="Lorem Ipsum Dolor Sit"
          subTitle="Adward College (2015-2017)"
          result="Success"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est accusantium labore libero neque! Facilis."
        />
        <ResumeCard
          title="Lorem Ipsum Dolor Sit"
          subTitle="Menwhile School (2013-2015)"
          result="Success"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est accusantium labore libero neque! Facilis."
        />
      </div>
    </div>
  </motion.div>
  )
}

export default Achievements