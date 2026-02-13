import { projectsData } from "../data/data";
import { useLanguage } from "../context/LanguageContext";

const ProjectCard = ({ project, language }) => {
  return (
    <div className="bg-white dark:bg-[#2B2727] rounded-xl min-w-100  flex flex-col lg:flex-row gap-4 lg:gap-6 p-0 w-full shadow-[0_8px_28px_-6px_rgba(24,39,75,0.12),0_18px_88px_-4px_rgba(24,39,75,0.14)] max-w-240 mx-auto">
      
   
      <div className="w-full lg:w-90 h-90 rounded-l-xl border-r border-gray-300 overflow-hidden">
        <img
          src={project.image}
          alt={project.title[language]}
          className="w-full h-full object-cover"
        />
      </div>

     
      <div className="flex flex-col justify-between p-8 flex-1">
        <div className="flex flex-col gap-4">
          <h3 className="text-[#4338CA] dark:text-[#C1BAED] text-2xl lg:text-3xl font-bold">
            {project.title[language]}
          </h3>
          <p className="text-gray-700 dark:text-white text-sm lg:text-base leading-6">
            {project.description[language]}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.map((tech, idx) => (
            <div
              key={idx}
              className="bg-[#4731D3] text-white rounded-full px-4 py-2 text-sm font-medium"
            >
              {tech}
            </div>
          ))}
        </div>

     
        <div className="flex gap-4 mt-4 text-[#120B39] dark:text-[#CBF281] text-sm font-medium underline">
          <a href={project.viewSite}>{language === "en" ? "View Site" : "Siteyi Gör"}</a>
          <a href={project.github}>Github</a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { language } = useLanguage();

  return (
    <section className="w-full min-w-150 bg-[#CBF281] dark:bg-[#1A210B] py-24 px-6">
      <div className="max-w-240 mx-auto">

        
        <h2 className="text-[#4731D3] dark:text-[#CBF281] text-[48px] font-bold tracking-wide mb-12">
          {language === "en" ? "Projects" : "Projeler"}
        </h2>

        
        <div className="flex flex-col gap-12">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} project={project} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
