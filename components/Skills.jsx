import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const logos = ["/html.png", "/css.png", "/AWS.png", "/PHP.png"];

const Skills = () => {
  const animation = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".gsap-title-skill", {
      scrollTrigger: ".gsap-title-skill",
      y: "0%",
      duration: 1,
      delay: 0.2,
      opacity: 1,
    });
    gsap.to(".gsap-section-skill", {
      scrollTrigger: ".gsap-section-skill",
      x: "0%",
      duration: 1,
      delay: 0.2,
      opacity: 1,
    });
  };
  useEffect(() => {
    animation();
  }, []);
  return (
    <main id="skills" className="h-fit p-[2rem] md:mx-[13%]">
      <div className="gsap-title-skill translate-y-[50%] opacity-0  flex w-full justify-center items-center mt-12">
        <span className="h-[0.3rem] md:w-[10rem] w-[5rem] bg-secondary rounded-[50%] shadow-[0_0_0.5rem_#71EAC6] mr-6 "></span>
        <h1 className="xl:text-[3.5rem] md:text-[3rem] sm:text-[2.5rem] text-[2rem] text-border tracking-[0.2rem]">
          Skills
        </h1>
        <span className="h-[0.3rem] md:w-[10rem] w-[5rem] bg-secondary rounded-[50%] shadow-[0_0_0.5rem_#71EAC6] ml-6 "></span>
      </div>
      <section className="gsap-section-skill translate-x-[20%] opacity-0 grid lg:grid-cols-4 grid-cols-2 gap-6 justify-items-center content-center xl:mx-[10%] xl:w-[80%] w-[100%] my-[5rem]">
        {logos.map((logo) => {
          return (
            <>
              <div
                key={logo}
                className="sm:h-[10rem] bg-font_color sm:w-[10rem] h-[6rem] w-[6rem] m-[1rem] rounded-lg shadow-xl transition-all hover:scale-[1.25] self-center flex justify-center items-center md:p-6 p-4"
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
