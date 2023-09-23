/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        Bigelow: ["Bigelow Rules", "cursive"],
        Manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "night-shade": "#040C18",
        "cfooter": "#031834",
        "c-blog": "#042C54",
        "text-shade": "#81AFDD",
        "subtext-shade": "#FF8A71",
        "purple-shade": "#AE67FA",
        "orange-shade": "#F49867",
      },
      boxShadow: {
        "custom-white": '4px 4px 6px #FFFFFF'
      },
    },
  },
  plugins: [],
};
