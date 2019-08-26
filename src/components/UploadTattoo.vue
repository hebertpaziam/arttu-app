<template>
  <div class="component-upload" v-show="isModalOpened">
    <div class="modal"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UploadTattoo",
  computed: {
    ...mapGetters("TattooModule", ['isModalOpened'])
  }
};
</script>

<style lang="scss">
.component-upload {
  @include display-flex(wrap, row, center, center);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  // visibility: hidden;

  &::before {
    content: "";
    @include backdrop-props;
  }
  > .modal {
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 400px;
    border-radius: 8px;
    background-color: #eeeeee;
    z-index: 1040;
  }
}
</style>