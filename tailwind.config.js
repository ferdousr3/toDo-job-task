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
        display: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "3xl": "rgb(169 174 183 / 50%) 0px 1px 2px 0px",
        "4xl": "0 0 1px rgb(38 78 118 / 35%)",
        "5xl": "0px 6px 30px rgba(38, 78, 118, 0.1)",
        
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
          info: "rgba(255, 255, 255, 0.9)",
          success: "#f3f3f3",
          card: "#333333",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
