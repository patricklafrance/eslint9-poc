import { defineConfig, globalIgnores } from "eslint/config";
import { coreConfig, coreGlobalIgnores } from "../core.ts";
import { jestConfig, jestGlobalIgnores } from "../jest.ts";
import { jsxAllyConfig, jsxAllyGlobalIgnores } from "../jsxAlly.ts";
import { packageJsonConfig, packageJsonGlobalIgnores } from "../packageJson.ts";
import { reactConfig, reactGlobalIgnores } from "../react.ts";
import { storybookConfig, storybookGlobalIgnores } from "../storybook.ts";
import { testingLibraryConfig, testingLibraryGlobalIgnores } from "../testingLibrary.ts";
import { typescriptConfig, typescriptGlobalIgnores } from "../typescript.ts";
import { vitestConfig, vitestGlobalIgnores } from "../vitest.ts";
import { yamlConfig, yamlGlobalIgnores } from "../yaml.ts";

//     rules: {
//         // Custom WorkLeap rules
//         "@workleap/strict-css-modules-names": "warn"
//     }

export const reactLibraryConfig = defineConfig([
    // node_modules folder is ignored by default.
    globalIgnores([
        "dist",
        ...coreGlobalIgnores,
        ...typescriptGlobalIgnores,
        ...reactGlobalIgnores,
        ...jsxAllyGlobalIgnores,
        ...jestGlobalIgnores,
        ...vitestGlobalIgnores,
        ...testingLibraryGlobalIgnores,
        ...storybookGlobalIgnores,
        ...packageJsonGlobalIgnores,
        ...yamlGlobalIgnores
    ]),
    coreConfig(),
    typescriptConfig(),
    reactConfig(),
    jsxAllyConfig(),
    jestConfig(),
    // Temporary fix until the vitest plugin support defineConfig and the types are fixed.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (vitestConfig() as any),
    testingLibraryConfig(),
    storybookConfig(),
    packageJsonConfig(),
    yamlConfig()
]);
