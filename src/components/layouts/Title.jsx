import React from "react";

const Title = ({title, subTitle}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
        {title}
      </h3>
      <h1 className="text-3xl lgl:text-5xl text-gray-300 font-bold capitalize dark:text-bodyColor">{subTitle}</h1>
    </div>
  );
};

export default Title;
