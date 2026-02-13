import { FaTwitter, FaInstagram, FaAt } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa6";
import { footerData } from "../data/data";
import { useLanguage } from "../context/LanguageContext";

const iconMap = {
  Twitter: FaTwitter,
  CodePen: FaCodepen,
  Email: FaAt,
  Instagram: FaInstagram,
};

const FooterSection = () => {
  const { language } = useLanguage(); 
  const { title, subtitle, email, socials } = footerData;

 

  
  return (
    <footer className="w-full bg-[#F9F9F9] dark:bg-[#252128] py-24 px-6">
      <div className="flex flex-col items-center gap-6 max-w-[483px] mx-auto text-center">

       
        <h2 className="text-[#4731D3] dark:text-[#8F88FF] text-[48px] font-bold leading-[72px]">
          {title[language]}
        </h2>

      
        <p className="text-[#120B39] dark:text-white text-[24px] leading-[36px]">
          {subtitle[language]}
        </p>

        
        <a
          href={`mailto:${email}`}
          onClick={() => handleClick("Email")}
          className="text-[#4731D3] dark:text-[#8F88FF] text-[20px] font-medium underline"
        >
          {email}
        </a>

        
        <div className="flex flex-row gap-6 mt-4">
          {socials.map((social, index) => {
            const Icon = iconMap[social.name];
            return (
              <a
                key={index}
                href={social.link}
                onClick={() => handleClick(social.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8.75 h-8.75 border-2 border-[#4731D3] dark:border-[#8F88FF] rounded-full flex items-center justify-center text-[#4731D3] dark:text-[#8F88FF] hover:bg-[#4731D3] hover:text-white dark:hover:bg-[#8F88FF] transition-colors"
              >
                {Icon && <Icon size={16} />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
