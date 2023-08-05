/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {},
        fontFamily: {
            sans: [...defaultTheme.fontFamily.sans, "Oswald"],
            serif: [...defaultTheme.fontFamily.serif],
            mono: [...defaultTheme.fontFamily.mono],
            display: ["Calistoga"],
            bodymono: ["Source Code Pro"],
        },
    },
    plugins: [require("@tailwindcss/typography")],
};

