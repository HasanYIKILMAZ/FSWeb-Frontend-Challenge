import { projectsData, textMap } from "../data/data";
import { useLanguage } from "../context/LanguageContext";
import ProjectCard from "../components/projects/ProjectCard";

const ProjectsSection = () => {
  const { language } = useLanguage();
  const texts = textMap[language];

  return (
    <section className="w-full bg-[#CBF281] dark:bg-[#1A210B] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-indigo-700 dark:text-[#CBF281] text-4xl font-bold mb-12">
          {texts.title}
        </h2>
        
        <div className="flex flex-col gap-16">
          {projectsData.map((project,index) => (
            <ProjectCard
              key={index}
              project={project}
              texts={texts}
              language={language}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
