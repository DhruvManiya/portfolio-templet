import React from "react";
import Button from "./Button";

const Home = () => {
  return (
    <div className="h-[85vh] w-[100%] flex justify-evenly items-center relative">
      <div className=" absolute top-0 left-0 right-0 bottom-0 h-[100%] w-[100%] bg-primary">
        <img
          src="/image.jpg"
          className="h-[100%] w-[100%] object-cover opacity-[0.2] blur-[2px]"
        />
      </div>

      <div className="flex flex-col z-10">
        <div className="flex items-center mt-12">
          <span className="h-[0.5rem] w-[2rem] bg-secondary rounded-[3px] shadow-[0_0_0.5rem_#71EAC6] mr-6 "></span>
          <h1 className="xl:text-[4rem] md:text-[3rem] sm:text-[2.5rem] text-[2rem] text-border tracking-[0.2rem]">
            Lorem ipsum
          </h1>
        </div>
        <h1 className="ml-[4rem] xl:text-[1.5rem] md:text-[1.25rem] sm:text-[1rem] text-[1rem] text-border tracking-[0.4rem] uppercase">
          Lorem ipsum dolor
        </h1>

        <a href="#contact" className="ml-[4rem]">
          <Button name="Contact" />
        </a>
      </div>
      <img src="/SVG.png" className="w-[20%] z-10" />
    </div>
  );
};

export default Home;
