/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                outline: "#7f756e",
                "surface-container-low": "#f4f3f1",
                "on-primary-container": "#baaa9d",
                "tertiary-fixed-dim": "#c9c6c2",
                "primary-fixed-dim": "#d4c4b6",
                "on-primary": "#ffffff",
                "on-secondary-fixed": "#241a0e",
                "on-secondary-container": "#716252",
                error: "#ba1a1a",
                "on-tertiary-container": "#afada8",
                "on-background": "#1a1c1a",
                "error-container": "#ffdad6",
                surface: "#faf9f6",
                "on-secondary-fixed-variant": "#524436",
                "inverse-primary": "#d4c4b6",
                "inverse-on-surface": "#f2f1ee",
                tertiary: "#2b2b28",
                "primary-fixed": "#f1dfd1",
                "surface-container": "#efeeeb",
                background: "#faf9f6",
                "surface-bright": "#faf9f6",
                "tertiary-container": "#41413e",
                "surface-container-high": "#e9e8e5",
                "secondary-fixed-dim": "#d7c3b0",
                "secondary-fixed": "#f4dfcb",
                secondary: "#6b5c4c",
                "tertiary-fixed": "#e5e2dd",
                "on-primary-fixed-variant": "#50453b",
                "on-error-container": "#93000a",
                "on-secondary": "#ffffff",
                "on-primary-fixed": "#231a11",
                "on-surface-variant": "#4d453f",
                "on-error": "#ffffff",
                "surface-dim": "#dbdad7",
                "on-tertiary-fixed-variant": "#474743",
                "on-surface": "#1a1c1a",
                "outline-variant": "#d0c4bc",
                "on-tertiary": "#ffffff",
                "surface-variant": "#e3e2e0",
                "inverse-surface": "#2f312f",
                "primary-container": "#4a3f35",
                "on-tertiary-fixed": "#1c1c19",
                "surface-container-highest": "#e3e2e0",
                "secondary-container": "#f4dfcb",
                primary: "#332920",
                "surface-tint": "#695c51",
                "surface-container-lowest": "#ffffff",
            },

            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px",
            },

            spacing: {
                margin: "40px",
                md: "1.5rem",
                gutter: "24px",
                sm: "1rem",
                xl: "4rem",
                unit: "4px",
                max_width: "1440px",
                xs: "0.5rem",
                lg: "2.5rem",
            },

            fontFamily: {
                "headline-md": ["Inter"],
                caption: ["Inter"],
                "display-lg": ["Inter"],
                "headline-lg": ["Inter"],
                "label-md": ["Inter"],
                "body-md": ["Inter"],
                "body-lg": ["Inter"],
            },

            fontSize: {
                "headline-md": [
                    "24px",
                    { lineHeight: "1.3", fontWeight: "500" },
                ],

                caption: [
                    "12px",
                    { lineHeight: "1.4", fontWeight: "400" },
                ],

                "display-lg": [
                    "48px",
                    {
                        lineHeight: "1.1",
                        letterSpacing: "-0.02em",
                        fontWeight: "300",
                    },
                ],

                "headline-lg": [
                    "32px",
                    {
                        lineHeight: "1.2",
                        letterSpacing: "-0.01em",
                        fontWeight: "400",
                    },
                ],

                "label-md": [
                    "14px",
                    {
                        lineHeight: "1",
                        letterSpacing: "0.05em",
                        fontWeight: "600",
                    },
                ],

                "body-md": [
                    "16px",
                    { lineHeight: "1.6", fontWeight: "400" },
                ],

                "body-lg": [
                    "18px",
                    { lineHeight: "1.6", fontWeight: "400" },
                ],
            },
        },
    },
    plugins: [],
}