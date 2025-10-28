import { NavLink } from "react-router-dom";
import IconBlack from "../../assets/images/icon-black.png";
import { ScrollToTop } from "../../helpers/ScrollToTop";

export const NavigationLogo = (props) => {
  return (
    <NavLink
      to="/"
      aria-label="Go to homepage"
      className="navigation__logo"
      onClick={() => {
        ScrollToTop();
        props.closeMenu();
      }}>
      <img src={IconBlack} alt="" aria-hidden="true" />
    </NavLink>
  );
};
