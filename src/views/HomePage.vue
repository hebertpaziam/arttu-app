<template>
  <div class="view-home-page">
    <MainBanner
      title="FAZER SUA TATUAGEM NUNCA FOI TÃO SIMPLES!"
      logo="/images/logos/logo_full-black.png"
    />
    <News title="NOVIDADES" />
    <WeAre
      title="Estamos no Brasil e em Portugal!"
      desc="Escontre sua tattoo pela cidade que deseja também :)"
      :cities="['RIO DE JANEIRO', 'AVEIRO', 'BRAGA', 'PORTO']"
    />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import MainBanner from '@/components/MainBanner'
import News from '@/components/News'
import WeAre from '@/components/WeAre'

export default {
  name: 'HomePage',
  components: {
    Footer,
    MainBanner,
    News,
    WeAre
  }
}
</script>

<style lang="scss">
</style>
