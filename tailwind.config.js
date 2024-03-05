/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3563E9",
        secondary: "#54A6FF",
        text: "#90A3BF",
        input: "#F6F7F9",
      },
      fontFamily: {
        font: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
