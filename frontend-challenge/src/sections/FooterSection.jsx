import { FaTwitter, FaInstagram, FaAt } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa6";
import { footerData } from "../data/data";
import { useLanguage } from "../context/LanguageContext";
import SocialIcon from "../components/footer/SocialIcon";

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
      <div className="flex flex-col items-center gap-6 max-w-120.75 mx-auto text-center">

       
        <h2 className="text-[#4731D3] dark:text-[#8F88FF] text-[48px] font-bold leading-18">
          {title[language]}
        </h2>

      
        <p className="text-[#120B39] dark:text-white text-[24px] leading-9">
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
             <SocialIcon
                key={social.name}
                Icon={Icon}
                link={social.link}
              />
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
