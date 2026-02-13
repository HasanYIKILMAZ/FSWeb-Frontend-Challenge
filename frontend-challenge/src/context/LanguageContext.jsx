import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { toast } from "react-toastify";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage("language", "en");

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "en" ? "tr" : "en";

      toast.info(
        newLang === "tr"
          ? "🇹🇷 Türkçe'ye geçildi"
          : "🇬🇧 Switched to English"
      );

      return newLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};


export const useLanguage = () => useContext(LanguageContext);
