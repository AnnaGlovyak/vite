import { defineConfig } from "vite";
import reactPlugin from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import {resolve} from "path";

export default defineConfig({
    plugins: [reactPlugin(), svgr({exportAsDefault: true})],
    build: {
        lib: {
            entry: resolve("src", "components"),
            formats: ["es"],
            name: "uiLib",
            fileName: "uiLib"
        }
    }
})