const HeroButton = ({ label, url, icon }) => {
  const buttonStyle =
    "flex items-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 border border-indigo-800 dark:border-gray-600 text-indigo-800 dark:text-white font-medium text-lg rounded-md hover:bg-indigo-800 hover:text-white dark:hover:bg-gray-700 transition duration-300";

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={buttonStyle}>
      <img src={icon} alt={label} className="w-5 h-5" />
      {label}
    </a>
  );
};

export default HeroButton;
