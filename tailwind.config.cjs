module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "my_gray": "#4d4d4d",
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
      height: {
        "mmax": "90%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
