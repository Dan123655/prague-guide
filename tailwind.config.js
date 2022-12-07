/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app.d.{js,jsx,ts,tsx}",
    ".expo/app.d.{js,jsx,ts,tsx}",
    "./screen/HomeScreen.{js,jsx,ts,tsx}",
    "./screen/Discover.{js,jsx,ts,tsx}",
    "./components/MenuContainer.{js,jsx,ts,tsx}",
    "./components/ItemCardContainer.{js,jsx,ts,tsx}",
    "./screen/Place.{js,jsx,ts,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }