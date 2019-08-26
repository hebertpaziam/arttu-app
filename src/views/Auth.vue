<template>
  <div class="view-auth"></div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Auth",
  mounted() {
    const code = this.$route.query.code;
    if (code) this.requestToken(code);

    this.$router.push("/");
  },
  methods: {
    ...mapActions("AuthModule", ["requestToken"])
  }
};
</script>

<style lang="scss">
</style>