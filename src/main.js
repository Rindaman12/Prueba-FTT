import { createApp } from "vue";
import AppChoose from "./AppChoose.vue";
import "./registerServiceWorker";
import router from "./router";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import VueMobileDetection from 'vue-mobile-detection'

createApp(AppChoose)
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
  .use(VueMobileDetection)
  .mount("#app");
