/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        salontheme: {
          "primary": "#ff0000",
          "secondary": "#202020",
          "accent": "#5d5656",
          "neutral": "#2c2c2c",
          "base-100": "#FFFFFF",
          "info": "#d4d4d4",
        }
      }
    ]
  },
  theme: {
    extend: {
      colors: {
        'bright-red': '#ff0000'
      },
      
    },
  },
  plugins: [require("daisyui")],
}
