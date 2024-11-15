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
              Hey! I&apos;m Adrian Toba, and I&apos;m currently learning
              frontend development, focusing on technologies like HTML, CSS,
              JavaScript, React, and Node.js. I enjoy turning ideas into
              functional, responsive designs and building user-friendly
              applications. This portfolio is a reflection of my learning
              journey—feel free to explore! .
              <br />
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My skills include HTML, CSS, JavaScript, and React. I&apos;ve also
              gained experience with backend technologies such as Node.js,
              Firebase, and MongoDB, enabling me to create full-stack
              applications.
            </p>
          </Reveal>

          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always looking for new challenges and opportunities to
              learn and grow as a developer. If you&apos;re interested in
              working together or have any questions, please don&apos;t hesitate
              to get in touch!
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
