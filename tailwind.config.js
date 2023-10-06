/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#FF8763",
      cardBg: "#666666",
      textImp: "#3F3A64",
      recepieBg: "#0ABF53",
      driknsBg: "#7F87DE",
      // ...
    },
    extend: {},
  },
  plugins: [],
};
