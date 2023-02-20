# microfrontend-vue-and-vite

This is a proof of concept with Vue3, to show one of many ways to design a microfrontend. This was done using:

- Vue 3
- Vite as bundle pack tool
- [vite-plugin-federation](https://github.com/originjs/vite-plugin-federation) as a Module federation tool

In this project there are the following folders:

- `pigeon`: the host project, has the responsibility to contain and manage all the "child" projects (remotes)
- `pigeon-shipments`: one of the remote projects, it's responsible for showing the shipments the user has
- `pigeon-tracker`: another remote project, it's responsible to track the user active shipments

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Project Setup

```sh
pnpm install
```

## To run the project

```sh
pnpm start
```
