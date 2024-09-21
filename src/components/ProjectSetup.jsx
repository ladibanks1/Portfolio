import ProjectImages from "./ProjectImages.jsx";
import spaceProjectImage from "../assets/Project One/image.png";
import spaceProjectImageOne from "../assets/Project One/image1.png";
import spaceProjectImageTwo from "../assets/Project One/image2.png";
import jobProjectImage from "../assets/Project Two/image1.png";
import jobProjectImageOne from "../assets/Project Two/image2.png";
import jobProjectImageTwo from "../assets/Project Two/image3.png";
import tailwindProjectImage from "../assets/Project Three/image1.png";
import tailwindProjectImageOne from "../assets/Project Three/image2.png";
import tailwindProjectImageTwo from "../assets/Project Three/image3.png";
import bootstrapProjectImage from "../assets/Project Four/image1.png";
import bootstrapProjectImageOne from "../assets/Project Four/image2.png";
import bootstrapProjectImageTwo from "../assets/Project Four/image3.png";
const ProjectSetup = () => {
  return (
    <div className="projects !flex !flex-wrap lg:p-14">
      <ProjectImages
        title={"SPACE WEBPAGE"}
        tools={["REACT", "CSS", "TAILWIND", "REST API"]}
        projectLink={"https://space-react-project.onrender.com"}
        codeLink={"https://github.com/ladibanks1/space-react-project"}
        img1={spaceProjectImage}
        img2={spaceProjectImageOne}
        img3={spaceProjectImageTwo}
      />
      <ProjectImages 
        title={"JOB WEBAPP"}
        tools={["TAILWIND", "REACT", "NODE", "EXPRESS", "MONGODB"]}
        projectLink={"https://job-project-wq3p.onrender.com"}
        codeLink={"https://github.com/ladibanks1/Job-Project"}
        img1={jobProjectImage}
        img2={jobProjectImageOne}
        img3={jobProjectImageTwo}
      />
      <ProjectImages
            title={"SCHOOL LANDING PAGE"}
            tools={["HTML", "CSS", "TAILWIND"]}
            projectLink={"https://tailwind-project-rose.vercel.app"}
            codeLink={"https://github.com/ladibanks1/tailwind-project"}
            img1={tailwindProjectImage}
            img2={tailwindProjectImageOne}
            img3={tailwindProjectImageTwo}

       />
      <ProjectImages 
            title={"RESTAURANT LANDING PAGE"}
            tools={["HTML", "CSS", "BOOTSTRAP"]}
            projectLink={"https://ola-restaurant.vercel.app"}
            codeLink={"https://github.com/ladibanks1/bootstrap-restaurant-project"}
            img1={bootstrapProjectImage}
            img2={bootstrapProjectImageOne}
            img3={bootstrapProjectImageTwo}
      />
    </div>
  );
};

export default ProjectSetup;
