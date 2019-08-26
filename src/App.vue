<template>
  <div class="root-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AppRoot",
  mounted() {
    this.signIn();
  },
  methods: {
    ...mapActions("AuthModule", ["signIn"])
  }
};
</script>

<style lang="scss">
@import "~@/assets/style/main.scss";
</style>
