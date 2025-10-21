export { monorepoWorkspaceConfig } from "./by-project-type/monorepo-workspace.ts";
export { reactLibraryConfig } from "./by-project-type/react-library.ts";
export { typescriptLibraryConfig } from "./by-project-type/typescript-library.ts";
export { defineWebApplicationConfig } from "./by-project-type/web-application.ts";
export { coreConfig, coreGlobalIgnores } from "./core.ts";
export { jestConfig, jestGlobalIgnores } from "./jest.ts";
export { jsxAllyConfig, jsxAllyGlobalIgnores } from "./jsxAlly.ts";
export { packageJsonConfig, packageJsonGlobalIgnores } from "./packageJson.ts";
export { reactConfig, reactGlobalIgnores } from "./react.ts";
export { storybookConfig, storybookGlobalIgnores } from "./storybook.ts";
export { testingLibraryConfig, testingLibraryGlobalIgnores } from "./testingLibrary.ts";
export type { ConfigWithExtends, ExtendsElement, InfiniteArray, SimpleExtendsElement } from "./types.ts";
export { typescriptConfig, typescriptGlobalIgnores } from "./typescript.ts";
export { vitestConfig, vitestGlobalIgnores } from "./vitest.ts";
export { yamlConfig, yamlGlobalIgnores } from "./yaml.ts";

