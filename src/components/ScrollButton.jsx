import { useEffect, useState } from "react";
import { Button } from "./Button";
import { ScrollToTop } from "../helpers/ScrollToTop";

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return <Button className="scroll-btn" onClick={ScrollToTop} style={{ display: visible ? "inline" : "none" }} />;
};
