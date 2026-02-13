
import {  useTheme } from "../context/ThemeContext";
import {  useLanguage } from "../context/LanguageContext";



const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();



  return (
    <header className="absolute top-0 left-0 w-full h-auto z-20 flex flex-col justify-center gap-2  md:justify-around md:flex-row lg:ml-10  items-center py-4 min-w-150 mx-auto">
      
      
      <h2 className="text-[32px] font-bold text-[#CBF281] dark:text-white">
        Almila
      </h2>

      
      <div className="flex items-center justify-between gap-6">
    
        <button
          onClick={toggleLanguage}
          className="font-bold text-[15px] tracking-widest text-[#CBF281] dark:text-white hover:underline transition"
        >
          {language === "en" ? "TÜRKÇE’YE GEÇ" : "SWITCH TO ENGLISH"}
        </button>
      
      
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="relative w-15 h-6 bg-[#8F88FF] dark:bg-[#3A3A3A] rounded-full transition"
          >
            <div
              className={`absolute top-px w-4 flex  ${
                theme === "dark" ? "left-1.5" : "right-1.75"
              }`}
            > {theme === 'dark' ? '🌙' : '☀️'}
              <div className="absolute w-0.5 h-0.5 bg-[#CA4E18] top-0.5 left-2.5 rounded-full"></div>
            </div>
          </button>
          <span className="text-[15px] font-bold tracking-widest  text-[#236231] dark:text-[#4731D3] dark:text-white">
            {theme === 'light' ? "DARK MODE" : "LİGHT MODE"}
          </span>
        </div>
      </div>


    </header>
  );
};

export default Header;
