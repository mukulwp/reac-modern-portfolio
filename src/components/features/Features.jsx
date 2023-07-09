import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { FaAppStore, FaCode, FaEdit, FaStreetView } from "react-icons/fa";
import { HiCog, HiServer } from "react-icons/hi";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black dark:border-b-designColor"
    >
      <Title title="Features" subTitle="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-20">
        <Card
          title="Web Development"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis excepturi laudantium magni, repellendus cupiditate eveniet aut."
          icon={<FaCode />}
        />
        <Card
          title="App Development"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis excepturi laudantium magni, repellendus cupiditate eveniet aut."
          icon={<FaAppStore />}
        />
        <Card
          title="Web Design"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis excepturi laudantium magni, repellendus cupiditate eveniet aut."
          icon={<FaEdit />}
        />
        <Card
          title="Freelancing"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis excepturi laudantium magni, repellendus cupiditate eveniet aut."
          icon={<FaStreetView />}
        />
         <Card
          title="SEO Optimization"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis excepturi laudantium magni, repellendus cupiditate eveniet aut."
          icon={<HiCog />}
        />
         <Card
          title="Hosting"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis excepturi laudantium magni, repellendus cupiditate eveniet aut."
          icon={<HiServer />}
        />
      </div>
    </section>
  );
};

export default Features;
