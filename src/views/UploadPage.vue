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
  }
}
</script>

<style lang="scss">
.view-upload-page {
  @include display-flex(row, nowrap, center, center);
  width: 100%;
  height: 100vh;
  background-color: #eaeef5;
}
</style>
