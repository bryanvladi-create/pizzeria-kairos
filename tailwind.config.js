/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        condensed: ['Barlow Condensed', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#dc2626',
          'red-light': '#ef4444',
          'red-dark': '#991b1b',
        },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'bounce-gentle': 'bounce 2s ease-in-out infinite',
        'fade-down': 'fadeDown 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
      },
    },
  },
  plugins: [],
};
