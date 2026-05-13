import { projects } from "../../data/portfolioData";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./ProjectsSection.scss";

const ProjectsSection = () => {
  useScrollReveal(".projectCard", 0.35);

  // Generate card color based on project index (cycles through 4 colors)
  const getCardColor = (index) => `card-${(index % 4) + 1}`;

  // Format project index with padding (01, 02, 03, etc.)
  const formatProjectIndex = (index) => String(index + 1).padStart(2, "0");

  return (
    <section className="projectsSection">
      <div className="projectsHeading">
        <h2>selected projects</h2>
        <p>products i designed and built with practical engineering focus.</p>
      </div>
      <div className="projectsGrid">
        {projects.map((project, index) => (
          <article
            className={`projectCard ${getCardColor(index)}`}
            key={project.id}
            data-project-index={index + 1}
          >
            <div className="projectAbout">
              <div className="projectMeta">
                <div className="projectIndex">{formatProjectIndex(index)}</div>
              </div>
              <div className="projectName">{project.name}</div>
              <div className="projectDescrip">{project.description}</div>
              <div className="projectStack">
                {project.stack.map((tech) => (
                  <span key={`${project.id}-${tech}`}>{tech}</span>
                ))}
              </div>
              <div className="projectActions">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  view live
                </a>
                <a href={project.codeUrl} target="_blank" rel="noreferrer">
                  view code
                </a>
              </div>
            </div>
            <div className="projectImage">
              <img
                src={project.image}
                alt={`${project.name} project preview`}
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
