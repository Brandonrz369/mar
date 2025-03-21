#!/bin/bash
mkdir -p ts-rebuild
cd ts-rebuild
echo "No" | npx create-next-app@latest . --typescript --eslint --tailwind --app --src-dir
echo "Project created successfully in ts-rebuild directory"