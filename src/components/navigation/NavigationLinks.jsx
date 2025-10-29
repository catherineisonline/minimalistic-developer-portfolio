import { NavLink } from "react-router-dom";

const activeNavLink = ({ isActive }) => "gray-text navigation__link" + (isActive ? " active" : "");

export const NavigationLinks = ({ closeMenu }) => {
  return (
    <ul className="navigation__links">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => "gray-text navigation__link" + (isActive ? " main-active" : "")}
          onClick={closeMenu}>
          Main
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={activeNavLink} onClick={closeMenu}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/portfolio" className={activeNavLink} onClick={closeMenu}>
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={activeNavLink} onClick={closeMenu}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
};
