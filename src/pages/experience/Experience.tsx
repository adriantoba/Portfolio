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
    title: "Vodafone Romania",
    position: "System Integration Analyst",
    time: "2022 - Present",
    location: "Bucharest, Romania",
    description:
      "As an IT Systems Analyst at Vodafone, I have transformed business requirements into technical solutions, created integration plans and technical documentation, and optimized workflows. I designed and implemented solutions, managed errors to ensure business continuity, and supported testing by approving acceptance plans. My analytical and communication skills enable me to deliver effective, cross-functional solutions aligned with business goals.",
    tech: [
      "Informatica Powercenter",
      "ETL",
      "MS-SQL",
      "Oracle-SQL",
      "Postgres",
      "XML",
      "Linux",
      "Crontab",
    ],
  },
  {
    title: "_VOIS - Vodafone Group",
    position: "Compliance Analyst",
    time: "2019 - 2021",
    location: "Bucharest, Romania",
    description:
      "As a Compliance Monitoring Analyst, I managed the Group Gifts and Hospitality register and dashboard, ensuring accurate and up-to-date data. I supported anti-bribery projects by validating data and meeting deadlines and regularly updated SharePoint with compliance information. I provided timely reports to stakeholders and collaborated with teams to ensure adherence to regulations and company policies, leveraging my analytical and project management skills to deliver results.",
    tech: ["Microsoft Excel", "VBA", "PowerBi", "Python"],
  },
  {
    title: "_VOIS - Vodafone UK",
    position: "Fraud Prevention Analyst",
    time: "2018 - 2019",
    location: "Bucharest, Romania",
    description:
      "As a Fraud Analyst at Vodafone, I monitored client accounts to detect and prevent fraud, analyzing high-risk cases and implementing solutions to mitigate potential financial losses. I identified new fraud patterns, proposed prevention methods, and ensured compliance with procedures. I managed complex fraud-related client issues, supported internal teams, and handled complaints, maintaining Vodafone’s market reputation. Working independently, I reduced risks, safeguarded company assets, and collaborated effectively with teams to achieve company goals.",
    tech: ["Miscrosoft Access", "Citrix"],
  },
  {
    title: "Soundzone",
    position: "Volunteer - Graphics Designer",
    time: "2022 - Present",
    location: "Bucharest, Romania",
    description:
      "Contributed creative ideas for online content and event materials, producing designs for social media, flyers, posters, and newsletters using Adobe Creative Suite. Collaborated with senior team members to refine drafts, ensuring alignment with brand guidelines and project goals. Worked closely with clients, event coordinators, and writers to deliver timely design assets that matched event themes. Supported campaign execution by organizing materials and assisting with event setup and teardown.",
    tech: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign"],
  },
];
