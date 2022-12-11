import React from "react";
import Carousel from "./Carousel";

const ProjectCards = ({ projects }) => {
  return (
    <>
      {projects.map((card) => {
        return (
          <>
            <div
              key={card.title}
              className="flex xl:flex-row flex-col-reverse justify-center xl:items-center 2xl:h-[40vh] xl:h-[45vh] h-fit w-[100%] my-12 rounded-xl shadow-2xl"
            >
              <div className="flex flex-col justify-center items-center md:w-fit mx-[1rem]">
                <div className="flex items-center my-[1rem] md:ml-[3rem]">
                <span className="h-[0.5rem] w-[2rem] bg-secondary rounded-[3px] shadow-[0_0_0.5rem_#71EAC6] mr-6 "></span>
                  <h1 className="md:text-[1.5rem] text-[1rem] text-border tracking-[0.4rem]">
                    {card.name}
                  </h1>
                </div>
                <p className="my-[1rem] mx-[1rem] md:ml-[3rem] md:text-[1rem] text-[0.9rem] text-border tracking-wider 2xl:w-[70%] xl:w-[80%] lg:w-[90%] w-[100%]">
                  {card.description}
                </p>
              </div>
              <div className="h-full xl:w-[40%] w-full flex flex-col">
                <span className=" bg-secondary md:h-[3.5rem] h-[2rem] w-[100%] xl:rounded-tr-xl xl:rounded-tl-none rounded-t-xl"></span>
                <Carousel items={card.images} />
                <span className="bg-secondary md:h-[3.5rem] h-[2rem] w-[100%] xl:rounded-br-xl"></span>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ProjectCards;
