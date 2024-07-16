# Types for xk6-yaml

Type definitions for [xk6-yaml extension](https://github.com/szkiba/xk6-yaml)

## Install

```shell
npm i @gwinkamp/types-xk6-yaml
```

## Usage

Add the following property to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    ...
    "typeRoots": [
      "node_modules/@gwinkamp/types-xk6-yaml",
      "node_modules/@types"
    ],
    ...
  }
}
```