const stack = [
  "HTML5",
  "CSS3",
  "Tailwind",
  "SCSS/SASS",
  "JavaScript ES6+",
  "React.js",
  "RESTful API",
  "GitHub",
  "Git",
  "Figma",
  "Visual Studio Code",
];

export const Stack = () => {
  return (
    <section>
      <h3 className="title-font white-text ">Here are a few tools & technologies I’ve been working with:</h3>
      <ol className="stack-list">
        {stack.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </section>
  );
};
