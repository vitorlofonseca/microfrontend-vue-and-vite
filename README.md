# microfrontend-vue-and-vite

This is a proof of concept with Vue3, to show one of many ways to design a microfrontend. This was done using:

- Vue 3
- Vite as bundle pack tool
- [vite-plugin-federation](https://github.com/originjs/vite-plugin-federation) as a Module federation tool

In this project there are the following folders:

- `pigeon`: the host project, has the responsibility to contain and manage all the "child" projects (remotes)
- `pigeon-shipments`: one of the remote projects, it's responsible for showing the shipments the user has
- `pigeon-tracker`: another remote project, it's responsible to track the user active shipments
- `components-library`: contains custom Vue reusable components, like buttons, inputs, and tables

## This proof of concept, and ESP next steps

As you read in the article (if you don't it read yet, just click [here](linkToTheArticle)), we are studying ways we can use to implement microfrontend in one of our products, ESP. Here in this proof of concept we have three of the four pieces I talked with you. In a top-down approach, let's get Container module. Here in this project, Container module would be pigeon project, a small project that just imports the business modules and the core module. If you go to `vite.config.ts`, in the root of `pigeon` folder, you'll be able to see under `federation` function call, the remotes we will have in our platform, in ESP case the business modules we'll have in the Container.

Notice that in `package.json` inside `pigeon` folder, our container, we have the import of our core module too, the `pigeon-components-library` NPM package. With this configuration, our container wraps everything necessary to put our business modules running.

One piece that is not present in this project, is the business core module. But imagine we need a user context menu in this project, and this menu contains some actions like log out, manage permissions, and change translation, for example. This context menu could be just a component, inside the `pigeon` container, right? Yes. But we can isolate it in another module too, and this is what we decided for. Isolating these kind of components allow us to reuse them in other places than container, with other aspects. Nothing in software development is a rule, but I would say that, if something is reusable, almost for sure it's a good idea to modularize it.

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
