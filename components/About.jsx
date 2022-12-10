import React from "react";
import Button from "./Button";

const About = () => {
  return (
    <>
      <main id="about" className="h-fit p-[2rem] mx-[13%]">
        <div className="flex w-full justify-center items-center mt-12">
          <span className="h-[0.3rem] w-[10rem] bg-secondary rounded-[50%] shadow-[0_0_0.5rem_#71EAC6] mr-6 "></span>
          <h1 className="xl:text-[3.5rem] md:text-[3rem] sm:text-[2.5rem] text-[2rem] text-border tracking-[0.2rem]">
            About
          </h1>
          <span className="h-[0.3rem] w-[10rem] bg-secondary rounded-[50%] shadow-[0_0_0.5rem_#71EAC6] ml-6 "></span>
        </div>
        <div className="flex flex-row justify-evenly items-center my-[5rem]">
          <img src="/me.jpg" />
          <div className="w-[60%]">
            <p className="w-[85%] tracking-[0.05rem] text-[1.2rem]">
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
            <Button name='Resume' />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
