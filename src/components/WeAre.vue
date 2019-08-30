<template>
  <div class="component-we-are">
    <div class="content">
      <h2 class="title">{{ title }}</h2>
      <div class="desc">{{ desc }}</div>
    </div>
    <ul class="cities">
      <li v-for="city in cities" :key="city">{{ city }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WeAre',
  props: {
    title: {
      type: String,
      default: () => ''
    },
    desc: {
      type: String,
      default: () => ''
    },
    cities: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style  lang="scss" >
.component-we-are {
  @include display-flex(wrap, row, flex-start, space-around);
  min-height: 320px;
  padding: 150px 30px 30px 30px;
  opacity: 1;
  z-index: 1;
  @include bg-cover-center;
  background-image: url('/images/backgrounds/tattoo-machine.jpg');

  > .content,
  > .cities {
    color: #fff;
    list-style: none;
    font-size: 1.5rem;
    margin: 0px;
    padding: 0;
  }
  > .content {
    > .title {
      margin: auto;
      font-weight: 700;
    }
    > .desc {
      color: #aaa;
      font-size: 1.75rem;
      font-weight: 300;
    }
  }
  > .cities {
    list-style: none;
    width: 230px;
    font-weight: 700;
    > li {
      margin: 20px 0px;
      &:after {
        content: '';
        display: block;
        height: 20px;
        @include bg-pattern($feature-color, 15%, 15%, 10px);
      }
    }
  }

  &::before {
    content: '';
    @include absolute-fulled-up;
    opacity: 0.6;
    background-color: darken($primary-color, 25%);
    z-index: -1;
  }
}
</style>
