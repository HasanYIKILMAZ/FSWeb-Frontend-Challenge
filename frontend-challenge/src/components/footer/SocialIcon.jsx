const SocialIcon = ({ Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 border-2 border-[#4731D3] dark:border-[#8F88FF] rounded-full flex items-center justify-center text-[#4731D3] dark:text-[#8F88FF] hover:bg-[#4731D3] hover:text-white dark:hover:bg-[#8F88FF] transition-colors"
    >
      <Icon size={16} />
    </a>
  );
};

export default SocialIcon;
