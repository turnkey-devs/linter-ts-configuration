# How to install linter

1. install it on your VSCode:

- [Prettier Eslint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

2. Run this to install required packages on your global NPM

```shellcript
pnpm i -g @typescript-eslint/parser@5.54 \
 eslint@8.35 \
 prettier@2.5 \
 xo@0.53 \
 @typescript-eslint/eslint-plugin@5.59 \
 @typescript-eslint/parser@5.59 \
 eslint@8.40.0 \
 eslint-config-xo@0.43.1 \
 eslint-config-xo-space@0.34.0 \
 eslint-config-xo-typescript@0.57.0 \
 eslint-plugin-ava@14.0.0
```

3. Put this or append your current `.vscode/settings.json`

```jsondoc
{
 "[javascript]": {
  "editor.defaultFormatter": "rvest.vs-code-prettier-eslint",
  "editor.formatOnPaste": false,
  "editor.formatOnSave": false,
  "editor.formatOnSaveMode": "file",
  "editor.formatOnType": false,
  "editor.quickSuggestions": {
   "comments": "off",
   "other": "off",
   "strings": "off"
  },
  "editor.wordWrap": "on"
 },
 "[typescript]": {
  "editor.defaultFormatter": "rvest.vs-code-prettier-eslint",
  "editor.formatOnPaste": false, // required
  "editor.formatOnType": false, // required
  "editor.formatOnSave": true, // optional
  "editor.formatOnSaveMode": "file", // required to format on save
  "files.autoSave": "onFocusChange", // optional but recommended
  "vs-code-prettier-eslint.prettierLast": "false", // set as "true" to run 'prettier' last not first
  // "editor.defaultFormatter": "samverschueren.linter-xo",
  // "editor.formatOnPaste": false,
  // "editor.formatOnSave": true,
  // "editor.formatOnType": false,
  // "editor.quickSuggestions": {
  //  "comments": "off",
  //  "other": "off",
  //  "strings": "off"
  // },
  // "editor.wordWrap": "on"
 },
 "diffEditor.codeLens": true,
 "dotenv.enableAutocloaking": false,
 "editor.codeActionsOnSave": [
  "source.formatDocument",
  "source.fixAll.eslint"
 ],
 "editor.formatOnPaste": false, // required
 "editor.formatOnSave": true,
 "editor.formatOnSaveMode": "file", // required to format on save
 "editor.formatOnType": false, // required
 "editor.tabCompletion": "on",
 "extensions.ignoreRecommendations": false,
 "files.autoSave": "onFocusChange", // optional but recommended
 "typescript.format.insertSpaceAfterSemicolonInForStatements": false,
 "typescript.tsdk": "./node_modules/typescript/lib",
 "typescript.tsserver.log": "off",
 "typescript.tsserver.maxTsServerMemory": 2048,
 "xo.debounce": 0,
 "xo.enable": true,
 "xo.format.enable": true,
 "xo.options": {},
 "xo.overrideSeverity": "off",
 "xo.path": null,
 "xo.runtime": null,
 "xo.trace.server": "verbose"
}
```

4. Restart your VSCode
