import { SectionHeader } from "../../components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "To-Do1",
    position: "CEO",
    time: "2022 - Present",
    location: "Bucharest, Romania",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    tech: ["React", "CSS", "Node", "Git", "GitHub", "SMTH1", "SMTH2"],
  },
  {
    title: "To-Do2",
    position: "CEO",
    time: "2022 - Present",
    location: "Bucharest, Romania",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    tech: ["React", "CSS", "Node", "Git", "GitHub", "SMTH1", "SMTH2"],
  },
  {
    title: "To-Do3",
    position: "CEO",
    time: "2022 - Present",
    location: "Bucharest, Romania",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    tech: ["React", "CSS", "Node", "Git", "GitHub", "SMTH1", "SMTH2"],
  },
  {
    title: "To-Do4",
    position: "CEO",
    time: "2022 - Present",
    location: "Bucharest, Romania",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    tech: ["React", "CSS", "Node", "Git", "GitHub", "SMTH1", "SMTH2"],
  },
  {
    title: "To-Do5",
    position: "CEO",
    time: "2022 - Present",
    location: "Bucharest, Romania",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    tech: ["React", "CSS", "Node", "Git", "GitHub", "SMTH1", "SMTH2"],
  },
];
