// Automactic Date advancement based on the start date of the skill

const getYearsOfExperience = (startDate) => {
  const start = new Date(startDate).getFullYear();
  const today = new Date().getFullYear();
  const difference = today - start;

  return difference > 0
    ? `${difference} Year${difference > 1 ? "s" : ""}+ Experience`
    : "Less than a year experience";
};

const Skills = () => {
  return (
    <div>
      <hr className="w-[94%] mx-auto my-10" />
      <section className="skills">
        <div>
          <h1>HTML</h1>
          <p>{getYearsOfExperience("2022")}</p>
        </div>
        <div>
          <h1>CSS</h1>
          <p>{getYearsOfExperience("2022")}</p>
        </div>
        <div>
          <h1>TAILWIND</h1>
          <p>{getYearsOfExperience("2023")}</p>
        </div>
        <div>
          <h1>BOOTSTRAP</h1>
          <p>{getYearsOfExperience("2022")}</p>
        </div>
        <div>
          <h1>JAVASCRIPT</h1>
          <p>{getYearsOfExperience("2022")}</p>
        </div>
        <div>
          <h1>REACT</h1>
          <p>{getYearsOfExperience("2023")}</p>
        </div>
        <div>
          <h1>NEXT.JS</h1>
          <p>{getYearsOfExperience("2024")}</p>
        </div>
        <div>
          <h1>NODE JS</h1>
          <p>{getYearsOfExperience("2023")}</p>
        </div>
        <div>
          <h1>EXPRESS</h1>
          <p>{getYearsOfExperience("2023")}</p>
        </div>
        <div>
          <h1>NEST</h1>
          <p>{getYearsOfExperience("2024")}</p>
        </div>
        <div>
          <h1>TYPESCRIPT</h1>
          <p>{getYearsOfExperience("2024")}</p>
        </div>
        <div>
          <h1>NOSQL</h1>
          <p>{getYearsOfExperience("2023")}</p>
        </div>
        <div>
          <h1>SQL</h1>
          <p>{getYearsOfExperience("2024")}</p>
        </div>
        <div>
          <h1>React Native</h1>
          <p>{getYearsOfExperience("2024")}</p>
        </div>
      </section>
    </div>
  );
};

export default Skills;
