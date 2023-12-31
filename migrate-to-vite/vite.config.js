import {defineConfig}  from "vite";
import react from "@vitejs/plugin-react";
import {createHtmlPlugin} from "vite-plugin-html";

export default defineConfig({
    plugins: [
        react({
            include: "**/*.{jsx,tsx}"
        }),
        createHtmlPlugin({
            inject: {
                data: {
                    title: "My custom param"
                }
            }
        }),
    ]
})