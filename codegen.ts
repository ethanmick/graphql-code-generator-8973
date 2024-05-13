import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  errorsOnly: true,
  overwrite: true,
  schema: "https://graphql-pokeapi.graphcdn.app/",
  generates: {
    "graphql.ts": {
      plugins: ["typescript", "typescript-document-nodes"],
    },
  },
};

export default config;
