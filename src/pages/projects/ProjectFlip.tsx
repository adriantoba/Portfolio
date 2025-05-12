import { useState } from "react";
import { ProjectModal } from "./ProjectModal";

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  key: string;
  image: string;
  title: string;
  description: string;
  subtitle?: string;
  rotate?: "x" | "y";
  tech: string[];
  modalContent: JSX.Element;
  projectLink: string;
  code: string;
}

export default function FlipCard({
  image,
  title,
  description,
  subtitle,
  rotate = "y",
  className,
  tech,
  modalContent,
  projectLink,
  code,
  ...props
}: FlipCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const rotationClass = {
    x: [
      "group-hover:[transform:rotateX(180deg)]",
      "[transform:rotateX(180deg)]",
    ],
    y: [
      "group-hover:[transform:rotateY(180deg)]",
      "[transform:rotateY(180deg)]",
    ],
  };
  const self = rotationClass[rotate];

  return (
    <div
      className={`group h-[30vh] w-[30vw] [perspective:1000px] lg:max-w-[20vw] m-4 min-w-96 min-h-96 ${className}`}
      {...props}
    >
      <div
        className={`
          relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]
          ${self[0]}`}
      >
        {/* Front */}
        <div className="absolute h-full w-full [backface-visibility:hidden]">
          <img
            src={image}
            alt="image"
            className="h-full w-full rounded-2xl object-cover shadow-md shadow-black/40"
          />
          <div className="absolute bottom-4 left-4 text-3xl font-bold text-[var(--text)] bg-[var(--background)] p-2 rounded-lg">
            {title}
          </div>
        </div>

        {/* Back */}
        <div
          className={`
            absolute h-full w-full rounded-2xl bg-zinc-900 p-4 dark:text-slate-200 text-white [backface-visibility:hidden] backdrop-blur-lg
            ${self[1]}`}
        >
          <div className="flex min-h-full flex-col gap-2">
            <h1 className="text-2xl sm:text-4xl font-bold dark:text-white">
              {subtitle}
            </h1>
            <p className="mt-1 border-t border-t-gray-200 py-4 text-xl font-medium leading-normal dark:text-gray-100">
              {description}
            </p>

            <span
              onClick={() => setIsOpen(true)}
              className="flex cursor-pointer text-[var(--brand)] hover:underline hover:scale-95 transition-all duration-300 justify-center mb-2"
            >
              Learn more
            </span>

            <p className="absolute flex flex-wrap bottom-0 gap-2 text-lg sm:text-base justify-center mb-2 text-zinc-900 dark:text-white">
              {tech.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={image}
        title={title}
        code={code}
        tech={tech}
      />
    </div>
  );
}
