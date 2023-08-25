/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '7xl': ['50px', { lineHeight: '70px' }]
      }
    }
  },
  plugins: []
}
