#!/bin/bash

echo "install required ext..."
# read from .vscode/extensions.json
# install everything inside "recommendations" array

cat .vscode/extensions.json | jq -r '.recommendations[]' | xargs -n 1 code --install-extension

# check if pnpm command exist
if ! command -v pnpm &> /dev/null
then
    echo "pnpm could not be found"
    echo "installing pnpm..."
    npm install -g pnpm
fi

echo "installing dependencies..."

# if the eslint cannot find the plugin, you must run the pnpm i -D with same arguments
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
  eslint-plugin-ava@14.0.0 \
  eslint-plugin-unicorn@47.0.0 \
  eslint-plugin-import@2.27


# restart vscode
echo "restarting vscode..."
killall -9 "Code"
