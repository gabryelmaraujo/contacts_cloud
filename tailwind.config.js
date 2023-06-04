/** @type {import('tailwindcss').Config} */

// Adicionar ao content os diretórios de components, pages e etc que tenham estilização: "./src/diretorio/**/*.{js,jsx,ts,tsx}"

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/Components/**/*.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        colors: {
          'greybg': '#D9D9D9',
          'primarycolor': '#0A213E',
          'secundarycolor': '#0765D9',
        },
        width: {
          'containerw': '90%',
          'formw': '90%',
          'inputw': '90%',
        },
        height: {
          'inputh': '48px',
          'formh': '400px',
        },
      },
    },
    plugins: [],
  }

