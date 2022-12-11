import React,{useEffect} from "react";
import CertificateCard from "./CertificateCard";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Certificate = () => {
  const animation = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".gsap-title-certi", {
      scrollTrigger: ".gsap-title-certi",
      y: "0%",
      duration: 1,
      delay: 0.2,
      opacity: 1,
    });
    gsap.to(".gsap-section-certi", {
      scrollTrigger: ".gsap-section-certi",
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
    <main id="certificate" className="h-fit p-[2rem] md:mx-[13%]">
      <div className="gsap-title-certi translate-y-[50%] opacity-0 flex w-full justify-center items-center mt-12">
      <span className="h-[0.3rem] md:w-[10rem] w-[5rem] bg-secondary rounded-[50%] shadow-[0_0_0.5rem_#71EAC6] mr-6 "></span>
          <h1 className="xl:text-[3.5rem] md:text-[2.5rem] sm:text-[2rem] text-[1.5rem] text-border tracking-[0.2rem]">
            Certified by
          </h1>
          <span className="h-[0.3rem] md:w-[10rem] w-[5rem] bg-secondary rounded-[50%] shadow-[0_0_0.5rem_#71EAC6] ml-6 "></span>
      </div>
      <section className="gsap-section-certi translate-x-[20%] opacity-0 flex flex-col justify-center items-center my-[5rem]">
        <CertificateCard />
      </section>
    </main>
  );
};

export default Certificate;
