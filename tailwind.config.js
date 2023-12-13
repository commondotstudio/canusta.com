/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "1080px",
        xl: "1280px",
        xxl: "1440px",
        bs: "1920px",
        tv: "2560px",
      },
      colors: {
        dark: "#000000",
        darkGray: "#222222",
        light: "#ffffff",
        tertiary: "#666666",
        gray: "#555555",
        lightGray: "#999999",
        placeholder: "#888888",
        blue: "#4D11D5",
        darkgray: "#212121",
        fomPurple: "#834FF2",
        resourcesPurple: "#612FCB",
        resourcesBg: "#EFEAFA",
      },
      componentDefaultMaxWidth: "1800px",
      maxWidth: {
        md: "1800px",
        sm: "1000px",
      },
      margin: {
        md: "60px",
        sm: "20px",
      },
      padding: {
        md: "60px",
        sm: "20px",
      },
      gap: {
        md: "60px",
        sm: "20px",
      },
      fontSize: {
        base: "18px",
        xs: "12px",
      },
      leading: {
        xs: "12px",
      },
      transitionTimingFunction: {
        "common-matrix":
          "cubic-bezier(M0,0 C0,0 0.25,0.013 0.31,0.07 0.526,0.276 0.397,0.809 0.632,0.944 0.73,1 1,1 1,1 )",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};
