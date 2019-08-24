import Vue from "vue";
import Vuex from "vuex";

import AuthModule from "./modules/auth";
import TattooModule from "./modules/tattoo";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    AuthModule,
    TattooModule
  }
});
