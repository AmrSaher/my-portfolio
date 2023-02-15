import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import "bootstrap-icons/font/bootstrap-icons.css";
import "@/assets/css/global.css";
import "aos/dist/aos.css";

const app = createApp(App);
app.use(store);
app.mount("#app");
