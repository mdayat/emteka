/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/app/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    screens: {
      desktop: "1024px",
      mediumDesktop: "1280px",
      largeDesktop: "1440px",
    },
    colors: {
      transparent: "transparent",
      inherit: "inherit",
      neutral: {
        0: "#FFFFFF",
        50: "#F2F3F5",
        100: "#EBEDEF",
        150: "#E2E5EB",
        200: "#D4D7DC",
        250: "#C4C4C4",
        300: "#4D5259",
        400: "#3D4247",
        500: "#36393F",
        600: "#2F3136",
        700: "#27292E",
        800: "#202225",
        900: "#090C18",
      },
      primary: {
        50: "#FFD452",
        100: "#FFCD38",
        200: "#FFC71F",
        300: "#FFC412",
        400: "#F2B705",
        500: "#D9A404",
        600: "#BF9104",
        700: "#A67D03",
        800: "#8C6A03",
        900: "#594302",
      },
      secondary: {
        50: "#F2F6FF",
        100: "#D9E4FF",
        200: "#BFD1FF",
        300: "#4075FF",
        400: "#3D6FF2",
        500: "#3763D9",
        600: "#3057BF",
        700: "#2A4CA6",
        800: "#24408C",
        900: "#162959",
      },
      success: {
        50: "#80FFD6",
        100: "#61F2C3",
        200: "#49F2BB",
        300: "#3DF2B7",
        400: "#2EE5A9",
        500: "#1FCC93",
        600: "#1BB280",
        700: "#17996E",
        800: "#13805C",
        900: "#0B4D37",
      },
      warning: {
        50: "#FFE27A",
        100: "#FFDD61",
        200: "#FFD747",
        300: "#FFD22E",
        400: "#E5BA1E",
        500: "#CCA61B",
        600: "#B29117",
        700: "#997C14",
        800: "#806811",
        900: "#4D3E0A",
      },
      error: {
        50: "#F07878",
        100: "#F26161",
        200: "#F24949",
        300: "#F23D3D",
        400: "#E52E2E",
        500: "#CC1F1F",
        600: "#B21B1B",
        700: "#991717",
        800: "#801313",
        900: "#5B0E0E",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      transitionDuration: {
        250: "250",
      },
      animation: {
        fadeIn: "fadeIn 250ms ease-in",
        fadeOut: "fadeOut 250ms ease-out",
        scaleIn: "scaleIn 250ms ease-in",
        scaleOut: "scaleOut 250ms ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },

        scaleIn: {
          "0%": { opacity: "0", transform: "scale3d(0.75, 0.75, 0.75)" },
          "100%": { opacity: "1", transform: "scale3d(1, 1, 1)" },
        },

        scaleOut: {
          "0%": { opacity: "1", transform: "scale3d(1, 1, 1)" },
          "100%": { opacity: "0", transform: "scale3d(0.75, 0.75, 0.75)" },
        },
      },
    },
  },
  plugins: [],
};
