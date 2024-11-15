import { DotExpandButton } from "../../components/buttons/AnimatedButton";
import { Reveal } from "../../components/utils/Reveal";
import styles from "./hero.module.scss";
import { TiltShineCard } from "./HoverCard";

export const Hero = () => {
  const handleResume = () => {
    document.body
      .appendChild(
        Object.assign(document.createElement("a"), {
          href: "/public/AT-CV.pdf",
          target: "_blank",
        })
      )
      .click();
    const anchor = document.querySelector("a");
    if (anchor) {
      document.body.removeChild(anchor);
    }
  };
  return (
    <section
      className={`section-wrapper ${styles.hero} rounded-3xl flex flex-col sm:flex-row justify-center items-center gap-8`}
    >
      <div className={`${styles.copyWrapper} p-3 rounded-2xl `}>
        <Reveal>
          <h1 className={styles.title}>
            Hi, I&apos;m Adrian<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <span>Frontend Developer</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            I&apos;m curently learing frontend technolgies, from HTML and CSS to
            React and Node JS. I&apos;m passionate about creating beautiful,
            responsive applications that provide a great user experience.
            Let&apos;s connect!
          </p>
        </Reveal>
        <div className="flex justify-end gap-2">
          <Reveal>
            <DotExpandButton
              text="Contact me"
              iconType="contact"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView()
              }
            >
              Contact me
            </DotExpandButton>
          </Reveal>
          <Reveal>
            <DotExpandButton
              text="My Resume"
              iconType="resume"
              onClick={handleResume}
            />
          </Reveal>
        </div>
      </div>
      <div className="my-auto ">
        <TiltShineCard />
      </div>
    </section>
  );
};
