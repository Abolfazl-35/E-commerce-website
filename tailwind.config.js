/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "greyish":["rgb(117, 117, 117)"]
      },
      textColor:{
"greyish":["rgb(117, 117, 117)"]
      },
      fontFamily:{
"Oswald":['Oswald', 'sans-serif'],
"Roboto":["Roboto", "sans-serif"]
      },
      screens:{
"xs":"340px"
      },
      keyframes:{
        gradient:{
          "0%":{backgroundPosition:"0% 50%"},
           "100%":{backgroundPosition:"100% 50%"},
        }
      },
      animation:{
        gradient:"gradient 6s linear infinite"
      }

    },
  },
  plugins: [],
}
