/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgcolor: "#E1E5E8",
        navcolor: "#F3F6F7",
        dark: "#474C52",
        primaryButton: "#607FE8",
        back: "#005599",
        adminDash: "#474C52",
        slider: "#26282b",
        notes: "#ffdca1",
        notesBorder: "#ffd185",
      },
    },
  },
  plugins: [],
};
