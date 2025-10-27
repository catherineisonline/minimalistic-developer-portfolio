import { ProjectsPreview } from "./ProjectsPreview";

export const PortfolioPreview = () => {
  return (
    <article className="landing__portfolio">
      <section className="portfolio-content">
        <h2 className="title-font pink-text h2-tag">Portfolio</h2>
        <p className="white-text p-tag">
          I've invested substantial time in a variety of projects, thoroughly enjoying the process of building things
          from the ground up. Here are a few of my cherished endeavors that encapsulate my expertise. I've tackled
          numerous minor projects from diverse courses and challenges, all aimed at mastering the fundamentals. Feel
          free to explore these on my{" "}
          <span>
            <a
              href="https://github.com/catherineisonline?tab=repositories"
              className="pink-text"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
          </span>
        </p>
      </section>
      <ProjectsPreview />
    </article>
  );
};
