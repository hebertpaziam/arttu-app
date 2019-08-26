<template>
  <div class="component-main-banner">
    <Menu></Menu>
    <img class="logo" :src="logo" />
    <h1 class="title">{{title}}</h1>
  </div>
</template>

<script>
import Menu from "@/components/Menu";

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
  @include display-flex(nowrap, column, center, flex-start);
  height: 100vh;

  background-size: contain;
  background-color: #f0e2e1;
  background-repeat: no-repeat;
  background-position: center 90%;
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