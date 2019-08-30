<template>
  <div class="component-main-banner">
    <Menu />
    <img class="logo" :src="logo" />
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  name: 'MainBanner',
  components: {
    Menu
  },
  props: {
    title: {
      type: String,
      default: () => ''
    },
    logo: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style lang="scss" >
.component-main-banner {
  @include display-flex(nowrap, column, center, flex-start);
  height: 100vh;

  background-size: contain;
  background-color: #f0e2e1;
  background-repeat: no-repeat;
  background-position: center 90%;
  background-image: url('/images/backgrounds/rock-paper-scissors.png');

  > .component-menu {
    position: absolute;
    top: 30px;
    right: 30px;
  }

  > .logo {
    width: 206.5px;
    height: auto;
    margin: 30px auto;
  }

  > .title {
    width: 80%;
    max-width: 650px;
    text-align: center;
  }

  @media screen and (max-width: 900px) {
    > .component-menu {
      top: 15px;
      right: 15px;
    }
    > .logo {
      margin: 70px auto 30px auto;
    }
  }
}
</style>
