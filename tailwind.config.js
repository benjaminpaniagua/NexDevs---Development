/** @type {import('tailwindcss').Config} */
export default {
  content: ["../index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        clashDisplay: ['Clash Display', 'Arial', 'sans-serif'],
        montserrat: ['Montserrat', 'Arial', 'sans-serif'],
      },
      fontSize: {
        "fs-xlarge": "1.625rem", //26px
        "fs-large": "1.5rem", //24px
        "fs-med": "1.25rem", //20px
        "fs-normal": "1rem", //16px
        "fs-small": "0.875rem", //14px
        "fs-xsmall": "0.75rem", //12px
      },
      fontWeight: {
        thin: "100",
        extraLight: "200",
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extraBold: "800",
        black: "900",
      },
      colors: {
        //Light Mode
        "clr-white": "hsla(0, 0%, 98%, 1)",
        "clr-black": "hsla(20, 8%, 7%, 1)",
        "clr-grey": "hsla(0, 0%, 24%, 75)",
        "clr-blue": "hsla(217, 81%, 43%, 1)",
        "clr-blue-hover": "hsla(217, 79%, 31%, 1)",
      },
      gridTemplateColumns: {
        "auto-150": "repeat(auto-fit, minmax(150px, 1fr))",
        "auto-250": "repeat(auto-fit, minmax(250px, 1fr))",
        "auto-300": "repeat(auto-fit, minmax(300px, 1fr))",
        "auto-350": "repeat(auto-fit, minmax(350px, 1fr))",
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "768px" },
        sm: { max: "639px" },
        xs: { max: "479px" },

        tablet: { min: "1024px", max: "1200px" },
      },
    },
  },
  plugins: [],
};
