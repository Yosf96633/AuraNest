/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',    // Extra small devices (phones)
        'sm': '640px',    // Small devices (landscape phones)
        'md': '768px',    // Medium devices (tablets)
        'lg': '1024px',   // Large devices (laptops)
        'xl': '1280px',   // Extra large devices (desktops)
        '2xl': '1536px',  // Very large devices (large desktops)
      },
    },
  },
  plugins: [],
}
