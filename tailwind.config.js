/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        LavenderBlush: '#FFF2F2',
        LightSteelBlue: '#A9B5DF',
        MediumPurple: '#7886C7',
        MidnightBlue: '#2D336B',
      },
    },
    gridTemplateColumns: {
      '70/30': '70% 28%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
