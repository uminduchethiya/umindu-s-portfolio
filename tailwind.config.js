/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'text-light': '#000000', // text black
        'text-dark': '#0866ff', //text blue
        'button': '#345afd', // button blue
        'button-hover': '#0051D4', //button hover blue
        'bg-dark': '#FFFFFF',  // white 
        'bg-light': '#f7f7f9', // gray
        'footer':'#00839F',
        'assest-1': '#FFFFFF', // white
        'assest-2': '#000000', //black

      },
      
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        lora: ["Lora", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        slowBounce: 'slowBounce 3s ease-in-out infinite',
      },
      keyframes: {
        slowBounce: {
          '0%, 100%': { transform: 'translateY(-10px)' }, // Move higher up
          '50%': { transform: 'translateY(10px)' }, // Move further down
        },
      },
    },
  },
  plugins: [],
};
