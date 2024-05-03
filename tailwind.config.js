const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}"
    flowbite.content(),
  ],
  theme: {
    
    extend: {
       animation: {
      // Name of your animation (e.g., 'fade-in')
      'fade-in': 'fade-in 1s ease-in-out',
    },
    keyframes: {
      'fade-in': {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
    },
  },
  },
  plugins: [
    // require('flowbite/plugin')
    flowbite.plugin(),
  ],
}

