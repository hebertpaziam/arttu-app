<template>
  <div id="component-main-banner">
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  name: "MainBanner",
  components: {
    Menu
  }
};
</script>

<style lang="scss" scoped>
  #component-main-banner{
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/backgrounds/rock-paper-scissors.jpg')
  }
</style>