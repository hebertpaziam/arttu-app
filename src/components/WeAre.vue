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
  name: "WeAre",
  data() {
    return {
      title: "Estamos no Brasil e em Portugal!",
      desc: "Escontre sua tattoo pela cidade que deseja também :)",
      cities: ["RIO DE JANEIRO", "AVEIRO", "BRAGA", "PORTO"]
    };
  }
};
</script>

<style lang="scss">
.component-we-are {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  min-height: 320px;
  padding: 150px 30px 30px 30px;
  opacity: 1;
  z-index: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/backgrounds/tattoo-machine.jpg");

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
        content: "";
        display: block;
        height: 20px;
        background: radial-gradient(
            circle at center,
            $feature-color 15%,
            transparent 15%
          ),
          transparent;
        background-size: 10px;
      }
    }
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.6;
    background-color: darken($primary-color-lighten, 25%);
    z-index: -1;
  }
}
</style>
