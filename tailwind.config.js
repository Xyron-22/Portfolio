/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      dark: "#3A98B9",
      mdDark: "#E8D5C4",
      light: "#EEEEEE",
      mdLight: "#FFF1DC",
      opaque: "rgba(0, 0, 0, 80%)",
      black: "#000000",
      gray: "#5A5A5A",
    },
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"]
      },
      backgroundImage: {
        "shape": "url('../../public/backgrounds/graph.png')",
        "shape2": "url('../../public/backgrounds/graph2.png')",
        "shape3": "url('../../public/backgrounds/graph3.png')",
      }
    },
  },
  plugins: [],
}
