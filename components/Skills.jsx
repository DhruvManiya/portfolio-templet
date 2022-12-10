import React from "react";

const logos = ["/html.png", "/css.png", "/AWS.png", "/PHP.png"];

const Skills = () => {
  return (
    <main id="skills" className="h-fit p-[2rem] mx-[13%]">
      <div className="flex w-full justify-center items-center mt-12">
        <span className="h-[0.3rem] w-[10rem] bg-secondary rounded-[50%] shadow-[0_0_0.5rem_#71EAC6] mr-6 "></span>
        <h1 className="xl:text-[3.5rem] md:text-[3rem] sm:text-[2.5rem] text-[2rem] text-border tracking-[0.2rem]">
          Skills
        </h1>
        <span className="h-[0.3rem] w-[10rem] bg-secondary rounded-[50%] shadow-[0_0_0.5rem_#71EAC6] ml-6 "></span>
      </div>
      <section className=" grid grid-cols-4 gap-6 content-center place-content-center mx-[10%] w-[80%] my-[5rem]">
        {logos.map((logo) => {
          return (
            <>
              <div
                key={logo}
                className="sm:h-[10rem] bg-font_color sm:w-[10rem] h-[6rem] w-[6rem] rounded-lg shadow-xl transition-all hover:scale-[1.25] self-center flex justify-center items-center md:p-6 p-4"
              >
                <img src={logo} />
              </div>
            </>
          );
        })}
      </section>
    </main>
  );
};

export default Skills;
