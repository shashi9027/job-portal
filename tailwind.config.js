/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#1967d2",
        "secondary": "#e2eaf8",
        "black": "#202124",
        "background": "#f5f7fc",
        "background-green": "rgba(52,168,83,.15)",
        "green": "#34a853",
        "background-orange": "rgba(249,171,0,.15)",
        "orange": "#f9ab00",
      },
    },
  },
  plugins: [],
};
