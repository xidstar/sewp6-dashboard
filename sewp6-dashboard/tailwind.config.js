/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      color: {
        'black': '#000000',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'sewp-lightgray': '#F0F0F0',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
        'sewp-orange': '#FFCE34',
        'sewp-burgandy': '#730B12',
        'sewp-navy': '#2A285E',
        'sewp-yellow': '#FFEAAA',
        'sewp-turqoise': 'C8F4D0',
        'sewp-lightblue': '#EFF9FF',
        'sewp-skyblue': '#CAE1F0',
        'sewp-blue': '#007DB6',
        'sewp-darkblue': '#17639A',
        'sewp-gray': '#F8F3F0',
        'sewp-green': '#1B8D30',
      },
    },
  },
  plugins: [],
}

