/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["retro", "dark"], // Adding "dark" alongside "retro"
  },
  plugins: [
    require('daisyui'),
  ],
}
