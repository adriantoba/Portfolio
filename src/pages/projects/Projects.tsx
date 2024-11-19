import { SectionHeader } from "../../components/utils/SectionHeader";
import FlipCard from "./ProjectFlip";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div
        className={`flex flex-col justify-between items-center gap-4 sm:grid sm:grid-cols-2 sm:place-items-center `}
      >
        {projects.map((project) => {
          return (
            <FlipCard
              key={project.title}
              title={project.title}
              image={project.imgSrc}
              description={project.description}
              subtitle={project.title}
              tech={project.tech}
              code={project.code}
              projectLink={project.projectLink}
              modalContent={project.modalContent}
            />
          );
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "MERN-Press",
    imgSrc: "/assets/MernPress.jpg",
    code: "https://github.com/adriantoba/Mern-Press",
    projectLink: "",
    tech: [
      "React",
      "Node.JS,",
      "Redux Toolkit",
      "REST",
      "Google Firebase",
      "MongoDB",
      "Express",
      "Tailwind",
      "Flowbite",
    ],
    description:
      "A MERN-stack Blog. Create, Read, Update, Delete posts. Manage users. Authentication and Authorization.",
    modalContent: (
      <>
        <p>
          This is a feature-rich MERN-stack Blog Platform designed to offer
          seamless content management and user interaction. It supports
          essential CRUD operations—Create, Read, Update, and Delete—for posts,
          enabling both users and admins to manage blog content efficiently.
          Authentication and authorization are handled through Google Firebase,
          ensuring a secure login process.
        </p>
        <p></p>
        <p>
          The platform includes advanced features like post review workflows,
          allowing admins to approve comments and review drafts before
          publishing. A rich text editor (CKEditor5) is integrated for crafting
          detailed, formatted blog posts effortlessly. Users can perform
          multiple actions on comments, while administrators maintain oversight
          with tools like draft editing and approval systems.
        </p>
        <p>
          To enhance user engagement, the platform features a call-to-action for
          newsletter subscriptions and a personalized dashboard where users can
          update their profile image, username, or email. With its responsive
          design and intuitive interface, this blog platform is a robust
          solution for managing and publishing high-quality content while
          maintaining complete control over user interactions.
        </p>
      </>
    ),
  },
  {
    title: "Tetris-React",
    imgSrc: "/assets/Tetris.jpg",
    code: "https://github.com/adriantoba/Tetris-React",
    projectLink: "https://adriantoba.github.io/Tetris-React/",
    tech: ["React", "TypeScript", "Tailwind"],
    description: "A simple Tetris game built with React and TypeScript.",
    modalContent: (
      <>
        <p>
          This Tetris React Game offers an engaging and interactive experience
          with key features such as a live highscore board that updates in
          real-time as users increase their score. Players can also preview the
          next upcoming piece, helping them strategize and plan their moves more
          effectively. The game follows the original Tetris scoring system,
          where points are awarded based on the number of lines cleared. This
          provides a classic, nostalgic gaming experience while incorporating
          modern React functionality for smooth performance and responsiveness.
        </p>
      </>
    ),
  },
  {
    title: "Password Generator",
    imgSrc: "/assets/PasswordGen.jpg",
    code: "https://github.com/adriantoba/password_generator",
    projectLink: "https://adriantoba.github.io/password_generator/",
    tech: ["JavaScript", "HTML5", "CSS"],
    description: "A simple Password Generator.",
    modalContent: (
      <>
        <p>
          This Password Generator allows users to create secure passwords
          tailored to their needs. Users can select the desired password length
          and choose whether to include uppercase letters, numbers, or special
          symbols. The tool generates strong, randomized passwords, ensuring a
          high level of security for any account or application.
        </p>
      </>
    ),
  },
  {
    title: "Personal Portfolio",
    imgSrc: "/assets/Portfolio.jpg",
    code: "https://github.com/adriantoba/Portfolio",
    projectLink: "https://portfolio-7755.onrender.com/",
    tech: ["React", "TypeScript", "Tailwind", "SAAS"],
    description: "A personal portfolio website.",
    modalContent: (
      <>
        <p>
          This Personal Portfolio is built using React, TypeScript, Tailwind
          CSS, and Sass, showcasing modern UI elements and a clean, responsive
          design. The portfolio highlights my skills, projects, and experience
          in a visually appealing and interactive way.
        </p>
      </>
    ),
  },
];
