import React from "react";
import Carousel from "./Carousel.jsx";
const ProjectImages = ({
  title,
  tools,
  projectLink,
  codeLink,
  img1,
  img2,
  img3,
}) => {
  return (
    <div className="w-full !p-2 md:!p-5 lg:!p-10 sm:w-1/2">
      {/* Projects */}
      <div className="p-2">
        <Carousel img1={img1} img2={img2} img3={img3} />
      </div>
      <div>
        <h2 className="mt-2">{title}</h2>
        <ul className="flex w-full gap-2 text-slate-300 text-sm">
          {tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
        <section className="flex justify-between mt-5">
          <a
            target="_blank"
            href={projectLink}
            className="border-b-[3px] border-green-400  text-md"
          >
            VIEW PROJECT
          </a>
          <a
            target="_blank"
            href={codeLink}
            className="border-b-[3px] border-green-400  text-md"
          >
            VIEW CODE
          </a>
        </section>
      </div>
    </div>
  );
};

export default ProjectImages;