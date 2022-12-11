import React, { useEffect } from "react";
import Button from "./Button";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
  const animation = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".gsap-title", {
      scrollTrigger: ".gsap-title",
      y: "0%",
      duration: 1,
      delay: 0.2,
      opacity: 1,
    });
    gsap.to(".gsap-my-image", {
      scrollTrigger: ".gsap-my-image",
      x: "0%",
      duration: 1,
      delay: 0.2,
      opacity: 1,
    });
    gsap.to(".gsap-my-about", {
      scrollTrigger: ".gsap-my-about",
      x: "0%",
      duration: 1,
      delay: 0.7,
      opacity: 1,
    });
    gsap.to(".gsap-my-button", {
      scrollTrigger: ".gsap-my-button",
      x: "0%",
      duration: 1,
      delay: 1,
      opacity: 1,
    });
  };
  useEffect(() => {
    animation();
  }, []);
  return (
    <>
      <main id="about" className="h-fit p-[2rem] md:mx-[13%]">
        <div className="gsap-title translate-y-[50%] opacity-0 flex w-full justify-center items-center mt-12">
        <span className="h-[0.3rem] md:w-[10rem] w-[5rem] bg-secondary rounded-[50%] shadow-[0_0_0.5rem_#71EAC6] mr-6 "></span>
          <h1 className="xl:text-[3.5rem] md:text-[3rem] sm:text-[2.5rem] text-[2rem] text-border tracking-[0.2rem]">
            About
          </h1>
          <span className="h-[0.3rem] md:w-[10rem] w-[5rem] bg-secondary rounded-[50%] shadow-[0_0_0.5rem_#71EAC6] ml-6 "></span>
        </div>
        <div className="flex lg:flex-row flex-col lg:justify-evenly lg:items-start justify-center items-center my-[5rem]">
          <img
            src="/me.jpg"
            className="gsap-my-image  translate-x-[50%] opacity-0"
          />
          <div className="lg:w-[60%] lg:my-0 my-[2rem]">
            <p className="lg:w-[85%] tracking-[0.05rem] md:text-[1.2rem] text-[0.9rem] gsap-my-about translate-x-[50%] opacity-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              veniam, eveniet voluptate iure magni officiis excepturi nemo sit
              facilis nobis cum impedit asperiores. Sint qui quasi placeat eos
              unde ipsum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Et exercitationem iusto officia dolor? Sequi odit,
              praesentium nemo quo ex saepe magni, eius obcaecati rerum facilis
              corrupti nulla vitae quibusdam adipisci? Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Repellat explicabo, laudantium,
              numquam optio illo cum quibusdam et omnis neque maxime, inventore
              alias facere eaque hic dignissimos dolorum beatae tempora id.
            </p>
            <a
              href="#"
              download
              target="_blank"
              rel="noreferrer"
              className="gsap-my-button translate-x-[50%] opacity-0"
            >
              <Button name="Resume" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
