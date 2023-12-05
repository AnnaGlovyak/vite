import { defineConfig, splitVendorChunkPlugin } from "vite";
import reactPlugin from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import svgr from "vite-plugin-svgr";
import eslintPlugin from "vite-plugin-eslint";
import {ViteAliases} from "vite-aliases";
import {resolve} from "path";

function manualChunks(id) {
    console.log(id);
    if (id.includes("node_modules")) {
        return "vendor";
    }

    if (id.includes("components")) {
        return "components";
    }

    return "main";
}

export default defineConfig({
    plugins: [
        reactPlugin(),
        svgr({exportAsDefault: true}),
        cssInjectedByJsPlugin(),
        eslintPlugin(),
        ViteAliases(),
        // splitVendorChunkPlugin(),
    ],
    // uncomment for uiLib build
    // build: {
    //     lib: {
    //         entry: resolve("src", "components"),
    //         formats: ["es"],
    //         name: "uiLib",
    //         fileName: "uiLib"
    //     }
    // }
    build: {
        rollupOptions: {
            output: {
                manualChunks: manualChunks
            }
        }
    }
})