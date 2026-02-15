import { useEffect } from "react";
import { useLanguage } from "../hooks/useLanguage";
import HeroHeader from "../components/hero/HeroHeader";
import HeroButton from "../components/hero/HeroButton";
import HeroImage from "../components/hero/HeroImage";
import { heroData } from "../data/data";
import githubImg from "../assets/githubimg.png";
import linkedinImg from "../assets/linkedinimg.png";
import useHeroApi from "../api/useHeroApi";

const Hero = () => {
  const { language } = useLanguage();
  const { title, description, buttons } = heroData[language];
  const { postHeroData } = useHeroApi();

  const iconMap = {
    Github: githubImg,
    LinkedIn: linkedinImg,
  };

  useEffect(() => {
    postHeroData();
  }, []);

  return (
    <section className="relative w-full min-h-167.5 flex justify-center">
      <div className="absolute inset-0 w-3/4 bg-[#4731D3] dark:bg-[#171043]" />
      <div className="absolute right-0 top-0 h-full w-1/4 bg-[#CBF281] dark:bg-[#211F0B]" />

      <HeroHeader />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        <div className="max-w-xl flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[110%] text-[#CBF281] dark:text-white">
            {title}
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-white dark:text-gray-300 leading-relaxed">
            {description}
          </p>

          <div className="flex gap-3 justify-center lg:justify-start mt-4">
            {buttons.map((button) => (
              <HeroButton
                key={button.label}
                label={button.label}
                url={button.url}
                icon={iconMap[button.label]}
              />
            ))}
          </div>
        </div>

        <HeroImage className="w-87.5 h-80 sm:h-87.5 lg:h-93.75" />

      </div>
    </section>
  );
};

export default Hero;
