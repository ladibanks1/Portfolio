import React from "react";
import ProjectSetup from "./ProjectSetup.jsx";

const Projects = () => {
  return (
    <div>
      <hr className="w-[94%] mx-auto my-10" />
      <div className="bg-[#161616] px-4 py-5 rounded-3xl">
      <section className="flex justify-between items-center px-3 ">
        <h2 className="text-4xl font-bold">Projects</h2>
        <a
          href="mailto:oladipupobankole24@gmail.com"
          className="border-b-[3px] border-green-400 animate-pulse text-md"
        >
          Contact Me
        </a>
      </section>
      <ProjectSetup />
      </div>
    </div>
  );
};

export default Projects;
