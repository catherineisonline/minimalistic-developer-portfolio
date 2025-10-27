import Linkedin from "../../assets/images/socials/linkedin-pink.svg";
import Github from "../../assets/images/socials/github-pink.svg";
import Codepen from "../../assets/images/socials/codepen-pink.svg";

export const NavigationSocials = () => {
  return (
    <section className="navigation__socials">
      <a href="https://www.linkedin.com/in/catherinemitagvaria/" target="_blank" rel="noopener noreferrer">
        <img src={Linkedin} alt="LinkedIn profile" />
      </a>
      <a href="https://github.com/catherineisonline" target="_blank" rel="noopener noreferrer">
        <img src={Github} alt="GitHub" />
      </a>
      <a href="https://codepen.io/catherineisonline" target="_blank" rel="noopener noreferrer">
        <img src={Codepen} alt="Codepen" />
      </a>
    </section>
  );
};
