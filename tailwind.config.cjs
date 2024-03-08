module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "my_gray": "#4d4d4d",
        "my_darkgray": "#292929",
        "my_softgray": "#454545",
        "my_lightgray": "#9a9a9a",
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
      height: {
        "mmax": "90%",
      },
      fontSize: {
        "3.5xl": "2.1rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
