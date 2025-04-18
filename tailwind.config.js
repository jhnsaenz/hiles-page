/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'fabric-pattern': "repeating-linear-gradient(45deg, #fef3c7 0, #fef3c7 2px, #fde68a 2px, #fde68a 4px)"
      }
    },
  },
  plugins: [],
}
