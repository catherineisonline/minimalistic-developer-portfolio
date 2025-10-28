import Linkedin from "../../assets/images/socials/linkedin-pink.svg";
import Github from "../../assets/images/socials/github-pink.svg";
import Codepen from "../../assets/images/socials/codepen-pink.svg";

export const NavigationSocials = () => {
  return (
    <ul className="navigation__socials">
      <li>
        <a
          aria-label="Visit LinkedIn"
          href="https://www.linkedin.com/in/catherinemitagvaria/"
          target="_blank"
          rel="noopener noreferrer">
          <img src={Linkedin} alt="LinkedIn profile" />
        </a>
      </li>
      <li>
        <a
          aria-label="Visit GitHub"
          href="https://github.com/catherineisonline"
          target="_blank"
          rel="noopener noreferrer">
          <img src={Github} alt="GitHub" />
        </a>
      </li>
      <li>
        <a
          aria-label="Visit Codepen"
          href="https://codepen.io/catherineisonline"
          target="_blank"
          rel="noopener noreferrer">
          <img src={Codepen} alt="Codepen" />
        </a>
      </li>
    </ul>
  );
};
