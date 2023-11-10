/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./resources/**/*.blade.php", "./resources/**/*.jsx"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Noto Sans", "Inter", "sans-serif"],
                serif: ["Zilla Slab Highlight", "Inter", "serif"],
            },
        },
    },
    plugins: [],
};
