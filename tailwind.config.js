/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3a333a",
        "primary-content": "#bbb1bb",
        "primary-dark": "#1f1b1f",
        "primary-light": "#554b55",

        secondary: "#3a3633",
        "secondary-content": "#bbb5b1",
        "secondary-dark": "#1f1d1b",
        "secondary-light": "#554f4b",

        background: "#1b181b",
        foreground: "#292329",
        border: "#453b45",

        copy: "#fbfbfb",
        "copy-light": "#dcd6dc",
        "copy-lighter": "#ac9fac",

        success: "#333a33",
        warning: "#3a3a33",
        error: "#3a3333",

        "success-content": "#b1bbb1",
        "warning-content": "#bbbbb1",
        "error-content": "#bbb1b1",
      },
    },
  },
  plugins: [],
};
