import { educationData } from "../../data/experience";

export const Education = () => {
  return (
    <section className="about__education">
      <h2 className="title-font pink-text h2-tag">Education</h2>
      {educationData.map((info, index) => (
        <section key={index}>
          <h3>{info.name}</h3>
          <p>{info.status}</p>
          <p>{info.year}</p>
        </section>
      ))}
    </section>
  );
};
