import Whiteham from "../../assets/images/hamburger-white.png";
import React from "react";

export const NavigationHamburger = React.forwardRef((props, ref) => (
  <img
    className="menu-icon"
    src={Whiteham}
    alt="Hamburger menu"
    width={50}
    height={50}
    ref={ref}
    onClick={() => {
      props.ToggleMenu();
    }}
  />
));
