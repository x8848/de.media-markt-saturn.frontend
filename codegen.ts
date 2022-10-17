import type { CodegenConfig } from "@graphql-codegen/cli";
import { GRAPHQL_API_URL } from "./utils/constants";

const config: CodegenConfig = {
  schema: GRAPHQL_API_URL,
  generates: {
    "graphql/types.ts": {
      plugins: ["typescript"],
      config: {
        declarationKind: "interface",
        typesPrefix: "GraphQL",
      },
    },
  },
};

export default config;
