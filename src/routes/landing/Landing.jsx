import { AboutPreview } from "./AboutPreview";
import { HeroPreview } from "./HeroPreview";
import { PortfolioPreview } from "./PortfolioPreview";
import { ContactPreview } from "./ContactPreview";
import { Footer } from "../../components";
import { ScrollButton } from "../../components/ScrollButton";
import { useEffect } from "react";
import "./Landing.sass";

export const Landing = () => {
  useEffect(() => {
    document.title = "Sophia Martinez | Personal Portfolio";
    window.scrollTo(0, 0);
  });
  return (
    <main className="landing">
      <HeroPreview />
      <AboutPreview />
      <PortfolioPreview />
      <ContactPreview />
      <ScrollButton />
      <Footer />
    </main>
  );
};
