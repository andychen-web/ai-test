/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gold: "#ffc904",
        thistle: "#ffd1f6",
        gray: "#080808",
        springgreen: "#40ff8c",
        violet: "#fe92e8",
        turquoise: "#00e4cd",
        dimgray: "#707070",
      },
      fontFamily: {
        "lithos-pro": "'Lithos Pro'",
        "adobe-gothic-std": "'Adobe Gothic Std'",
        "segoe-ui": "'Segoe UI'",
      },
      borderRadius: { "4xl": "23px", "11xl": "30px" },
    },
    fontSize: {
      "26xl": "45px",
      "3xl": "22px",
      "9xl": "28px",
      "6xl": "25px",
      "5xl": "24px",
      "11xl": "30px",
      xl: "20px",
      "2xl": "21px",
      "8xl": "27px",
      mini: "15px",
    },
  },
  corePlugins: { preflight: false },
};
