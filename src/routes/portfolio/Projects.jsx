import ExternalLink from "../../assets/images/project-external.png";
import GithubRepo from "../../assets/images/project-source.png";
import { projectsData } from "../../data/projects";

export const Projects = () => {
  return (
    <ul className="projects-grid">
      {projectsData.map((project) => (
        <li key={project.id} className="projects-grid__project">
          <img src={project.img} alt="" aria-hidden="true" className="projects-grid__cover" />
          <div className="projects-grid__description">
            <p className="white-text p-tag">{project.description}</p>
            <div className="projects-grid__stack">
              {project.stack.map((stackName, index) => (
                <p key={index}>{stackName}</p>
              ))}
            </div>
            <div className="projects-grid__links">
              <a
                aria-label={`Live preview of ${project.name}`}
                href={project.src}
                target="_blank"
                rel="noopener noreferrer">
                <img src={ExternalLink} alt="" aria-hidden="true" />
              </a>
              <a
                aria-label={`Source code of ${project.name}`}
                href={project.source}
                target="_blank"
                rel="noopener noreferrer">
                <img src={GithubRepo} alt="" aria-hidden="true" />
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
