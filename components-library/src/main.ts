import Button from "@/components/Button/Button.ce.vue";
import { createApp, h } from "vue";
import "element-plus/dist/index.css";

//TEMPORARY: https://github.com/vuejs/vue-web-component-wrapper/issues/93
import wrapper from "vue3-webcomponent-wrapper";

const pButton = wrapper(Button, createApp, h);

window.customElements.define(`p-button`, pButton);
