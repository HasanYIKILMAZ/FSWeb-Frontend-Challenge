import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useLanguage } from "../context/LanguageContext";
import githubImg from "../assets/githubimg.png";
import linkedinImg from "../assets/linkedinimg.png";
import heroImg from "../assets/heroimg.png";
import Header from "./Header";
import { heroData } from "../data/data";

const Hero = () => {
  const { language } = useLanguage();
  const { title, description, buttons } = heroData[language];

  const buttonStyle =
    "flex items-center gap-2 px-5 py-3 bg-white dark:bg-gray-800 border border-indigo-800 dark:border-gray-600 text-indigo-800 dark:text-white font-medium text-lg rounded-md hover:bg-indigo-800 hover:text-white dark:hover:bg-gray-700 transition duration-300";

  const iconMap = {
    Github: githubImg,
    LinkedIn: linkedinImg,
  };

  useEffect(() => {
    const axiosRequest = async () => {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          heroData
        );

        toast.success("Post isteği başarıyla atıldı!", {
          position: "top-right",
          autoClose: 2000,
        });

        toast.info(JSON.stringify(response.data, null, 2), {
          position: "top-right",
          autoClose: 4000,
        });
      } catch (error) {
        console.error(error);

        toast.error("İstek gönderilemedi!", {
          position: "top-right",
          autoClose: 2000,
        });
      }
    };

    axiosRequest();
  }, []);

  return (
    <section className="relative w-full min-h-167.5 h-auto flex justify-center">
      <div className="absolute inset-0 w-3/4 bg-[#4731D3] dark:bg-[#171043]" />
      <div className="absolute right-0 top-0 h-full w-1/4 bg-[#CBF281] dark:bg-[#211F0B]" />

      <Header />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-25 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        
        <div className="max-w-xl flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[110%] text-[#CBF281] dark:text-white">
            {title}
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-white dark:text-gray-300 leading-relaxed">
            {description}
          </p>

          <div className="flex gap-3 justify-center lg:justify-start mt-4">
            {buttons.map((button, idx) => (
              <a
                key={idx}
                href={button.url}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyle}
              >
                <img
                  src={iconMap[button.label]}
                  alt={button.label}
                  className="w-5 h-5"
                />
                {button.label}
              </a>
            ))}
          </div>
        </div>

       
        <div className="w-87.5 h-80 sm:h-87.5 lg:h-93.75 rounded-[18px] shadow-[0_8px_28px_-6px_rgba(24,39,75,0.12),0_18px_88px_-4px_rgba(24,39,75,0.14)] overflow-hidden">
          <img
            src={heroImg}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
