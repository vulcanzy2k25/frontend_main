/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this based on your file types
  ],
  theme: {
    extend: {
      colors:{
        title:"#FFAA00"
      },
      
      fontFamily:{
        title:["title","sans-serif"],
        syne:["syne","sans-serif"],     
        exo:["exo","sans-serif"],     
        header:["Fontdiner Swanky","sans-serif"],     
        fredoka:["Fredoka","sans-serif"],     
       },
      backgroundImage: (theme) => ({
        "home": "url('/src/assets/images/home.png')",
      }),
    },

   
  },
  plugins: [],
};
