import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,

  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "react/jsx-key": "off",
    },
  },

  globalIgnores([
    "dist/**",
    ".cache/**",
    "public/**",
    "node_modules/**",
    "*.esm.js",

    // Next-generated files:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
