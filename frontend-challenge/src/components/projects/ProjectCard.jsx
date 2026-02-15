const ProjectCard = ({ project, texts, language }) => {
  const { image, title, description, techStack, viewSite, github } = project;

  return (
    <div className="bg-white dark:bg-[#2B2727] rounded-xl flex flex-col lg:flex-row gap-6 shadow-lg overflow-hidden">

      <div className="w-full lg:w-96 h-80 overflow-hidden">
        <img
          src={image}
          alt={title[language]}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-between p-8 flex-1">

        <div className="space-y-4">
          <h3 className="text-indigo-700 dark:text-[#C1BAED] text-2xl font-bold">
            {title[language]}
          </h3>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {description[language]}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-indigo-600 text-white rounded-full px-4 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-6 mt-6 text-sm font-medium underline">
          <a href={viewSite} target="_blank" rel="noopener noreferrer">
            {texts.view}
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
