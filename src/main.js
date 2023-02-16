import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";

import "bootstrap-icons/font/bootstrap-icons.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "@/assets/css/global.css";

const app = createApp(App);
app.use(store);
app.use(VueSweetalert2);
app.mount("#app");
