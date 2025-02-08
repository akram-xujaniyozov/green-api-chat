/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGreen: "#68D391",
        lightGray: "rgba(97, 94, 240, 0.2)",
      },
    },
  },
  plugins: [],
};
