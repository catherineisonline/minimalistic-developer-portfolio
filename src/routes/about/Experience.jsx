import { experienceData } from "../../data/experience";

export const Experience = () => {
  return (
    <section className="about__experience">
      <h2 className="title-font pink-text h2-tag">Work Experience</h2>
      {experienceData.map((info, index) => (
        <div key={index}>
          <h3 className="h3-tag">{info.jobtitle}</h3>
          <div className="experience__company">
            <p>{info.companyname} - </p>
            <p>{info.worktype}</p>
          </div>
          <p>{info.duration}</p>
          <p>{info.location}</p>
          <ol className="experience__responsibilities ul-tag">
            {info.responsibility.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ol>
        </div>
      ))}
    </section>
  );
};
