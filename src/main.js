import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import {faUserCircle, faCaretDown} from "@fortawesome/free-solid-svg-icons";

library.add(faUserCircle, faCaretDown);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
