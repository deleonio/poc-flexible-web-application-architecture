import Vue from "vue";

import VueCompositionApi from "@vue/composition-api";

import App from "./components/app/component.vue";
import { APP_HTML_ELEMENT } from "./shares/constant";
import { DI } from "./shares/injector";

DI.register("Framework", {
  name: "Vue",
  version: Vue.version
});
require("./shares/register");

Vue.use(VueCompositionApi);

const htmlDivElement: HTMLDivElement | null = document.querySelector("div#app");
if (htmlDivElement instanceof HTMLDivElement) {
  htmlDivElement.appendChild(APP_HTML_ELEMENT);
  new Vue({
    el: APP_HTML_ELEMENT,
    render: (h: any) => h(App)
  });
}
