/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: { 50:'#effaf5', 100:'#d9f5e7', 500:'#087a50', 600:'#076944', 700:'#07593b', 900:'#11362a' },
        charcoal:'#17211d', cream:'#fbfaf7', mist:'#f1f4f2'
      },
      boxShadow: { card:'0 8px 28px rgba(23,33,29,.08)' }
    }
  },
  plugins: []
}
