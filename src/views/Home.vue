<template>
  <div id="view-home">
    <MainBanner />
    <News />
    <WeAre />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import MainBanner from "@/components/MainBanner.vue";
import News from "@/components/News.vue";
import WeAre from "@/components/WeAre.vue";

export default {
  name: "Home",
  components: {
    Footer,
    MainBanner,
    News,
    WeAre
  }
};
</script>

<style lang="scss">
</style>