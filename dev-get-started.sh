#!/bin/bash

echo "Preparing project 🛠"

# install all project dependencies
yarn install
# install pre-commit hooks
yarn prepare