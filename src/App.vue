<template>
  <div class="app-root">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AppRoot",
  mounted() {
    this.setUser();
  },
  methods: {
    ...mapActions("AuthModule", ["setUser"])
  }
};
</script>

<style lang="scss">
@import "~@/assets/style/main.scss";
</style>
