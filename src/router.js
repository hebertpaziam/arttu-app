import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Auth from "@/views/Auth";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/auth",
      name: "auth",
      component: Auth
    }
  ]
});
