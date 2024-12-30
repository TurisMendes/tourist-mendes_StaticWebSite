/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      primary: '#004854',
      primaryDark: '#003038',
      secondary: '#087682',
      secondaryDark: '#001A1F',
      offwhite: '#F0F4F5',
      white: '#fff',
      grey: '#888888',
      lightGrey: '#262626',
      darkGrey: '#474747',
      black: '#000',
      lightBlack: '#1E1F1F',
      darkBlack: '#141314',
      lightGreen: '#7ECEAD',
      darkGreen: '#083A25',
      lightYellow: '#F7DD97',
      darkYellow: '#473400',
      lightRed: '#E3AEAB',
      darkRed: '#72211D'
    },
    fontFamily: {
      'inter': ['Inter'],
      'montserrat': ['Montserrat'],
      'sans': ['system-ui']
    }
  },
  plugins: [],
}

