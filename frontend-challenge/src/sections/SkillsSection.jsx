import SkillGrid from "../components/skills/SkillsGrid";
import { skillsData } from "../data/data";

const SectionTitle = ({ children }) => (
  <h2 className=" justify-center text-4xl font-bold text-indigo-700">{children}</h2>
);


const SkillsSection = () => {
  

  return (
    <section className="flex justify-center min-w-150 py-24 px-5">
      <div className="flex flex-col lg:flex-row gap-16 min-w-150 max-w-300 w-full justify-evenly items-start">
        <SectionTitle>Skills</SectionTitle>
        <SkillGrid skills={skillsData} />
      </div>
    </section>
  );
};

export default SkillsSection;
