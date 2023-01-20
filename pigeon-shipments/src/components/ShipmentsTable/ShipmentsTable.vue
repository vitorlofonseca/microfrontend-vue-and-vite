<template>
  <div style="height: 100%">
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
  </div>
</template>

<script lang="ts">
import ShipmentActions from "./ShipmentActions.vue";
import { Table } from "pigeon-components-library";
import { onMounted, ref } from "vue";

export default {
  components: {
    Table,
    ShipmentActions,
  },
  setup() {
    const columnDefs = [
      {
        field: "actions",
        headerName: "Actions",
        cellRenderer: "ShipmentActions",
        cellRendererParams: (params: any) => ({
          shipmentId: params?.data?.shipmentId,
        }),
        menuTabs: [],
        sortable: false,
      },
      { field: "shipmentId" },
      { field: "date" },
      { field: "exporter_name" },
      { field: "buyer_name" },
      { field: "declerant_name" },
      { field: "destination_country" },
      { field: "origin_country" },
      { field: "vehicle_country" },
      { field: "hs_code" },
      { field: "product_description" },
      { field: "unit" },
      { field: "quantity" },
      { field: "total_item_no" },
      { field: "item_row_no" },
      { field: "statistical_quantity" },
      { field: "gross_weight_kg" },
      { field: "net_weight_kg" },
      { field: "no_of_packages" },
      { field: "total_no_of_packages" },
      { field: "invoice_amount" },
      { field: "invoice_currency" },
      { field: "unit_price" },
      { field: "total_value_try" },
      { field: "total_value_usd" },
      { field: "incoterms" },
      { field: "mode_of_transport" },
      { field: "customs_office_name" },
      { field: "turkey_region" },
      { field: "port_of_loading" },
      { field: "port_name" },
      { field: "if_returned_goods" },
      { field: "with_container" },
      { field: "inspection_line_code" },
      { field: "system_control_line" },
      { field: "item_regime_name" },
      { field: "control_line" },
      { field: "chapter" },
      { field: "heading" },
      { field: "sub_heading" },
      { field: "month" },
      { field: "year" },
    ];
    const gridApi = ref();
    const columnApi = ref();
    const defaultColDef = {
      flex: 1,
      minWidth: 150,
      resizable: true,
    };
    const autoGroupColumnDef = ref();
    const groupDisplayType = ref();
    const rowData = null;

    onMounted(() => {
      autoGroupColumnDef.value = {
        minWidth: 300,
      };
      groupDisplayType.value = "multipleColumns";
    });

    const onGridReady = (params: any) => {
      gridApi.value = params.api;
      columnApi.value = params.columnApi;

      const updateData = (data: any) => params.api.setRowData(data);

      const shipmentsData = JSON.parse(
        window.sessionStorage.getItem("shipmentsData") ?? "[]"
      );

      updateData(shipmentsData);
    };

    return {
      columnDefs,
      onGridReady,
      defaultColDef,
      rowData,
      autoGroupColumnDef,
      groupDisplayType,
    };
  },
};
</script>
