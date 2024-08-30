/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        primarytext: "var(--primarytext)",
        secondarytext: "var(--secondarytext)",
        othertext: "var(--othertext)",
      },
      screens: {
        'xl': {'min': '1440px'},
        // => @media (min-width: 1535px) { ... }
  
        'lg': {'min': '1200px'},
        // => @media (min-width: 1279px) { ... }
  
        'md': {'min': '992px'},
        // => @media (min-width: 1023px) { ... }
  
        'sm': {'min': '768px'},
        // => @media (min-width: 767px) { ... }
  
        'xs': {'max': '320px'},
        // => @media (min-width: 639px) { ... }
      }
    },
  },
  plugins: [],
};
