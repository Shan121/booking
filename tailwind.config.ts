import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "banner": "url('/images/Section.png')",
        "posts-banner": "url('/images/posts-banner.png')",
        "image1": "url('/images/image1.png')",
      },
      colors: {
        primary: "#FECE01",
        secondary: "#212020",
        textNav: "#CDD3D8",
        textBlack: "#444444",
        textGray: "#7A8793",
      },
    },
  },
  plugins: [],
};
export default config;
