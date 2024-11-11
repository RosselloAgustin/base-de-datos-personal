/** @type {import('tailwindcss').Config} */
/* Cuando edites esto, tenes que cerrar y el IDE y abrirlo de nuevo para que se actualice */
export default {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend:{
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          verde0: '#d6ffc7',
          verde1: '#b1ff96',
          verde2: '#7ffd59',
          verde3: '#53f427',
          verde4: '#31db07',
          verde5: '#21af01',
          verde6: '#1a7f06',
          verde7: '#1b680c',
          verde8: '#19580f',
          verde9: '#073102',
        },
      },
  },
  plugins: [],
}