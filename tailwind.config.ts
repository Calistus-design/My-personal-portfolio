// File: tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: { // <-- ADD THIS TYPOGRAPHY SECTION
        DEFAULT: {
          css: {
            p: {
              marginTop: '1.25em', // Adjust as needed, e.g., '1em', '1.5em'
              marginBottom: '1.25em', // Adjust as needed
              lineHeight: '1.75', // Generally, 1.7 to 1.8 is good for readability
            },
            strong: { // Makes bold text stand out more
              color: 'white',
            },
            // You can add other elements here if you want to style them
            // e.g., 'h1', 'h2', 'ul', 'ol', 'li'
          },
        },
        invert: { // Styles for prose-invert (dark mode)
          css: {
            p: {
              color: '#D1D5DB', // text-gray-300
              marginTop: '1.25em',
              marginBottom: '1.25em',
              lineHeight: '1.75',
            },
            strong: {
              color: 'white',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;