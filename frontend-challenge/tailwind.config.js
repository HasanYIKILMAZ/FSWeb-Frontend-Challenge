export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
   extend: {
      colors: {
        primary: "#4731D3",
        secondary: "#CBF281",
        darkPrimary: "#171043",
        darkSecondary: "#211F0B",
      },
      boxShadow: {
        hero: "0 8px 28px -6px rgba(24,39,75,0.12), 0 18px 88px -4px rgba(24,39,75,0.14)",
      },
    }

  },
  plugins: [],
};
