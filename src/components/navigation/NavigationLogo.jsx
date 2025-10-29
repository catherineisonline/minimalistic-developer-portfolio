import { NavLink } from "react-router-dom";
import IconBlack from "../../assets/images/icon-black.png";

export const NavigationLogo = ({ closeMenu }) => {
  return (
    <NavLink to="/" aria-label="Go to homepage" className="navigation__logo" onClick={closeMenu}>
      <img src={IconBlack} alt="" aria-hidden="true" />
    </NavLink>
  );
};
