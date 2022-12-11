import React from "react";
import Button from "./Button";

const Nevbar = () => {
  return (
    <nav className="w-full flex justify-center items-center sm:h-[5rem] h-[4rem] shadow-lg">
      <ul className="2xl:w-[45%] xl:w-[55%] lg:w-[70%] md:w-[90%] w-[100%] flex flex-row justify-evenly items-center md:text-[1.1rem] sm:text-[1rem] text-[0.9rem] tracking-[0.1rem]">
        <li><a href="#about" className="nev-el pb-[3px] px-[5px] hover:border-b-2 border-b-2 border-b-transparent transition-all hover:border-b-[#b2d1c9]"> ABOUT</a></li>
        <li>|</li>
        <li><a href="#certificate" className="nev-el pb-[3px] px-[5px] hover:border-b-2 border-b-2 border-b-transparent transition-all hover:border-b-[#b2d1c9]"> CERTIFICATE</a></li>
        <li>|</li>
        <li><a href="#project" className="nev-el pb-[3px] px-[5px] hover:border-b-2 border-b-2 border-b-transparent transition-all hover:border-b-[#b2d1c9]"> PROJECTS</a></li>
        <li>|</li>
        <li><a href="#skills" className="nev-el pb-[3px] px-[5px] hover:border-b-2 border-b-2 border-b-transparent transition-all hover:border-b-[#b2d1c9]"> SKILLS</a></li>
        <li className="sm:block hidden">|</li>
        <li className="sm:block hidden"><a href="#" download target="_blank" rel="noreferrer"><Button name='Resume' /></a></li>
      </ul>
    </nav>
  );
};

export default Nevbar;
