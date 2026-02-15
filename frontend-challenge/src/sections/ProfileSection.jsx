import React from "react";
import profileImage from "../assets/image.png";
import { profileData } from "../data/data";
import { useLanguage } from "../context/LanguageContext";

const ProfileSection = () => {
  const { language } = useLanguage();
  const {
    title,
    basicInfoTitle,
    basicInfo,
    aboutTitle,
    aboutText,
  } = profileData;

  return (
    <section className="w-full min-w-150 bg-[#4731D3] dark:bg-[#171043] py-24 px-6 flex justify-center">
      <div className="max-w-300 w-full">

        <div className="max-w-235 flex flex-col mx-auto">

          
          <h2 className="text-[#CBF281] text-[48px] font-bold tracking-wide mb-12">
            {title[language]}
          </h2>

         
          <div className="flex flex-col md:flex-row gap-10">

           
            <div className="flex flex-col gap-6 w-full max-w-75">
              <h3 className="text-white text-[30px] font-medium">
                {basicInfoTitle[language]}
              </h3>

              <div className="grid grid-cols-[140px_1fr] gap-y-3 text-sm leading-6 tracking-wide">
                {basicInfo.map((info, index) => (
                  <React.Fragment key={index}>
                    <span className="text-[#CBF281] font-semibold">
                      {info.label[language]}
                    </span>
                    <span className="text-white">
                      {info.value}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>

           
            <div className="w-75 min-w-75 h-72.5 rounded-lg shadow-[0_8px_28px_-6px_rgba(24,39,75,0.12),0_18px_88px_-4px_rgba(24,39,75,0.14)] overflow-hidden">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            
            <div className="flex flex-col gap-6 w-full max-w-75">
              <h3 className="text-white text-[30px] font-medium">
                {aboutTitle[language]}
              </h3>

              <p className="text-white text-[18px] leading-7">
                {aboutText[language]}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
