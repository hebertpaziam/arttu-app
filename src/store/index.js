import Vue from "vue";
import Vuex from "vuex";

import userModule from "./modules/user";
import tattooModule from "./modules/tattoo";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userModule,
    tattooModule
  }
});
