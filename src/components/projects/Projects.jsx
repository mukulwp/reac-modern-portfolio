import React from "react";
import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import { projectOne } from "../../assets/index";
import { projectTwo } from "../../assets/index";
import { projectThree } from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black dark:border-b-designColor"
    >
      <div className="flex justify-center text-center">
        <Title
          title="ProVisit My Portfolio and Keep Your Feedbackjects"
          subTitle="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCard
          title="Social Media Clone"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque atque, culpa facilis placeat magnam aliquam consectetur debitis recusandae ad repellat."
          imgUrl={projectOne}
        />
        <ProjectCard
          title="E-Commerce Website"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque atque, culpa facilis placeat magnam aliquam consectetur debitis recusandae ad repellat."
          imgUrl={projectTwo}
        />
        <ProjectCard
          title="Chatting App"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque atque, culpa facilis placeat magnam aliquam consectetur debitis recusandae ad repellat."
          imgUrl={projectThree}
        />
        <ProjectCard
          title="Social Media Clone"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque atque, culpa facilis placeat magnam aliquam consectetur debitis recusandae ad repellat."
          imgUrl={projectOne}
        />
        <ProjectCard
          title="E-Commerce Website"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque atque, culpa facilis placeat magnam aliquam consectetur debitis recusandae ad repellat."
          imgUrl={projectTwo}
        />
        <ProjectCard
          title="Chatting App"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque atque, culpa facilis placeat magnam aliquam consectetur debitis recusandae ad repellat."
          imgUrl={projectThree}
        />
      </div>
    </section>
  );
};

export default Projects;
