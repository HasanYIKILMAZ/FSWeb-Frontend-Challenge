import jsLogo from "../assets/js-logo.jpg";
import reactLogo from "../assets/react-logo.png";
import reduxLogo from "../assets/redux-logo.png";
import nodeLogo from "../assets/node-logo.jpg";
import vsLogo from "../assets/vs-logo.png";
import figmaLogo from "../assets/figma-logo.jpg";


const SkillCard = ({ name, logo }) => (
  <div className="flex items-center  gap-5">
    <div
      className="w-30 h-30 rounded-md  bg-center bg-cover shadow-[0_8px_28px_-6px_rgba(24,39,75,0.12),0_18px_88px_-4px_rgba(24,39,75,0.14)]"
      style={{ backgroundImage: `url(${logo})` }}
    ></div>
    <span className="text-lg font-medium uppercase text-gray-500">{name}</span>
  </div>
);


const SkillGrid = ({ skills }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-10 gap-x-14 justify-items-center lg:justify-items-start">
    {skills.map((skill) => (
      <SkillCard key={skill.name} {...skill} />
    ))}
  </div>
);

const SectionTitle = ({ children }) => (
  <h2 className=" justify-center text-4xl font-bold text-indigo-700">{children}</h2>
);

const SkillsSection = () => {
  const skillsData = [
    { name: "JavaScript", logo: jsLogo },
    { name: "React", logo: reactLogo },
    { name: "Redux", logo: reduxLogo },
    { name: "Node", logo: nodeLogo },
    { name: "VS Code", logo: vsLogo },
    { name: "Figma", logo: figmaLogo },
  ];

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
