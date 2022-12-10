import React from "react";
import About from "../components/About";
import Certificate from "../components/Certificate";
import Home from "../components/Home";
import Nevbar from "../components/Nevbar";

const index = () => {
  return (
    <>
      <div className="fixed w-[100%] z-[100000] bg-primary">
        <Nevbar />
      </div>
      <Home />
      <About />
      <Certificate />
    </>
  );
};

export default index;
