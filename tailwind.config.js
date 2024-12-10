/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],

  theme: {
    extend: {
      screens: {
        mobile: { max: "640px" }, // Matches screens 640px and below
      },
      keyframes: {
        underline: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
      translate: {
        "8px": "8px",
        "-8px": "-8px",
      },
      boxShadow: {
        custom:
          "0px 4px 4px -4px rgba(12, 12, 13, 0.05), 0px 16px 16px -8px rgba(12, 12, 13, 0.1)",
        hover:
          "0px 4px 4px -4px rgba(12, 12, 13, 0.1), 0px 16px 16px -8px rgba(12, 12, 13, 0.2)",
        whyUsShadow:
          "var(--sds-size-depth-0) var(--sds-size-depth-025) var(--sds-size-depth-100) var(--sds-size-depth-0) rgba(108, 99, 255, 0.05)",
      },
      colors: {
        platformColorBg: "linear-gradient(90deg, #DBEAFE 0%, #EFF6FF 100%)",
        themeGradient: "linear-gradient(90deg, #3B82F6 0%, #114FD7 100%)",

        starColor:
          "linear-gradient(38.94deg, #D3A745 7.5%, #FAF49E 51.51%, #D3A745 95.53%)",
      },
    },
  },
  plugins: [],
};
