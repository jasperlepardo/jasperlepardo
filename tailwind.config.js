/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    fontSize: {
      xxs: '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.25rem',
      '5xl': '2.5rem',
      '6xl': '3rem',
      '7xl': '4rem',      
    },
    extend: {
      fontFamily: {
        sans: ["GT-Walsheim-Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
}
