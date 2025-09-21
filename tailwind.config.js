/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#ee4d2d",
      },
      boxShadow: {
        shadowDownload: "0 1px 1px rgba(0,0,0,.2)",
        shadowButton: "0 1px 1px 0 rgba(0,0,0,.09)",
      },
    },
  },
  plugins: [],
};
