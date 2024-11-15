import { Reveal } from "../../components/utils/Reveal";
import { Link } from "react-router-dom";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Have an idea to discuss? Send me an email if you want to connect!
            You can also find me on{" "}
            <Link
              to="https://www.linkedin.com/in/adrian-toba-4002a5135/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>{" "}
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link to="mailto:toba.adrian96@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>toba.adrian96@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
