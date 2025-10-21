import { defineConfig, globalIgnores } from "eslint/config";
import { coreConfig, coreGlobalIgnores } from "../core.ts";
import { jestConfig, jestGlobalIgnores } from "../jest.ts";
import { packageJsonConfig, packageJsonGlobalIgnores } from "../packageJson.ts";
import { typescriptConfig, typescriptGlobalIgnores } from "../typescript.ts";
import { vitestConfig, vitestGlobalIgnores } from "../vitest.ts";
import { yamlConfig, yamlGlobalIgnores } from "../yaml.ts";

//     rules: {
//         // Custom WorkLeap rules
//         "@workleap/strict-css-modules-names": "warn"
//     }

export const typescriptLibraryConfig = defineConfig([
    // node_modules folder is ignored by default.
    globalIgnores([
        "dist",
        ...coreGlobalIgnores,
        ...typescriptGlobalIgnores,
        ...jestGlobalIgnores,
        ...vitestGlobalIgnores,
        ...packageJsonGlobalIgnores,
        ...yamlGlobalIgnores
    ]),
    coreConfig(),
    typescriptConfig(),
    jestConfig(),
    // Temporary fix until the vitest plugin support defineConfig and the types are fixed.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (vitestConfig() as any),
    packageJsonConfig(),
    yamlConfig()
]);
