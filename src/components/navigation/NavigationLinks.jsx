import { NavLink } from "react-router-dom";
import { ScrollToTop } from "../../helpers/ScrollToTop";

const activeNavLink = ({ isActive }) => "gray-text navigation__link" + (isActive ? " active" : "");

export const NavigationLinks = (props) => {
  return (
    <section className="navigation__links">
      <NavLink
        to="/"
        className={({ isActive }) => "gray-text navigation__link" + (isActive ? " main-active" : "")}
        onClick={() => {
          ScrollToTop();
          props.closeMenu();
        }}>
        Main
      </NavLink>
      <NavLink
        to="/about"
        onClick={() => {
          ScrollToTop();
          props.closeMenu();
        }}
        className={activeNavLink}>
        About
      </NavLink>
      <NavLink
        to="/portfolio"
        className={activeNavLink}
        onClick={() => {
          ScrollToTop();
          props.closeMenu();
        }}>
        Portfolio
      </NavLink>
      <NavLink
        to="/contact"
        className={activeNavLink}
        onClick={() => {
          ScrollToTop();
          props.closeMenu();
        }}>
        Contact
      </NavLink>
    </section>
  );
};
