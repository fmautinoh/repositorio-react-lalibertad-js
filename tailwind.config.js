/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "small-text": "var(--small-text-font-family)",
      },
      boxShadow: {
        "button-shadow": "var(--button-shadow)",
      },
    },
  },
  plugins: [],
};
