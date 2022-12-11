import React from "react";
import { FaGithub,FaLinkedinIn,FaTelegramPlane,FaTwitter,FaMailBulk } from "react-icons/fa";

const Follow = () => {
  return (
    <main id="follow" className="h-fit p-[2rem] md:mx-[13%]">
      <div className="flex w-full justify-center items-center mt-12">
        <span className="h-[0.3rem] md:w-[10rem] w-[5rem] bg-secondary rounded-[50%] shadow-[0_0_0.5rem_#71EAC6] mr-6 "></span>
        <h1 className="xl:text-[3.5rem] lg:text-[3rem] sm:text-[1.5rem] text-[1.25rem] text-border md:tracking-[0.2rem] tracking-[0.1rem]">
          Follow me on
        </h1>
        <span className="h-[0.3rem] md:w-[10rem] w-[5rem] bg-secondary rounded-[50%] shadow-[0_0_0.5rem_#71EAC6] ml-6 "></span>
      </div>
      <section className=" flex justify-center items-center my-[5rem]">
        <a href="" className="mx-[1rem]"><FaGithub size='1.75em' /></a>
        <a href="" className="mx-[1rem]"><FaLinkedinIn size='1.75em' /></a>
        <a href="" className="mx-[1rem]"><FaTelegramPlane size='1.75em' /></a>
        <a href="" className="mx-[1rem]"><FaTwitter size='1.75em' /></a>
        <a href="mailto:" className="mx-[1rem]"><FaMailBulk size='1.75em' /></a>
      </section>
    </main>
  );
};

export default Follow;
