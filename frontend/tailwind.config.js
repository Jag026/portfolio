/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'light': ['Roboto', 'sans-serif'],
        'rift-soft': ['"rift-soft"', 'sans-serif'],
        'amplitude': ['"amplitude"', 'sans-serif'],
        'owners-text': ['"owners-text"', 'sans-serif'],
        'scrivano': ['"scrivano"', 'serif'],
        'source-sans': ['"source-sans-pro"', 'sans-serif'],
        'erbaum': ['erbaum', 'sans-serif'],
        'forma': ['"forma-djr-micro"', 'sans-serif'],
        'pirulen': ['"pirulen"', 'sans-serif'],
        'pirulen-bold': ['"pirulen-bold"', 'sans-serif'],
        'wausau': ['"wausau"', 'sans-serif'],
        'studd': ['"stud"', 'sans-serif'],
      },
      keyframes: {
      },
    },
  },
  plugins: [],
}
