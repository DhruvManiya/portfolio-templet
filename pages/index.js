import React from "react";
import About from "../components/About";
import Certificate from "../components/Certificate";
import Follow from "../components/Follow";
import Home from "../components/Home";
import Nevbar from "../components/Nevbar";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const index = () => {
  return (
    <>
      <div className="fixed w-[100%] z-[100000] bg-primary">
        <Nevbar />
      </div>
      <Home />
      <About />
      <Certificate />
      <Projects />
      <Skills />
      <Follow />
    </>
  );
};

export default index;
