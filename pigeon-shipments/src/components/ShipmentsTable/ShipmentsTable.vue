<template>
  <Button type="primary" @click="deselectRows">Deselect rows</Button>

  <Table
    style="height: 500px"
    :rowData="rowData.value"
    :columnDefs="columnDefs.value"
    :defaultColDef="defaultColDef"
    rowSelection="multiple"
    animateRows="true"
    @cell-clicked="cellWasClicked"
    @grid-ready="onGridReady"
  ></Table>
</template>

<script lang="ts" setup>
import { Table, Button } from "pigeon-components-library";
import { reactive, onMounted, ref, type Ref } from "vue";

const gridApi: Ref<any> = ref(null); // Optional - for accessing Grid's API

// Obtain API from grid's onGridReady event
const onGridReady = (params: any) => {
  gridApi.value = params.api;
};

const rowData = reactive({ value: [] }); // Set rowData to Array of Objects, one Object per Row

// Each Column Definition results in one Column.
const columnDefs = reactive({
  value: [{ field: "make" }, { field: "model" }, { field: "price" }],
});

// DefaultColDef sets props common to all Columns
const defaultColDef = {
  sortable: true,
  filter: true,
  flex: 1,
};

// Example load data from sever
onMounted(() => {
  fetch("https://www.ag-grid.com/example-assets/row-data.json")
    .then((result) => result.json())
    .then((remoteRowData) => (rowData.value = remoteRowData));
});

const cellWasClicked = (event: any) => {
  // Example of consuming Grid Event
  console.log("cell was clicked", event);
};
const deselectRows = () => {
  gridApi.value?.deselectAll();
};
</script>

<style lang="scss" scoped></style>
