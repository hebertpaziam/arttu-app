<template>
  <div class="view-upload-page">
    <UploadTattoo />
  </div>
</template>

<script>
import UploadTattoo from '@/components/UploadTattoo'

export default {
  name: 'UploadPage',
  components: {
    UploadTattoo
  },
  methods: {
    goBack() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss">
.view-upload-page {
  @include display-flex(wrap, column, center, center);
  width: 100%;
  height: 100vh;
  background-color: #eaeef5;
}
</style>
