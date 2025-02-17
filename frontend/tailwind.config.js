/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'diagonal-gradient': 'linear-gradient(to top right, var(--tw-gradient-stops))',
      },
      colors: {
        darkpurple: '#6e1c8a',
        bluegreen: '#075259',
        lightningblue: '#25d4e5',
      },
      fontFamily: {
        'light': ['Roboto', 'sans-serif'],
        'rift-soft': ['"rift-soft"', 'sans-serif'],
        'amplitude': ['"amplitude"', 'sans-serif'],
        'owners-text': ['"owners-text"', 'sans-serif'],
        'scrivano': ['"scrivano"', 'serif'],
        'source-sans': ['"source-sans-pro", sans-serif;"', 'sans-serif']
      },
      boxShadow: {
        inner: 'inset 0 2px 4px 0 rgba(255, 105, 135, .3)', // Custom inner glow-like shadow
      },
      keyframes: {
        pulseColorChange: {
          '0%, 100%': { transform: 'scale(1)', color: '#3490dc' }, // Blue
          '50%': { transform: 'scale(1.05)', color: '#e3342f' }, // Red
        },
      },
      animation: {
        'pulse-color-change': 'pulseColorChange 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

