import { defineConfig } from "vite";
import reactPlugin from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import svgr from "vite-plugin-svgr";
import eslintPlugin from "vite-plugin-eslint";
import {ViteAliases} from "vite-aliases";
import {resolve} from "path";

export default defineConfig({
    plugins: [reactPlugin(), svgr({exportAsDefault: true}), cssInjectedByJsPlugin(), eslintPlugin(), ViteAliases()],
    build: {
        lib: {
            entry: resolve("src", "components"),
            formats: ["es"],
            name: "uiLib",
            fileName: "uiLib"
        }
    }
})