import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/js/sparkles.js";

emojiCursor();

import "./assets/main.css";
import { emojiCursor } from "./assets/js/sparkles.js";

const app = createApp(App);

app.use(router);

app.mount("#app");
