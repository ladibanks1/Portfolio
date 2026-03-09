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
import patientHubImage from "../assets/Project Five/image1.png";
import patientHubImageOne from "../assets/Project Five/image2.png";
import patientHubImageTwo from "../assets/Project Five/image3.png";
const ProjectSetup = () => {
  return (
    <div className="projects !flex !flex-wrap lg:p-14">
      <ProjectImages
        title={"PATIENT HUB"}
        tools={["REACT", "EXPRESS", "SOCKETIO", "TAILWIND"]}
        projectLink={"https://patienthub.vercel.app"}
        codeLink={"https://github.com/ladibanks1/patient-hub-frontend"}
        img1={patientHubImage}
        img2={patientHubImageOne}
        img3={patientHubImageTwo}
        description="A full-stack healthcare platform connecting patients,doctors, and hospitals. Features appointment booking, real-time chat, and dedicated dashboards for all three user types, built with React, Node.js, and Socket.io."
      />
      <ProjectImages
        title={"SPACE WEBPAGE"}
        tools={["REACT", "CSS", "TAILWIND", "REST API"]}
        projectLink={"https://space-react-project.onrender.com"}
        codeLink={"https://github.com/ladibanks1/space-react-project"}
        img1={spaceProjectImage}
        img2={spaceProjectImageOne}
        img3={spaceProjectImageTwo}
        description={"An interactive space exploration website showcasing planets, travel distances, and journey times across the solar system, built with React and a REST API."}
      />
      <ProjectImages
        title={"JOB WEBAPP"}
        tools={["TAILWIND", "REACT", "NODE", "EXPRESS", "MONGODB"]}
        projectLink={"https://job-project-wq3p.onrender.com"}
        codeLink={"https://github.com/ladibanks1/Job-Project"}
        img1={jobProjectImage}
        img2={jobProjectImageOne}
        img3={jobProjectImageTwo}
        description={"A full-stack job board where companies can post listings and candidates can browse and apply featuring company profiles and a clean applicant experience built with React, Node.js, and MongoDB."}
      />
      <ProjectImages
        title={"SCHOOL LANDING PAGE"}
        tools={["HTML", "CSS", "TAILWIND"]}
        projectLink={"https://tailwind-project-rose.vercel.app"}
        codeLink={"https://github.com/ladibanks1/tailwind-project"}
        img1={tailwindProjectImage}
        img2={tailwindProjectImageOne}
        img3={tailwindProjectImageTwo}
        description={"A modern school landing page showcasing past events, upcoming activities, and the institution's core offerings — designed to inform and engage prospective students and parents."}
      />
      <ProjectImages
        title={"RESTAURANT LANDING PAGE"}
        tools={["HTML", "CSS", "BOOTSTRAP"]}
        projectLink={"https://ola-restaurant.vercel.app"}
        codeLink={"https://github.com/ladibanks1/bootstrap-restaurant-project"}
        img1={bootstrapProjectImage}
        img2={bootstrapProjectImageOne}
        img3={bootstrapProjectImageTwo}
        description={"A clean, appetizing landing page for a restaurant business — showcasing the menu, ambiance, and location to attract and convert hungry visitors."}
      />
    </div>
  );
};

export default ProjectSetup;
