import { MyLinks } from "../../components/nav/components/MyLinks";
import { SectionHeader } from "../../components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Reveal } from "../../components/utils/Reveal";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={`${styles.about}`}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hi, I&apos;m Adrian Toba, a front-end development enthusiast with
              a growing expertise in HTML, CSS, JavaScript, React, and Node.js.
              I&apos;m passionate about transforming ideas into functional,
              responsive designs and crafting intuitive, user-friendly
              applications. This portfolio showcases my journey and
              progress—feel free to explore!
              <br />
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My skill set (so far) includes front-end technologies like HTML,
              CSS, JavaScript, and React, complemented by experience with
              back-end tools such as Node.js, Firebase, and MongoDB, enabling me
              to develop full-stack applications.
            </p>
          </Reveal>

          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m eager to take on new challenges and continuously expand
              my knowledge as a developer. If you&apos;d like to collaborate or
              have any questions, don&apos;t hesitate to reach out!
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
