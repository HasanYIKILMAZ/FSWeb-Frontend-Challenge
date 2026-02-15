import SkillCard from "./SkillCard";

const SkillGrid = ({ skills }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-10 gap-x-14 justify-items-center lg:justify-items-start">
    {skills.map((skill) => (
      <SkillCard key={skill.name} {...skill} />
    ))}
  </div>
);

export default SkillGrid;
