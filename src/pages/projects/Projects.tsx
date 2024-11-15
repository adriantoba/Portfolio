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
    title: "Project Placeholder1",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["TECH-SAMPLE1", "TECH-SAMPLE2", "TECH-SAMPLE3", "TECH-SAMPLE4"],
    description: "A real-time lorem ipsum.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quidem
          aperiam dignissimos expedita, eaque similique! Id iure repellendus
          incidunt officia, excepturi nisi illo quibusdam tempore atque aut
          sapiente quo itaque?
        </p>
        <p></p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "Project Placeholder2",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["TECH-SAMPLE1", "TECH-SAMPLE2", "TECH-SAMPLE3", "TECH-SAMPLE4"],
    description: "A real-time lorem ipsum.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quidem
          aperiam dignissimos expedita, eaque similique! Id iure repellendus
          incidunt officia, excepturi nisi illo quibusdam tempore atque aut
          sapiente quo itaque?
        </p>
        <p></p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "Project Placeholder3",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["TECH-SAMPLE1", "TECH-SAMPLE2", "TECH-SAMPLE3", "TECH-SAMPLE4"],
    description: "A real-time lorem ipsum.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quidem
          aperiam dignissimos expedita, eaque similique! Id iure repellendus
          incidunt officia, excepturi nisi illo quibusdam tempore atque aut
          sapiente quo itaque?
        </p>
        <p></p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "Project Placeholder4",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["TECH-SAMPLE1", "TECH-SAMPLE2", "TECH-SAMPLE3", "TECH-SAMPLE4"],
    description: "A real-time lorem ipsum.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quidem
          aperiam dignissimos expedita, eaque similique! Id iure repellendus
          incidunt officia, excepturi nisi illo quibusdam tempore atque aut
          sapiente quo itaque?
        </p>
        <p></p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
];
