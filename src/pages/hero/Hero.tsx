import CustomButton from "../../components/buttons/CustomButton";
import { Reveal } from "../../components/utils/Reveal";
import styles from "./hero.module.scss";
import { TiltShineCard } from "./HoverCard";

export const Hero = () => {
  const handleResume = () => {
    document.body
      .appendChild(
        Object.assign(document.createElement("a"), {
          href: "https://drive.google.com/file/d/1uu1FyTIggyMg6DfHfVuK11I3bbF06c40/view?usp=sharing",
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
          <h2 className={`${styles.subTitle} pb-3`}>
            I&apos;m an <span className="">aspiring </span>
            <span>Frontend Developer</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            I&apos;m exploring technologies from HTML and CSS to React Node.js
            and NextJs. I love turning creative ideas into interactive,
            user-friendly designs. Whether it&apos;s building sleek interfaces
            or solving coding challenges, I&apos;m always excited to learn and
            grow. Let&apos;s connect!
          </p>
        </Reveal>
        <div className="flex flex-col sm:flex-row justify-start items-center sm gap-6">
          <Reveal>
            <CustomButton
              text="Contact Me"
              iconType="contact"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView()
              }
            />
          </Reveal>
          <Reveal>
            <CustomButton
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
