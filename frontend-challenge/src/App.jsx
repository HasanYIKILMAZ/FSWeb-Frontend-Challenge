
import Hero from "./sections/Hero";
import Header from "./sections/Header";
import Skills from "./sections/Skills";
import ProfileSection from "./sections/ProfileSection";
import ProjectsSection from "./sections/ProjectsSection";
import FooterSection from "./sections/FooterSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";


function App() {
  return (
  
      <LanguageProvider>
        <ThemeProvider>
          
              <div className="relative w-full min-w-150 min-h-screen bg-gray-100 dark:bg-gray-900">
                <Hero  />
                <Header />
                <ToastContainer position="top-right" autoClose={1500} />
                <Skills />
                <ProfileSection />
                <ProjectsSection />
                <FooterSection />
              </div>
          
        </ThemeProvider>
       </LanguageProvider>
    
   
    
  );
}

export default App;
