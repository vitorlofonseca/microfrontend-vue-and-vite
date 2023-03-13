# Pigeon components Library

This is a custom components library, that is part of a proof of concept with Vue 3, that aims to show one of many ways to design a microfrontend, and at the same time use a NPM library with custom components.

The components on this library were developed reusing some technologies that already exists, like [ag-grid](https://www.ag-grid.com/) and [element-plus](https://element-plus.org/en-US/)

## Configuration

To install this package, you must run the following command:

```sh
pnpm install pigeon-components-library
```

After running the install command, you must import this library styles on your App.vue, inserting this line in some point:

```js
import "pigeon-components-library/dist/style.css";
```

## Components

### Table

To use a table, you must do basically the following

```js
<template>
    <Table
      style="width: 100%; height: 80vh"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      @grid-ready="onGridReady"
      :defaultColDef="defaultColDef"
      :autoGroupColumnDef="autoGroupColumnDef"
      :groupDisplayType="groupDisplayType"
      :showOpenedGroup="true"
      :animateRows="true"
      :rowData="rowData"
    ></Table>
</template>

<script lang="ts">
import { Table } from "pigeon-components-library";
</script>
```

All the table component props you can check on [ag-grid documentation](https://www.ag-grid.com/vue-data-grid/getting-started/)

### Button

To use a button, you must do basically the following

```js
<template>
    <Button type="primary" @click="anyFunction">Search</Button>
</template>

<script lang="ts">
import { Button } from "pigeon-components-library";
</script>
```

All the button component props you can check on [element-plus documentation](https://element-plus.org/en-US/component/button.html)

### Input text

To use an input text, you must do basically the following

```js
<template>
    <Input
        v-model="yourVariable"
        class="anyClass"
        placeholder="Any placeholder"
    ></Input>
</template>

<script lang="ts">
import { Input } from "pigeon-components-library";
</script>
```

All the input text component props you can check on [element-plus documentation](https://element-plus.org/en-US/component/input.html)
