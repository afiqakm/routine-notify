/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../src/images/bg.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  daisyui: {
    themes: [
      {
        cupcake: {
          ...require("daisyui/src/colors/themes")["[data-theme=cupcake]"],
          primary: "#FEC007",
          "primary-focus": "#F4B701",
          secondary: "#E16036",
          "secondary-focus" : "#D54D20",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
