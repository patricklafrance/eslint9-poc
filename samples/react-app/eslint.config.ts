import js from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
        plugins: {
            js,
        },
        extends: ["js/recommended"],
    },
]);
