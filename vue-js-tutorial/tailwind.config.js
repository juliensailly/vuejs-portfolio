/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      colors: {
        // https://coolors.co/57b8ff-e6e6e6-fbb13c-fe6847
        blue: {
          DEFAULT: '#0078cd',
          100: '#002844',
          200: '#005089',
          300: '#0078cd',
          400: '#129cff',
          500: '#57b8ff',
          600: '#78c7ff',
          700: '#9ad5ff',
          800: '#bce3ff',
          900: '#ddf1ff'
        },
        white: {
          DEFAULT: '#f5f5f5',
          100: '#313131',
          200: '#626262',
          300: '#939393',
          400: '#c4c4c4',
          500: '#f5f5f5',
          600: '#f7f7f7',
          700: '#f9f9f9',
          800: '#fbfbfb',
          900: '#fdfdfd'
        },
        yellow: {
          DEFAULT: '#fbb13c',
          100: '#3d2601',
          200: '#7a4c02',
          300: '#b77204',
          400: '#f49805',
          500: '#fbb13c',
          600: '#fcc163',
          700: '#fdd18a',
          800: '#fde0b1',
          900: '#fef0d8'
        },
        red: {
          DEFAULT: '#fe6847',
          100: '#410c00',
          200: '#821801',
          300: '#c32501',
          400: '#fe3507',
          500: '#fe6847',
          600: '#fe886d',
          700: '#fea591',
          800: '#ffc3b6',
          900: '#ffe1da'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: ['flowbite/plugin', 'tailwindcss-aria-attributes'],
  content: ['./node_modules/flowbite/**/*.js']
}
