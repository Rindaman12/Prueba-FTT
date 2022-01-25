<template>
  <div v-if="!$isMobile()">
    <App />
  </div>
  <div v-else>
    <AppMobile />
  </div>
</template>
<script>
import App from "./App.vue";
import AppMobile from "./AppMobile.vue";
export default {
  components: {
    App,
    AppMobile,
  },
};
</script>
