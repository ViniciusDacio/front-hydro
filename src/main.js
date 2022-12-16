import { createApp } from "vue";
import { createPinia } from "pinia";
import VueCookies from "vue-cookies";
import "flowbite";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueCookies);

app.mount("#app");
