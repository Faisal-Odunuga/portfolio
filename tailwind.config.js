/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        "btn-hover": "background-color, color, transform",
      },
      backgroundImage: {
        text: "url('images/abs.jpg')",
      },
      colors: {
        primary: "#1454F4",
      },
    },
  },
  plugins: [],
};
