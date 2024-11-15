import styles from "./projectmodal.module.scss";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { useLenis } from "lenis/react";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  modalContent: JSX.Element;
}

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}: Props) => {
  const lenis = useLenis();
  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }

    return () => {
      lenis?.start();
    };
  }, [isOpen, lenis]);

  const content = (
    <div className={`${styles.modal} modal`} onClick={() => setIsOpen(false)}>
      <button className={styles.closeModalBtn}>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        <img
          className={styles.modalImage}
          src={imgSrc}
          alt={`An image of the ${title} project.`}
        />
        <div className={styles.modalContent}>
          <h4>{title}</h4>
          <div className={styles.modalTech}>{tech.join(" - ")}</div>

          <div className={styles.suppliedContent}>{modalContent}</div>

          <div className={styles.modalFooter}>
            <p className={styles.linksText}>
              Project Links<span>.</span>
            </p>
            <div className={styles.links}>
              <Link target="_blank" rel="nofollow" to={code}>
                <AiFillGithub /> source code
              </Link>
              <Link target="_blank" rel="nofollow" to={projectLink}>
                <AiOutlineExport /> live project
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
};
