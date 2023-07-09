import React, { useState } from "react";
import Title from "../layouts/Title";
import Slider from "react-slick";
import { testimonialOne, testimonialTwo } from "../../assets";
import Slide from "./Slide";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center cursor-pointer absolute -top-6 lg:top-0 right-0 shadow-shadowOne z-10 dark:bg-gray-100 dark:shadow-xl dark:text-gray-700">
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center cursor-pointer absolute -top-6 lg:top-0 right-20 shadow-shadowOne z-10 dark:bg-gray-100 dark:shadow-xl dark:text-gray-700">
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                background: "#ff014f",
                color: "blue",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                background: "gray",
                color: "blue",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black dark:border-b-designColor"
    >
      <div className="flex justify-center text-center">
        <Title title="what clients say" subTitle="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          <Slide
            photo={testimonialOne}
            title="Bound - Trolola"
            name="Jone Doe"
            designation="Operation Officer"
            jobTitle="Travel Mobile App Design"
            jobFrom="via Upwork - Apr 4, 2021 - Aug 20, 2021"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam in odit ullam voluptatibus? In aspernatur, tempore, error, cupiditate dolor tenetur accusamus dicta rem vitae veniam nostrum architecto eius laborum quis sed aut modi quod amet perferendis maiores enim. Sed sunt unde sequi minima? Eos harum reprehenderit totam est vel."
          />
          <Slide
            photo={testimonialTwo}
            title="Bound - Trolola"
            name="William Mark"
            designation="CEO"
            jobTitle="Company Website Development"
            jobFrom="via Upwork - Apr 4, 2021 - Aug 20, 2021"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam in odit ullam voluptatibus? In aspernatur, tempore, error, cupiditate dolor tenetur accusamus dicta rem vitae veniam nostrum architecto eius laborum quis sed aut modi quod amet perferendis maiores enim. Sed sunt unde sequi minima? Eos harum reprehenderit totam est vel."
          />
          <Slide
            photo={testimonialOne}
            title="Bound - Trolola"
            name="Jone Doe"
            designation="Operation Officer"
            jobTitle="Travel Mobile App Design"
            jobFrom="via Upwork - Apr 4, 2021 - Aug 20, 2021"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam in odit ullam voluptatibus? In aspernatur, tempore, error, cupiditate dolor tenetur accusamus dicta rem vitae veniam nostrum architecto eius laborum quis sed aut modi quod amet perferendis maiores enim. Sed sunt unde sequi minima? Eos harum reprehenderit totam est vel."
          />
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
