import { defineConfig, globalIgnores } from "eslint/config";
import { coreConfig, coreGlobalIgnores } from "../core.ts";
import { packageJsonConfig, packageJsonGlobalIgnores } from "../packageJson.ts";
import { typescriptConfig, typescriptGlobalIgnores } from "../typescript.ts";
import { yamlConfig, yamlGlobalIgnores } from "../yaml.ts";

export const monorepoWorkspaceConfig = defineConfig([
    // node_modules folder is ignored by default.
    globalIgnores([
        "dist",
        ...coreGlobalIgnores,
        ...typescriptGlobalIgnores,
        ...packageJsonGlobalIgnores,
        ...yamlGlobalIgnores
    ]),
    coreConfig(),
    typescriptConfig(),
    packageJsonConfig(),
    yamlConfig(),
    {
        rules: {
            "package-json/valid-version": "off"
        }
    }
]);
