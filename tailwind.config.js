/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    screens: {
      "2xs": "23.4375em", // ~375px
      xs: "34em", // ~512px
      sm: "50em", // ~768px
      md: "66em", // ~1024px
      lg: "74em", // ~1120px
      xl: "90em", // ~1440px
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.25rem",
      },
    },
    extend: {
      colors: {
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        "primary-light": "hsl(var(--color-primary-light) / <alpha-value>)",
        "primary-dark": "hsl(var(--color-primary-dark) / <alpha-value>)",
        "primary-darker": "hsl(var(--color-primary-darker) / <alpha-value>)",
        "primary-grayish": "hsl(var(--color-primary-grayish) / <alpha-value>)",
        "primary-grayish-light":
          "hsl(var(--color-primary-grayish-light) / <alpha-value>)",
        "primary-grayish-lighter":
          "hsl(var(--color-primary-grayish-lighter) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Space Mono, sans-serif"],
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
    }),
  ],
};
