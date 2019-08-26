<template>
  <div class="component-carousel" v-if="collection && collection.length">
    <flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell" v-for="item in collection" :key="item.id">
        <div class="content" :style="{ backgroundImage: `url(${item.src})` }">
          <span class="desc" :title="item.desc">{{item.desc}}</span>
        </div>
      </div>
    </flickity>
  </div>
</template>

<script>
import Flickity from "vue-flickity";

export default {
  name: "Carousel",
  components: {
    Flickity
  },
  props: {
    collection: Array
  },
  data() {
    return {
      flickityOptions: {
        autoPlay: 3000,
        cellAlign: "center",
        contain: true,
        groupCells: true,
        pauseAutoPlayOnHover: false,
        wrapAround: true
      }
    };
  },
  updated() {
    this.$refs.flickity.rerender();
  }
};
</script>

<style  lang="scss" >
.component-carousel {
  .flickity-enabled {
    max-width: 1200px;
    margin: auto;
  }
  .flickity-prev-next-button {
    background: none;
    @media only screen and (min-width: 1200px) {
      width: 100px;
      height: 100px;
      &.next {
        transform: translate(120px, -50%);
      }
      &.previous {
        transform: translate(-120px, -50%);
      }
    }
  }
  .carousel-cell {
    > .content {
      @include display-flex(wrap, row, flex-start, center);
      width: 380px;
      height: 390px;
      margin: auto 10px;
      @include bg-cover-center;

      > .desc {
        position: relative;
        width: 100%;
        padding: 16px;
        color: #fff;
        font-weight: 700;
        font-size: 1.4rem;
        text-align: left;
        opacity: 1;
        z-index: 1;
        @include whitespace-nowrap;

        &::before {
          content: "";
          @include absolute-fulled-up;
          opacity: 0.5;
          background-color: $feature-color;
          z-index: -1;
        }
      }
    }
  }
}
</style>