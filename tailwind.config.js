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
        }
      },
      spacing: {
        '10': '10px',
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
      }
    },
  },
  plugins: [],
}
