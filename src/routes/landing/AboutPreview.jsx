import { AboutMe } from "../about/AboutMe";
import { Stack } from "../about/Stack";

export const AboutPreview = () => {
  return (
    <article className="landing__about">
      <AboutMe />
      <Stack />
    </article>
  );
};
