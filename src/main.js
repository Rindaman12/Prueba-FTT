import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";

createApp(App)
  .use(
    Quasar,
    {
      config: {
        brand: {
          primary: "#94f899",
          secondary: "#82debe",
          accent: "#bfbfbf",

          dark: "#23272f",

          positive: "#21BA45",
          negative: "#C10015",
          info: "#31CCEC",
          warning: "#F2C037",
        },
      },
    },
    quasarUserOptions
  )
  .use(router)
  .mount("#app");
