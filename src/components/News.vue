<template>
  <div id="component-news">
    <h1>News</h1>
    <Carousel/>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
export default {
  name: "News",
  components:{
    Carousel
  }
};
</script>

<style>
</style>