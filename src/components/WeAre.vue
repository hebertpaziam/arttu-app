<template>
  <div class="component-we-are">
    <div class="content">
      <h2 class="title">Estamos no Brasil e em Portugal!</h2>
      <div class="desc">Escontre sua tattoo pela cidade que deseja também :)</div>
    </div>
    <ul class="cities">
      <li>RIO DE JANEIRO</li>
      <li>AVEIRO</li>
      <li>BRAGA</li>
      <li>PORTO</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "WeAre"
};
</script>

<style  lang="scss" >
.component-we-are {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  min-height: 320px;
  padding: 150px 30px 30px 30px;
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
      font-weight: 700;
      margin: auto;
    }
    > .desc {
      font-weight: 300;
      color: #aaa;
    }
  }
  > .cities {
    list-style: none;
    width: 300px;
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

  opacity: 1;
  z-index: 1;

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