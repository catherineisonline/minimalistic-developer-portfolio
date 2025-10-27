import "./About.sass";
import { useEffect } from "react";
import { Footer } from "../../components/index.js";
import { Stack } from "./Stack";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { DownloadResume } from "./DownloadResume";
import { ScrollToTop } from "../../helpers/ScrollToTop";
import { certificationData } from "../../data/experience.js";
import { AboutMe } from "./AboutMe";

export const About = () => {
  useEffect(() => {
    document.title = "About | Sophia Martinez";
    window.scrollTo(0, 0);
  });
  return (
    <main className="about">
      <AboutMe />
      <Stack />
      <DownloadResume />
      <Experience />
      <Education />
      <section className="about__languages">
        <h2 className="title-font  pink-text h2-tag">Languages</h2>
        <section>
          <h3>English</h3>
          <p>Native or bilingual proficiency</p>
          <h3>Spanish</h3>
          <p>Bilingual proficiency</p>
          <h3>German</h3>
          <p>Elementary proficiency</p>
        </section>
      </section>
      <DownloadResume />
      <section className="about__certifications">
        <h2 className="title-font  pink-text h2-tag">Certifications</h2>
        {certificationData.map((info, index) => (
          <section key={index}>
            <h3 className="h3-tag">{info.name}</h3>
            <p>{info.source}</p>
            <p>{info.date}</p>
          </section>
        ))}
      </section>
      <ScrollToTop />
      <Footer />
    </main>
  );
};
