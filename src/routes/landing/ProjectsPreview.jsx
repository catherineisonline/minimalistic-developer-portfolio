import ExternalLink from "../../assets/images/project-external.png";
import GithubRepo from "../../assets/images/project-source.png";
import { projectsData } from "../../data/projects";

export const ProjectsPreview = () => {
  return (
    <section className="projects-grid">
      {projectsData.map((project, index) => (
        <section key={index} className="projects-grid__project">
          <img src={project.img} alt="" aria-hidden="true" className="projects-grid__cover" />
          <section className="projects-grid__description">
            <p className="white-text p-tag">{project.description}</p>
            <section className="projects-grid__stack">
              {project.stack.map((stackName, index) => (
                <p key={index}>{stackName}</p>
              ))}
            </section>
            <section className="projects-grid__links">
              <a href={project.src} target="_blank" rel="noopener noreferrer">
                <img src={ExternalLink} alt="Link to project" />
              </a>
              <a href={project.source} target="_blank" rel="noopener noreferrer">
                <img src={GithubRepo} alt="Link to Github" />
              </a>
            </section>
          </section>
        </section>
      ))}
    </section>
  );
};
