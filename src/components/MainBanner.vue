<template>
  <div class="component-main-banner">
    <Menu></Menu>
    <img class="logo" :src="logo" />
    <h1 class="title">{{title}}</h1>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  name: "MainBanner",
  components: {
    Menu
  },
  data() {
    return {
      logo: "/images/logos/logo_full-black.png",
      title: "FAZER SUA TATUAGEM NUNCA FOI TÃO SIMPLES!"
    };
  }
};
</script>

<style lang="scss" >
.component-main-banner {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;

  background-color: #f0e2e1;
  background-size: contain;
  background-position: center 90%;
  background-repeat: no-repeat;
  background-image: url("/images/backgrounds/rock-paper-scissors.png");

  > .component-menu {
    position: absolute;
    top: 30px;
    right: 30px;
  }

  > .logo {
    width: 206.5px;
    height: auto;
    margin: 30px auto;

    @media screen and (max-width: 900px) {
      margin: 70px auto 30px auto;
    }
  }

  > .title {
    width: 80%;
    max-width: 650px;
    text-align: center;
  }
}
</style>