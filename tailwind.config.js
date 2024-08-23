/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      

      colors: {
        'numid-orange': '#ed6928' ,
        'numid-yellow': '#fab613' ,
        'numid-blue-3': '#331e5f' ,
        'numid-blue-2': '#393089' ,
        'numid-blue-1': '#00b9ee' ,
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
      },
      fontSize: {
        '2xxl': '1.563rem',
        '3xxl': '1.953rem',
        '4xxl': '2.441rem',
        '5xxl': '3.052rem',
      }
    }
  },
  plugins: [],
}