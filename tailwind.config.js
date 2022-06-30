module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        display: ["Rajdhani", "sans-serif"],
      },
      boxShadow: {
        "3xl": "rgb(169 174 183 / 50%) 0px 1px 2px 0px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        tasktheme: {
          primary: "rgb(66, 133, 244)",
          secondary: "rgb(119, 124, 130)",
          accent: "rgb(89, 89, 89)",
          neutral: "rgb(128, 134, 139)",
          info: "#ffd800",
          success: "#f3f3f3",
          bordercolor: "#e5e7eb",
          card: "#333333",
          cards: "rgba(255, 255, 255, 0.9)",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
