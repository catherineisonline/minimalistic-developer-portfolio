import { AboutMe } from "../about/AboutMe";
import { Stack } from "../about/Stack";

export const AboutPreview = () => {
  return (
    <section className="landing__about">
      <AboutMe />
      <Stack />
    </section>
  );
};
