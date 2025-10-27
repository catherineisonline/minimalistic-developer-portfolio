import Whiteham from "../../assets/images/hamburger-white.png";
import WhiteXham from "../../assets/images/x-ham-white.png";
import { NavigationHamburger } from "./NavigationHamburger";
import { NavigationLogo } from "./NavigationLogo";
import { NavigationLinks } from "./NavigationLinks";
import { NavigationSocials } from "./NavigationSocials";
import { useState } from "react";
import React from "react";
import "./Navigation.sass";

export const Navigation = () => {
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const ref = React.useRef();
  function ToggleMenu() {
    hiddenMenu
      ? setHiddenMenu(false) || (ref.current.src = WhiteXham)
      : setHiddenMenu(true) || (ref.current.src = Whiteham);
  }
  function closeMenu() {
    setHiddenMenu(true) || (ref.current.src = Whiteham);
  }
  return (
    <article className="navigation">
      <NavigationHamburger ToggleMenu={ToggleMenu} ref={ref} />
      <section className={`navigation__menu${hiddenMenu ? `` : ` active_v`}`}>
        <NavigationLogo closeMenu={closeMenu} />
        <NavigationLinks closeMenu={closeMenu} />
        <NavigationSocials />
      </section>
    </article>
  );
};
