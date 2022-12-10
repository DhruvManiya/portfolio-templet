import React from "react";
import Button from "./Button";

const Nevbar = () => {
  return (
    <nav className="w-full flex justify-center items-center h-[5rem] shadow-lg">
      <ul className="w-[45%] flex flex-row justify-evenly items-center text-[1.1rem] tracking-[0.1rem]">
        <li><a href="#about" className="nev-el pb-[3px] px-[5px] hover:border-b-2 border-b-2 border-b-transparent transition-all hover:border-b-[#b2d1c9]"> ABOUT</a></li>
        <li>|</li>
        <li><a href="#certificate" className="nev-el pb-[3px] px-[5px] hover:border-b-2 border-b-2 border-b-transparent transition-all hover:border-b-[#b2d1c9]"> CERTIFICATE</a></li>
        <li>|</li>
        <li><a href="#skills" className="nev-el pb-[3px] px-[5px] hover:border-b-2 border-b-2 border-b-transparent transition-all hover:border-b-[#b2d1c9]"> SKILLS</a></li>
        <li>|</li>
        <li><a href="#" download target="_blank" rel="noreferrer"><Button name='Resume' /></a></li>
      </ul>
    </nav>
  );
};

export default Nevbar;
