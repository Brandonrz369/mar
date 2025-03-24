/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f4c81',
          dark: '#0d3f6c',
          light: '#2a6ca8',
        },
        secondary: {
          DEFAULT: '#f8f9fa',
          dark: '#e9ecef',
        },
        accent: {
          DEFAULT: '#ff7f50',
          dark: '#e06a42',
          light: '#ff9d7d',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/marinashipyard-scaled.jpg')",
        'service-pattern': "url('/images/bg2.jpg')",
      },
      boxShadow: {
        soft: '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};