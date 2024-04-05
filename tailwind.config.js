/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                text: "#e5def2",
                background: "#0d0916",
                primary: "#ac97d8",
                secondary: "#67317d",
                accent: "#bb6cc6",
            },
        },
    },
    plugins: [],
};
