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
              href={projectLink}
              className="border-b-[3px] border-green-400  text-md"
            >
              VIEW PROJECT
            </a>
            <a
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

// {/* PROJECT TWO */}
// <div className="w-full p-2 md:p-3 lg:p-5 sm:w-1/2">
// {/* Job Project */}
//   <div className="p-2">
//     <Carousel
//       img1={jobProjectImage}
//       img2={jobProjectImageOne}
//       img3={jobProjectImageTwo}
//     />
//   </div>
//   <h2 className="mt-2">JOB WEBAPP</h2>
//   <ul className="flex gap-2 text-slate-300 text-sm">
//     <li>HTML</li>
//     <li>TAILWIND</li>
//     <li>REACT</li>
//     <li>NODE</li>
//     <li>EXPRESS</li>
//     <li>MONGODB</li>
//   </ul>
//   <section className="flex justify-between mt-5">
//     <a
//       href="https://job-project-wq3p.onrender.com"
//       className="border-b-[3px] border-green-400  text-md"
//     >
//       VIEW PROJECT
//     </a>
//     <a
//       href="https://github.com/ladibanks1/Job-Project"
//       className="border-b-[3px] border-green-400  text-md"
//     >
//       VIEW CODE
//     </a>
//   </section>
// </div>
// {/* PROJECT THREE */}
// <div className="w-full p-2 md:p-3 lg:p-5 sm:w-1/2">
// {/* Tailwind Project */}
//   <div className="p-2">
//     <Carousel
//       img1={tailwindProjectImage}
//       img2={tailwindProjectImageOne}
//       img3={tailwindProjectImageTwo}
//     />
//   </div>
//   <h2 className="mt-2">SCHOOL LANDING PAGE</h2>
//   <ul className="flex gap-2 text-slate-300 text-sm">
//     <li>HTML</li>
//     <li>CSS</li>
//     <li>TAILWIND</li>
//   </ul>
//   <section className="flex justify-between mt-5">
//     <a
//       href="https://tailwind-project-rose.vercel.app"
//       className="border-b-[3px] border-green-400  text-md"
//     >
//       VIEW PROJECT
//     </a>
//     <a
//       href="https://github.com/ladibanks1/tailwind-project"
//       className="border-b-[3px] border-green-400  text-md"
//     >
//       VIEW CODE
//     </a>
//   </section>
// </div>
// {/* PROJECT FOUR */}
// <div className="w-full p-2 md:p-3 lg:p-5 sm:w-1/2">
// {/* Bootstrap Project */}
//   <div className="p-2">
//     <Carousel
//       img1={bootstrapProjectImage}
//       img2={bootstrapProjectImageOne}
//       img3={bootstrapProjectImageTwo}
//     />
//   </div>
//   <h2 className="mt-2">RESTAURANT LANDING PAGE</h2>
//   <ul className="flex gap-2 text-slate-300 text-sm">
//     <li>HTML</li>
//     <li>CSS</li>
//     <li>BOOTSTRAP</li>
//   </ul>
//   <section className="flex justify-between mt-5">
//     <a
//       href="https://ola-restaurant.vercel.app"
//       className="border-b-[3px] border-green-400  text-md"
//     >
//       VIEW PROJECT
//     </a>
//     <a
//       href="https://github.com/ladibanks1/bootstrap-restaurant-project"
//       className="border-b-[3px] border-green-400  text-md"
//     >
//       VIEW CODE
//     </a>
//   </section>
// </div>
