<template>
  <div class="root-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AppRoot',
  mounted() {
    this.listenAuthStateChanged()
  },
  methods: {
    ...mapActions('AuthModule', ['listenAuthStateChanged'])
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/main.scss';
</style>
