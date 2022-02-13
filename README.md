# Purpose
This is a template for Next TypeScript projects.

# Get started (dev) ⌨️
Execute the `dev-get-started.sh` script in project root, and it should set you up with a reasonable configuration. It's assumed that you have `yarn` installed.

This template is equipped with the following:
- A template NextJS Typescript project
- git hooks, most notably a pre-commit hook which does the following before you can commit:
    - formats code (Prettier)
    - runs tests (ts-jest)
    - Builds the project (Next)
