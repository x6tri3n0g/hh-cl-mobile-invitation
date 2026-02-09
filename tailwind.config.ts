import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./app/**/*.{ts,tsx,css}", "./hooks/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "#f4f4f4",
                ink: "#343028",
                line: "#eae3c4",
                accent: "#D6B672",
            },
            fontFamily: {
                serif: ["var(--font-noto-serif-kr)", "serif"],
            },
        },
    },
};

export default config;
