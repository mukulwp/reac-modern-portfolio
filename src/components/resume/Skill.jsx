import React from "react";
import { motion } from "framer-motion";

const Skill = ({ title, percentage, barWidth }) => {
  return (
    <div className="overflow-x-hidden">
      <p className="text-sm uppercase font-medium">{title}</p>
      <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`${barWidth} h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
        >
          <span className="absolute -top-8 right-0">{percentage}%</span>
        </motion.span>
      </span>
    </div>
  );
};

export default Skill;
