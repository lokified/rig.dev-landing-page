/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    screens: {
      sm: "450px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      primary: "#F5F5F5",
      secondary: "#1F1F1F",
      "on-secondary": "#262626",
      text: {
        "primary": "#F5F5F5",
        "secondary": "#606060",
      },

      black: "#131313",
      white: "#ffffff",
      light: "rgba(222, 222, 222, 1)",
      "light-1": "#F1F1F1",
      "light-2": "#E7E7E7",
      "dark-light": "#262626",
      "dark-light-1": "#A1A1A1",
      "dark-light-2": "#303030",
      "dark-light-3": "#484848",
      "dark-light-4": "#7D7D7D",
      "light-green": "#C0DBC7"
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.5rem'
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
