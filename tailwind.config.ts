import type { Config } from "tailwindcss"
import daisyui from "daisyui"

const config: Config = {
    // content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "secondary-light": "#e5f5f4",
                "secondary-light2": "rgb(240, 246, 247)",
            },
        },
    },
    plugins: [daisyui, require("tailwind-scrollbar")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#CBA65D",
                    secondary: "#238781",
                    accent: "#e3eeef",
                    neutral: "#d8e2eb",
                    "base-100": "#f5f5f5",
                    info: "#0088cc",
                    success: "#4e7d00",
                    warning: "#ffcc00",
                    error: "#ee0303",
                },
            },
        ],
    },
}
export default config
