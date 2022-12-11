import React,{useEffect} from "react";
import ProjectCards from "./ProjectCards";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const projects = () => {
  const projects = [
    {
      images: ["/p11.jpeg", "/p12.jpeg", "/p13.jpeg"],
      name: "k fashion",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam, eveniet voluptate iure magni officiis excepturi nemo sit facilis nobis cum impedit asperiores. Sint qui quasi placeat eos unde ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et exercitationem iusto officia dolor? Sequi odit, praesentium nemo quo ex saepe magni, eius obcaecati rerum facilis corrupti nulla vitae quibusdam adipisci? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat explicabo, laudantium, numquam optio illo cum quibusdam et omnis neque maxime, inventore alias facere eaque hic dignissimos dolorum beatae tempora id.",
    },
    {
      images: ["/p21.jpeg", "/p22.jpeg", "/p23.jpeg"],
      name: "Three bulls",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam, eveniet voluptate iure magni officiis excepturi nemo sit facilis nobis cum impedit asperiores. Sint qui quasi placeat eos unde ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et exercitationem iusto officia dolor? Sequi odit, praesentium nemo quo ex saepe magni, eius obcaecati rerum facilis corrupti nulla vitae quibusdam adipisci? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat explicabo, laudantium, numquam optio illo cum quibusdam et omnis neque maxime, inventore alias facere eaque hic dignissimos dolorum beatae tempora id.",
    },
  ];
  const animation = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".gsap-title-project", {
      scrollTrigger: ".gsap-title-project",
      y: "0%",
      duration: 1,
      delay: 0.2,
      opacity: 1,
    });
    gsap.to(".gsap-section-project", {
      scrollTrigger: ".gsap-section-project",
      x: "0%",
      duration: 1,
      delay: 0.2,
      opacity: 1,
    });

  }
    useEffect(() => {
      animation();
    }, []);
  return (
    <>
      <main id="project" className="h-fit p-[2rem] mx-[13%]">
        <div className="gsap-title-project translate-y-[50%] opacity-0 flex w-full justify-center items-center mt-12">
          <span className="h-[0.3rem] w-[10rem] bg-secondary rounded-[50%] shadow-[0_0_0.5rem_#71EAC6] mr-6 "></span>
          <h1 className="xl:text-[3.5rem] md:text-[3rem] sm:text-[2.5rem] text-[2rem] text-border tracking-[0.2rem]">
            Projects
          </h1>
          <span className="h-[0.3rem] w-[10rem] bg-secondary rounded-[50%] shadow-[0_0_0.5rem_#71EAC6] ml-6 "></span>
        </div>
        <div className="gsap-section-project translate-x-[20%] opacity-0 flex flex-col justify-center items-center xl:items-end md:mt-[4rem] mb-4">
          <ProjectCards projects={projects} />
        </div>
      </main>
    </>
  );
};

export default projects;
