/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        cream: '#f5f1e7',
        paper: '#fffdf8',
        ink: '#1f2927',
        teal: '#12857b',
        tealDark: '#08675f',
        coral: '#f36a45',
        line: '#ddd8cd',
        warm: '#e9e2d6',
      },

      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },

      boxShadow: {
        card: '0 18px 50px rgba(31, 41, 39, 0.10)',
        soft: '0 10px 30px rgba(31, 41, 39, 0.07)',
      },
    },
  },

  plugins: [],
};
