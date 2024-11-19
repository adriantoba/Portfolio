import styles from "./stats.module.scss";
import { AiFillCode } from "react-icons/ai";
import { Reveal } from "../../components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Tech Stack</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">React</span>
            <span className="chip">Nextjs</span>
            <span className="chip">Redux</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Express</span>
            <span className="chip">REST</span>
            <span className="chip">Postgres</span>
            <span className="chip">Oracle SQL</span>
            <span className="chip">MongoDB</span>
            <span className="chip">Firebase</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Styled Componens</span>
            <span className="chip">Sass</span>
            <span className="chip">Sass</span>
            <span className="chip">Sass</span>
            <span className="chip">Flowbite</span>
            <span className="chip">shadcn/ui</span>
            <span className="chip">Bootstrap</span>
            <span className="chip">Git</span>
            <span className="chip">Linux</span>
            <span className="chip">Docker</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
