// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import APlayer from "@moefe/vue-aplayer";
import Card from "./components/VideoCard.vue";

Vue.use(APlayer);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App, Card },
  template: "<App/>"
});
