const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        container: {
            padding: {
                DEFAULT: "1.5rem",
                lg: "3rem",
            },
            center: true,
        },

        extend: {
            fontFamily: {
                sans: ["futura", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    daisyui: {
        themes: false,
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("daisyui"),
        require("tailgrids/plugin"),
    ],
};
