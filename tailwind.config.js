/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    container: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },
      maxWidth: '100%',
      '@screen sm': {
        maxWidth: '540px',
      },
      '@screen md': {
        maxWidth: '720px',
      },
      '@screen lg': {
        maxWidth: '960px',
      },
      '@screen xl': {
        maxWidth: '1140px',
      },
    },
    extend: {
      fontFamily: {
        sans: ["GT-Walsheim-Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
}
