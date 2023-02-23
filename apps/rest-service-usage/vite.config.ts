import { checker } from "vite-plugin-checker";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
    plugins: [
        checker({
            typescript: true,
        }),
        react(),
        vanillaExtractPlugin(),
    ],
});
