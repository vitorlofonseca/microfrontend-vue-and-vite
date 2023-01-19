<template>
  <div class="shipmentDataContainer">
    <div>shipmentId</div>
    <div>{{ props.shipment.shipmentId }}</div>
    <div>date</div>
    <div>{{ props.shipment.date }}</div>
    <div>exporter_name</div>
    <div>{{ props.shipment.exporter_name }}</div>
    <div>buyer_name</div>
    <div>{{ props.shipment.buyer_name }}</div>
    <div>declerant_name</div>
    <div>{{ props.shipment.declerant_name }}</div>
    <div>destination_country</div>
    <div>{{ props.shipment.destination_country }}</div>
    <div>origin_country</div>
    <div>{{ props.shipment.origin_country }}</div>
    <div>vehicle_country</div>
    <div>{{ props.shipment.vehicle_country }}</div>
    <div>hs_code</div>
    <div>{{ props.shipment.hs_code }}</div>
    <div>product_description</div>
    <div>{{ props.shipment.product_description }}</div>
    <div>unit</div>
    <div>{{ props.shipment.unit }}</div>
    <div>quantity</div>
    <div>{{ props.shipment.quantity }}</div>
    <div>total_item_no</div>
    <div>{{ props.shipment.total_item_no }}</div>
    <div>item_row_no</div>
    <div>{{ props.shipment.item_row_no }}</div>
    <div>statistical_quantity</div>
    <div>{{ props.shipment.statistical_quantity }}</div>
    <div>gross_weight_kg</div>
    <div>{{ props.shipment.gross_weight_kg }}</div>
    <div>net_weight_kg</div>
    <div>{{ props.shipment.net_weight_kg }}</div>
    <div>no_of_packages</div>
    <div>{{ props.shipment.no_of_packages }}</div>
    <div>total_no_of_packages</div>
    <div>{{ props.shipment.total_no_of_packages }}</div>
    <div>invoice_amount</div>
    <div>{{ props.shipment.invoice_amount }}</div>
    <div>invoice_currency</div>
    <div>{{ props.shipment.invoice_currency }}</div>
    <div>unit_price</div>
    <div>{{ props.shipment.unit_price }}</div>
    <div>total_value_try</div>
    <div>{{ props.shipment.total_value_try }}</div>
    <div>total_value_usd</div>
    <div>{{ props.shipment.total_value_usd }}</div>
    <div>incoterms</div>
    <div>{{ props.shipment.incoterms }}</div>
    <div>mode_of_transport</div>
    <div>{{ props.shipment.mode_of_transport }}</div>
    <div>customs_office_name</div>
    <div>{{ props.shipment.customs_office_name }}</div>
    <div>turkey_region</div>
    <div>{{ props.shipment.turkey_region }}</div>
    <div>port_of_loading</div>
    <div>{{ props.shipment.port_of_loading }}</div>
    <div>port_name</div>
    <div>{{ props.shipment.port_name }}</div>
    <div>if_returned_goods</div>
    <div>{{ props.shipment.if_returned_goods }}</div>
    <div>with_container</div>
    <div>{{ props.shipment.with_container }}</div>
    <div>inspection_line_code</div>
    <div>{{ props.shipment.inspection_line_code }}</div>
    <div>system_control_line</div>
    <div>{{ props.shipment.system_control_line }}</div>
    <div>item_regime_name</div>
    <div>{{ props.shipment.item_regime_name }}</div>
    <div>control_line</div>
    <div>{{ props.shipment.control_line }}</div>
    <div>chapter</div>
    <div>{{ props.shipment.chapter }}</div>
    <div>heading</div>
    <div>{{ props.shipment.heading }}</div>
    <div>sub_heading</div>
    <div>{{ props.shipment.sub_heading }}</div>
    <div>month</div>
    <div>{{ props.shipment.month }}</div>
    <div>year</div>
    <div>{{ props.shipment.year }}</div>
  </div>
</template>

<script lang="ts" setup>
import type { Shipment } from "./Shipment";

const props = defineProps<{ shipment: Shipment }>();
</script>

<style lang="scss" scoped>
.shipmentDataContainer {
  display: grid;
  grid-template-columns: auto auto;
  padding: 10px;
  column-gap: 10px;
  row-gap: 5px;
  border: 1px solid black;
}
</style>
