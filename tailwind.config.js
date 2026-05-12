/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#FDF8FD", 
        surface: "#FDE9FB",
        surfaceLight: "#F3E3F5",
        primary: "#BD40C1", 
        accent: "#C345C8",
        text: "#522C64", 
        textSecondary: "#8E6997", 
      }
    },
  },
  plugins: [],
}
