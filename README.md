# graphql-code-generator-8973

This reproduces the current bugs below in [dotansimha/graphql-code-generator] https://github.com/dotansimha/graphql-code-generator

## Demonstrates

- https://github.com/dotansimha/graphql-code-generator/issues/8973
- https://github.com/dotansimha/graphql-code-generator/issues/8477

## Usage:

```bash
git clone git@github.com:ethanmick/graphql-code-generator-8973.git
cd graphql-code-generator-8973
npm install

# Expected, no output. Actual, output.
npm run codegen
# Expected, no output. Actual, output.
npm run codegen:watch
# Expected, no output. Actual, output.
npm run codegen:flag
# Expected, no output. Actual, output.
npm run codegen:watch:flag
```

All commands have CLI `errorsOnly` set to `true`, either in the config or by the flag (or both). Therefore the only output expected are errors. This sample contains no errors, so no output is expected.

The actual result? Output.
