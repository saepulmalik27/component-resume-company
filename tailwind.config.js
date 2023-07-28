/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(180deg, #75F 0%, #6943FF 0.01%, #2F2CE9 100%)",
        'hero-pattern-2': "linear-gradient(180deg, #4D21C9 0%, rgba(37, 33, 201, 0.00) 100%, rgba(37, 33, 201, 0.00) 100%)",
      },
      dropShadow:{ "custome" : "0px 30px 60px 0px rgba(61, 108, 236, 0.15)"},
      fontFamily: {
        hankenGrotesk: ['Hanken Grotesk', 'sans-serif'],
      },
      colors :{
        "primary" : "#CAC9FF",
        "dark-navy" : "#303B59",
        "cus-red" : "#FF5555",
        "cus-yellow" : "#FFB21E",
        "cus-green" : "#00BB8F",
        "cus-blue" : "#1125D6",
        "very-light-blue" : "#ECF2FF"

      }
    },

  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".heading-1" : {
          fontSize : "72px",
          fontWeight : "800",
          lineHeight : "100%",
        },
        ".heading-2" : {
          fontSize : "56px",
          fontWeight : "800",
          lineHeight : "72px",
        },
        ".heading-3" : {
          fontSize : "32px",
          fontWeight : "700",
          lineHeight : "normal",
        },
        ".heading-4" : {
          fontSize : "24px",
          fontWeight : "700",
          lineHeight : "normal",
        },
        ".text-main" : {
          fontSize : "18px",
          fontWeight : "400",
          lineHeight : "normal",
        }
      })
    })
  ],
}

