<template>
  <div class="component-news">
    <div class="bg-pattern">
      <h2 class="title">{{title}}</h2>
    </div>
    <Carousel :collection="tattoos" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Carousel from "@/components/Carousel.vue";
export default {
  name: "News",
  components: {
    Carousel
  },
  data() {
    return {
      title: "NOVIDADES"
    };
  },
  computed: mapState({
    tattoos: state => state.tattoos
  })
};
</script>

<style lang="scss" >
.component-news {
  padding: 40px 0px;

  > .bg-pattern {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    text-align: center;
    background: radial-gradient(circle at center, #888 20%, transparent 22%),
      #ffffff;
    background-size: 25px;

    > .title {
      display: inline-block;
      margin: auto;
      padding: 0px 20px;
      color: $primary-color;
      font-size: 2rem;
      background-color: #ffffff;
    }
  }
  > .component-carousel {
    margin-top: 40px;
  }
}
</style>