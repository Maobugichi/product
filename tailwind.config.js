/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
     "custom-font": ["Red Hat Text", 'sans-serif']
    },
    colors: {
       "red": "hsl(14, 86%, 42%)",
       "green": "hsl(159, 69%, 38%)",
       "roseFify": "hsl(20, 50%, 98%)",
       "rose-100": "hsl(13, 31%, 94%)",
       "rose-300": "hsl(14, 25%, 72%)",
       "rose-400": "hsl(7, 20%, 60%)",
       "rose-500": "hsl(12, 20%, 44%)",
       "rose-900": "hsl(14, 65%, 9%)",
       "black": "black",
       "white": "#fff",
       "blaopa":"hsla(0, 0%, 0%,0.5)"
    },
    extend: {
      keyframes: {
        'colorChange': {
          '0%': {
            'backgroundColor': "hsl(20, 50%, 98%)",
            
          },
          '100%': {
            'backgroundColor': "hsl(14, 86%, 42%)",
            'color': "hsl(20, 50%, 98%)"
          }
        },
        
      },
      animation: {
        colorChange: 'colorChange 1s ease-out forwards',
       
      }
    },
  },
  plugins: [],
}