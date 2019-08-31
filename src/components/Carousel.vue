<template>
  <div v-if="collection && collection.length" class="component-carousel">
    <flickity ref="flickity" :options="flickityOptions">
      <div v-for="item in collection" :key="item.id" class="carousel-cell">
        <div class="content" :style="{ backgroundImage: `url(${item.source})` }">
          <span class="title" :title="item.title">{{ item.title }}</span>
        </div>
      </div>
    </flickity>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    collection: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      flickityOptions: {
        autoPlay: 3000,
        cellAlign: 'center',
        contain: true,
        groupCells: true,
        pauseAutoPlayOnHover: false,
        wrapAround: true
      }
    }
  },
  updated() {
    this.$refs.flickity.rerender()
  }
}
</script>

<style  lang="scss" >
.component-carousel {
  .flickity-enabled {
    max-width: 1200px;
    margin: auto;
    @media only screen and (max-width: 1024px) {
      max-width: 1080px;
    }
  }
  .flickity-prev-next-button {
    background: hsla(0, 0%, 100%, 0.3);
    @media only screen and (min-width: 1366px) {
      width: 100px;
      height: 100px;
      background: none;
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

      > .title {
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
          content: '';
          @include absolute-fulled-up;
          opacity: 0.5;
          background-color: $feature-color;
          z-index: -1;
        }
      }

      @media only screen and (max-width: 1024px) {
        width: 342px;
        height: 351px;
        margin: auto 9px;
      }
    }
  }
}
</style>
