/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      // blue: '#2176AE',
      // lightBlue: '#57B8FF',
      // white: '#E6E6E6',
      // yellow: '#FBB13C',
      // red: '#FE6847'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: ['flowbite/plugin'],
  content: ['./node_modules/flowbite/**/*.js']
}
