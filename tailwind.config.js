/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter',],
      },
      colors: {
        'bread': {
          '100': '#001F48',
          '200': '#949494',
        }
      },
      spacing: {
        '10sm': '10px',
        '18': '18px',
        '79': '79px',
        '241': '241px',
        '630': '630px',
      },
      maxWidth: {
        '1160': '1160px',
      },
      backgroundImage: {
        'hero-header': "url('../img/header-bg.png')",
      },
      fontSize: {
        '8sm': '28px',
      },
      rotate: {
        '18': '18deg',
      }
    },
  },
  plugins: [],
}

