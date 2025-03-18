/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        LavenderBlush: {
          50: '#FDF7F7', // Sfumatura più chiara di FFF2F2
          100: '#F9D8D8',
          200: '#F4B8B8',
          300: '#F09F9F',
          400: '#EC7F7F',
          500: '#FFF2F2', // Colore di base (il tuo rosa chiaro)
          600: '#D57A7A',
          700: '#B56969',
          800: '#975858',
          900: '#7D4747', // Sfumatura più scura},
        },
        LightSteelBlue: {
          50: '#D1D9E9', // Sfumatura più chiara
          100: '#BCC6DE',
          200: '#A8B2D3',
          300: '#95A0C7',
          400: '#8290BC',
          500: '#A9B5DF', // Colore di base (il tuo LightSteelBlue)
          600: '#7F8BAF',
          700: '#67739F',
          800: '#4F5A8F',
          900: '#374676', // Sfumatura più scura
        },
        MediumPurple: {
          50: '#D4D9F0', // Sfumatura più chiara di 7886C7
          100: '#BCC2E0',
          200: '#A5AADC',
          300: '#8F93D8',
          400: '#7886C7', // Colore di base (il tuo blu chiaro)
          500: '#6879B5',
          600: '#5A6C9F',
          700: '#4B5F89',
          800: '#3D5173',
          900: '#2D4361', // Sfumatura più scura},
        },
        MidnightBlue: {
          50: '#7A8AA2', // Sfumatura più chiara di 2D336B
          100: '#6C7A8D',
          200: '#5F6C79',
          300: '#52656A',
          400: '#47565C',
          500: '#2D336B', // Colore di base (il tuo blu scuro)
          600: '#252C5D',
          700: '#1D2450',
          800: '#161D42',
          900: '#101737', // Sfumatura più scura
        },
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
