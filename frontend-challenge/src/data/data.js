
import project1Image from "../assets/app-example1.png";
import project3Image from "../assets/app-example3.png";




export const heroData = {
  en: {
    title: "I am a Frontend Developer...",
    description:
      "...who likes to craft solid and scalable frontend products with great user experiences.",
    buttons: [
      {
        label: "Github",
        url: "https://github.com/yourusername",
      },
      {
        label: "LinkedIn",
        url: "https://linkedin.com/in/yourusername",
      },
    ],
  },

  tr: {
    title: "Ben bir Frontend Geliştiricisiyim...",
    description:
      "...sağlam ve ölçeklenebilir frontend ürünleri geliştirmeyi ve harika kullanıcı deneyimleri oluşturmayı severim.",
    buttons: [
      {
        label: "Github",
        url: "https://github.com/yourusername",
      },
      {
        label: "LinkedIn",
        url: "https://linkedin.com/in/yourusername",
      },
    ],
  },
};


export const headerData = {
  menu: [
    { label: { en: "Home", tr: "Ana Sayfa" }, href: "#hero" },
    { label: { en: "Skills", tr: "Yetenekler" }, href: "#skills" },
    { label: { en: "Profile", tr: "Profil" }, href: "#profile" },
    { label: { en: "Projects", tr: "Projeler" }, href: "#projects" },
    { label: { en: "Contact", tr: "İletişim" }, href: "#footer" }
  ]
};

export const skillsData = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "React", level: "Intermediate" },
  { name: "TailwindCSS", level: "Intermediate" }
];


export const profileData = {
  title: { en: "Profile", tr: "Profil" },

  basicInfoTitle: { en: "Basic Information", tr: "Temel Bilgiler" },

  basicInfo: [
    { label: { en: "Date of Birth", tr: "Doğum Tarihi" }, value: "24.03.1996" },
    { label: { en: "City", tr: "İkamet Şehri" }, value: "Ankara" },
    {
      label: { en: "Education", tr: "Eğitim Durumu" },
      value: "Hacettepe Üniversitesi, Biyoloji Lisans, 2016",
    },
    { label: { en: "Preferred Role", tr: "Tercih Ettiği Rol" }, value: "Frontend, UI" },
  ],

  aboutTitle: { en: "About Me", tr: "Hakkımda" },

  aboutText: {
    en: `
      Hello! I am a passionate Frontend Developer with experience in building
      responsive and user-friendly web applications. I enjoy turning ideas into
      functional and visually appealing products. My goal is to create interfaces
      that provide great user experiences and scale efficiently.
    `,
    tr: `
      Merhaba! Ben, kullanıcı dostu ve responsive web uygulamaları geliştirmeyi
      seven bir Frontend Geliştiricisiyim. Fikirleri işlevsel ve görsel olarak
      etkileyici ürünlere dönüştürmekten keyif alıyorum. Amacım, kullanıcıya
      harika deneyimler sunan ve verimli bir şekilde ölçeklenebilen arayüzler
      tasarlamak.
    `,
  },
};


export const projectsData = [
  {
    title: {
      en: "Workintech",
      tr: "Workintech",
    },
    description: {
      en: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. Created with vanilla JS, SCSS, and Parcel Bundler.",
      tr: "Kullanıcıların hangi çerezleri kabul edip etmeyeceklerini seçmelerine olanak tanıyan basit, özelleştirilebilir, minimal bir cookie eklentisi. Vanilla JS, SCSS ve Parcel Bundler ile oluşturuldu.",
    },
    image: project1Image,
    techStack: ["React", "Redux", "Vercel"],
    viewSite: "#",
    github: "#",
  },
  {
    title: {
      en: "Journey",
      tr: "Journey",
    },
    description: {
      en: "An interactive web platform to track your personal growth journey with customizable dashboards and analytics.",
      tr: "Kişisel gelişim yolculuğunuzu özelleştirilebilir panolar ve analizlerle takip edebileceğiniz etkileşimli bir web platformu.",
    },
    image: project3Image,
    techStack: ["React", "Redux", "Vercel"],
    viewSite: "#",
    github: "#",
  },
];

export const footerData = {
  title: { en: "Send me a message!", tr: "Bana mesaj gönder!" },
  subtitle: {
    en: "Got a question or proposal, or just want to say hello? Go ahead.",
    tr: "Sorunuz, teklifiniz mi var ya da sadece merhaba demek mi istiyorsunuz? Buyurun."
  },
  email: "almilasucode@gmail.com",
  socials: [
    { name: "Twitter", link: "#" },
    { name: "CodePen", link: "#" },
    { name: "Email", link: "mailto:almilasucode@gmail.com" },
    { name: "Instagram", link: "#" }
  ]
};
