/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myBlue: "#1D1934", // Add your custom color value
        toggle: "#EEEEEE",
        fcolor: "#FF5B9F",
        fcolor300: "#8B8B8B",
        bgColor: "#F9F9F9",
      },
      boxShadow: {
        custom: "0px 3px 6px #00000029",
      },
      borderRadius: {
        6: "6px",
      },
      top: {
        31: "31px",
      },
    },
  },
  plugins: [],
};
