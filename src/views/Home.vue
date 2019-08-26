<template>
  <div class="view-home">
    <MainBanner />
    <News />
    <WeAre />
    <Footer />
    <UploadTattoo />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import MainBanner from "@/components/MainBanner";
import News from "@/components/News";
import UploadTattoo from "@/components/UploadTattoo";
import WeAre from "@/components/WeAre";

export default {
  name: "Home",
  components: {
    Footer,
    MainBanner,
    News,
    UploadTattoo,
    WeAre
  }
};
</script>

<style lang="scss">
</style>