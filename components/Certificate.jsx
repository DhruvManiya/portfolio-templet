import React from "react";
import CertificateCard from "./CertificateCard";

const Certificate = () => {
  return (
    <main id="certificate" className="h-fit p-[2rem] mx-[13%]">
      <div className="flex w-full justify-center items-center mt-12">
        <span className="h-[0.3rem] w-[10rem] bg-secondary rounded-[50%] shadow-[0_0_0.5rem_#71EAC6] mr-6 "></span>
        <h1 className="xl:text-[3.5rem] md:text-[3rem] sm:text-[2.5rem] text-[2rem] text-border tracking-[0.2rem]">
          Certified by
        </h1>
        <span className="h-[0.3rem] w-[10rem] bg-secondary rounded-[50%] shadow-[0_0_0.5rem_#71EAC6] ml-6 "></span>
      </div>
      <section className="flex flex-col justify-center items-center my-[5rem]">
        <CertificateCard />
      </section>
    </main>
  );
};

export default Certificate;
