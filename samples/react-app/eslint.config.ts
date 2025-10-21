import { defineWebApplicationConfig } from "@lib/eslint-shared-configs";

/*

Anyone can nest defineWebApplicationConfig with a root defineConfig
    - It's the way to go to define additional rules that are not related to any of the existing configs.
    - Add it to the docs as well

*/

// export default defineConfig([
//     defineWebApplicationConfig({
//         jsxAlly: {
//             rules: {
//                 "jsx-a11y/no-autofocus": "error"
//             }
//         }
//     })
// ]);

export default defineWebApplicationConfig({
    jsxAlly: {
        rules: {
            "jsx-a11y/no-autofocus": "error"
        }
    }
});

