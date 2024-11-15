import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import styles from "./sidebarRuler.module.scss";

// Total number of lines on the side of the page
//const NUM_LINES = 100;
const MIN_LINES = 30;

const navItems = [
  { title: "home", url: "" },
  { title: "about", url: "" },
  { title: "projects", url: "" },
  { title: "experience", url: "" },
  { title: "contact", url: "" },
];

const SideNavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseY = useMotionValue(Infinity);
  const [numLines, setNumLines] = useState(0);

  const [, setSelected] = useState("");

  useEffect(() => {
    const calculateNumLines = () => {
      const lineHeight = 20; // Adjust this value based on the height of each line
      const height = window.innerHeight;
      const calculatedLines = Math.floor(height / lineHeight);
      setNumLines(Math.max(calculatedLines, MIN_LINES));
    };

    calculateNumLines();
    window.addEventListener("resize", calculateNumLines);

    return () => {
      window.removeEventListener("resize", calculateNumLines);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  const navItemPositions = navItems.map((item, index) => {
    if (index === 0) {
      return { ...item, position: 1 };
    } else if (index === navItems.length - 1) {
      return { ...item, position: numLines - 5 };
    } else {
      const totalSpace = numLines - 6; // Space between the first and last item
      const step = totalSpace / (navItems.length - 1);
      return { ...item, position: Math.floor(1 + index * step) };
    }
  });

  return (
    <motion.nav
      onMouseMove={(e) => {
        mouseY.set(e.clientY);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        mouseY.set(Infinity);
        setIsHovered(false);
      }}
      className={`${styles.sideBar} no-scrollbar`}
    >
      {Array.from(Array(numLines).keys()).map((i) => {
        const linkContent = navItemPositions.find(
          (item) => item.position === i + 1
        );

        return (
          <LinkLine
            key={i}
            title={linkContent?.title}
            isHovered={isHovered}
            mouseY={mouseY}
            href={`#${linkContent?.title == "home" ? "" : linkContent?.title}`}
            onClick={() => setSelected(`${linkContent?.title}`)}
          />
        );
      })}
    </motion.nav>
  );
};

const SPRING_OPTIONS = {
  mass: 1,
  stiffness: 200,
  damping: 15,
};

const LinkLine = ({
  mouseY,
  isHovered,
  title,

  href,
}: {
  mouseY: MotionValue;
  title: string | undefined;

  isHovered: boolean;
  href: string | undefined;
  onClick: Function | undefined;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseY, (val) => {
    const bounds = ref.current?.getBoundingClientRect();

    return val - (bounds?.y || 0) - (bounds?.height || 0) / 2;
  });

  // Styles for non-link lines
  const lineWidthRaw = useTransform(distance, [-80, 0, 80], [10, 25, 10]);
  const lineWidth = useSpring(lineWidthRaw, SPRING_OPTIONS);

  // Styles for link lines
  const linkWidth = useSpring(25, SPRING_OPTIONS);

  useEffect(() => {
    if (isHovered) {
      linkWidth.set(60);
    } else {
      linkWidth.set(20);
    }
  }, [isHovered, linkWidth]);

  if (title) {
    return (
      <motion.a href={`${href}`}>
        <motion.div
          ref={ref}
          className={styles.linkLine}
          style={{ width: linkWidth, height: 2 }}
        >
          <AnimatePresence>
            {isHovered && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.linkLineText}
              >
                {title}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.a>
    );
  } else {
    return (
      <motion.div
        key={title}
        ref={ref}
        className={styles.nonLinkLine}
        style={{ width: lineWidth, height: 2 }}
      />
    );
  }
};

export default SideNavBar;
