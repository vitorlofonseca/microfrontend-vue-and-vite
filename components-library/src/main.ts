import Button from "@/components/Button/Button.ce.vue";
import { defineCustomElement } from "@vue/runtime-dom";

const pButton = defineCustomElement(Button);
window.customElements.define(`p-button`, pButton);
