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
            <hr className="w-[94%] mx-auto my-10"/>
            <section className="skills">
                <div>
                    <h1>React</h1>
                    <p>{getYearsOfExperience("2023")}</p>
                </div>
                <div>
                    <h1>Next.js</h1>
                    <p>{getYearsOfExperience("2024")}</p>
                </div>
                <div>
                    <h1>Express</h1>
                    <p>{getYearsOfExperience("2023")}</p>
                </div>
                <div>
                    <h1>NestJS</h1>
                    <p>{getYearsOfExperience("2024")}</p>
                </div>
                <div>
                    <h1>Typescript</h1>
                    <p>{getYearsOfExperience("2024")}</p>
                </div>
                <div>
                    <h1>MongoDB</h1>
                    <p>{getYearsOfExperience("2023")}</p>
                </div>
                <div>
                    <h1>PostgreSQL</h1>
                    <p>{getYearsOfExperience("2024")}</p>
                </div>
                {/*          It is awaiting a project */}
                {/*<div>*/}
                {/*  <h1>React Native</h1>*/}
                {/*  <p>{getYearsOfExperience("2024")}</p>*/}
                {/*</div>*/}
                {/*        <div>
          <h1>Python</h1>
          <p>{getYearsOfExperience("2025")}</p>
        </div>
        <div>
          <h1>Fast Api</h1>
          <p>{getYearsOfExperience("2025")}</p>
        </div>*/}
            </section>
        </div>
    );
};

export default Skills;
