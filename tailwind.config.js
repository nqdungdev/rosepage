module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#d50000", secondary: "#ff1744" },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },

      boxShadow: {
        search: "0 1px 1px rgb(0 0 0 / 8%) inset, 0 0 8px rgb(213 0 0 / 60%);",
      },
    },
  },
  plugins: [],
};
