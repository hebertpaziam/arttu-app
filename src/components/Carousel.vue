<template>
  <div class="component-carousel" v-if="tattoos && tattoos.length">
    <flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell" v-for="(tattoo, index) in tattoos" :key="index">
        <div class="content" :style="{ backgroundImage: `url(${tattoo.src})` }">
          <span class="desc" :title="tattoo.desc">{{tattoo.desc}}</span>
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
  data() {
    return {
      tattoos: [
        {
          src: "/images/tattoos/old-school.jpg",
          desc: "OLD SCHOOL"
        },
        {
          src: "/images/tattoos/blackwork.jpg",
          desc: "BLACKWORK"
        },
        {
          src: "/images/tattoos/japanese.jpg",
          desc: "JAPANESE"
        },
        {
          src: "/images/tattoos/traditional.jpg",
          desc: "TRADITIONAL"
        },
        {
          src: "/images/tattoos/wrench-and-heart.jpg",
          desc: "BLACKWORK"
        },
        {
          src: "/images/tattoos/tupac.jpg",
          desc: "HIP-HOP"
        }
      ],
      flickityOptions: {
        autoPlay: 3000,
        cellAlign: "center",
        contain: true,
        groupCells:true,
        pauseAutoPlayOnHover: false,
        wrapAround: true
      }
    };
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
      position: relative;
      display: flex;
      align-items: flex-start;
      justify-content: center;

      width: 380px;
      height: 390px;
      margin: auto 10px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      > .desc {
        position: relative;
        width: 100%;
        padding: 16px;
        color: #fff;
        font-weight: 700;
        font-size: 1.4rem;
        text-align: left;

        text-transform: uppercase;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

        opacity: 1;
        z-index: 1;

        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          opacity: 0.5;
          background-color: $feature-color;
          z-index: -1;
        }
      }
    }
  }
}
</style>