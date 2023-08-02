/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: "#E9F2F6",
        background: "#060C0E",
        accent: "#4E99B7",
        primary: "#00A8E8",
        secondary: "#102128",
      },
      fontSize: {
        pc: {
          title: "48px",
          h2: "32px",
          subtitle: "24px",
          logoName: "24px",
          textFont: "18px",
          subTexts: "16px",
        },
        mobile: {
          title: "32px",
          h2: "24px",
          subtitle: "20px",
          logoName: "20px",
          textFont: "16px",
          subTexts: "14px",
        },
      },
    },
  },
  plugins: [],
};
