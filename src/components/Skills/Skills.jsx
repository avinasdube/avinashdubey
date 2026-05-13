import { skills } from "../../data/portfolioData";
import "./Skills.scss";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h1>skills</h1>
      <div className="skillCards">
        {skills.map((skill) => {
          return (
            <div className="skillCard" key={skill}>
              <p>{skill}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
