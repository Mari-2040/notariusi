import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFeatureSettings: {
        "clig-off": "'clig' off",
        "liga-off": "'liga' off",
        "clig-liga-off": "'clig' off, 'liga' off",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }: any) {
      const fontFeatureSettings = theme("fontFeatureSettings");
      const utilities = Object.entries(fontFeatureSettings).map(
        ([key, value]) => ({
          [`.${key}`]: {
            "font-feature-settings": value,
          },
        })
      );

      addUtilities(utilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
