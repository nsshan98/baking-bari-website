import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure your content paths are correct
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // For NextUI integration
  ],
  theme: {
    extend: {}, // Extend Tailwind defaults if necessary
  },
  darkMode: "class", // Enable dark mode with class strategy
  plugins: [nextui()], // Include NextUI Tailwind plugin
};

export default config;
