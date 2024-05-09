import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        "bg-sec": "#934A5F",
        cream: "#faecd8",
        main: "rgb(228, 222, 237)",
        "bg-pri": "#063925",
        "text-color": "#E5E5E5",
      },
      fontFamily: {
        'Roboto-Bold': ['Roboto-Bold'],
        'Roboto-Light': ['Roboto-Light'],
        'Roboto-Regular': ['Roboto-Regular'],
        'Roboto-Black': ['Roboto-Black'],
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
